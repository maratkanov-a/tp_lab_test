import datetime
from django.contrib.auth.models import User
from django.db import models
from todo_list.managers import TaskManager


class Task(models.Model):
    description = models.CharField(max_length=40)
    deadline = models.DateTimeField(default=lambda: datetime.datetime.utcnow() + datetime.timedelta(days=1))
    is_completed = models.BooleanField(default=False)
    is_overdue = models.BooleanField(default=False)
    which_user = models.ForeignKey(User)

    object = TaskManager()
