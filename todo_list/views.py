from django.core.urlresolvers import reverse_lazy
from django.views.generic import TemplateView, DeleteView, DetailView, ListView, UpdateView, CreateView, FormView, View
from models import *
from forms import *


class ListTasks(ListView):
    model = Task


class CreateTask(CreateView):
    model = Task


class UpdateTask(UpdateView):
    model = Task


class DeleteTask(DeleteView):
    model = Task

