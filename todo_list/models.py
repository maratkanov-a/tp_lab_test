import datetime
from django.contrib.auth.models import User
from django.db import models


class Task(models.Model):
    description = models.CharField(max_length=40)
    deadline = models.DateField(default=lambda: datetime.datetime.utcnow() + datetime.timedelta(days=1))
    is_competed = models.BooleanField(default=False)
    is_overdue = models.BooleanField(default=False)
    which_user = models.ForeignKey(User)
