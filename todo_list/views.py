import json
from django.contrib.auth import authenticate, login
from django.core.urlresolvers import reverse_lazy
from django.http import HttpResponse
from django.views.generic import TemplateView, DeleteView, DetailView, ListView, UpdateView, CreateView, FormView, View
from models import *
from forms import *


class ListTasks(ListView):
    queryset = Task.object.new()

    def get_context_data(self, **kwargs):
        data = super(ListTasks, self).get_context_data(**kwargs)
        data['now'] = datetime.datetime.now()
        return data


class CreateTask(CreateView):
    model = Task
    form_class = CreateTaskForm
    success_url = reverse_lazy('home-page')

    def form_valid(self, form):
        form.instance.which_user = self.request.user
        return super(CreateTask, self).form_valid(form)

    def form_invalid(self, form):
        data = []
        for k, v in form._errors.iteritems():
            text = {
                'desc': ', '.join(v),
            }
            if k == '__all__':
                text['key'] = '#{}'.format(self.request.POST.get('form'))
            else:
                text['key'] = '#{}'.format(k)
            data.append(text)
        response = {'bad': data}
        return HttpResponse(json.dumps(response))


class UpdateTaskCompletion(UpdateView):
    model = Task
    form_class = UpdateTaskCompletionForm
    success_url = reverse_lazy('home-page')


class UpdateTaskDeadline(UpdateView):
    model = Task
    form_class = UpdateTaskDeadlineForm
    success_url = reverse_lazy('home-page')


class DeleteTask(DeleteView):
    model = Task
    success_url = reverse_lazy('home-page')


class CreateUser(CreateView):
    model = User
    template_name_suffix = "_create_form"
    form_class = CreateUserForm
    success_url = reverse_lazy('home-page')

