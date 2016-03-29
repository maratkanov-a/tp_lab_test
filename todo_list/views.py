from django.core.urlresolvers import reverse_lazy
from django.views.generic import TemplateView, DeleteView, DetailView, ListView, UpdateView, CreateView, FormView, View
from models import *
from forms import *


class ListTasks(ListView):
    model = Task


class CreateTask(CreateView):
    model = Task
    form_class = CreateTaskForm
    success_url = reverse_lazy('home-page')

    def form_valid(self, form):
        form.instance.which_user = self.request.user
        return super(CreateTask, self).form_valid(form)


class UpdateTask(UpdateView):
    model = Task
    form_class = UpdateTaskForm


class DeleteTask(DeleteView):
    model = Task

