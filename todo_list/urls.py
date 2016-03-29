from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from tp_lab_test import settings
from views import *

urlpatterns = [
    url(r'^$', ListTasks.as_view(), name='home-page'),
    url(r'^task/create/$', CreateTask.as_view(), name='task-create-page'),
    url(r'^task/(?P<pk>\d+)/update/$', UpdateTask.as_view(), name='task-update-page'),
    url(r'^task/(?P<pk>\d+)/delete/$', DeleteTask.as_view(), name='task-delete-page'),
]
urlpatterns += staticfiles_urlpatterns()

