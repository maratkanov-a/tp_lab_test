from django import forms
from todo_list.models import *


class CreateTaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['description']


class UpdateTaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['description', 'deadline', 'is_overdue', 'is_competed']
