from django.db import models


class TaskManager(models.Manager):
    def new(self):
        return self.order_by('deadline')
