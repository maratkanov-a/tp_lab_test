from django.contrib.auth.models import User
from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=40)
    deadline = models.DateField()
    is_competed = models.BooleanField(default=False)
    is_overdue = models.BooleanField(default=False)
    which_user = models.ForeignKey(User)
