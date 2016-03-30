from django import forms
from todo_list.models import *


class CreateTaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['description']


class UpdateTaskDeadlineForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['deadline']


class UpdateTaskOverdueForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['is_overdue']


class UpdateTaskCompletionForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['is_completed']
