from django.conf.urls import include, url
from views import *

urlpatterns = [
    url(r'^$', ListTasks.as_view(), name='question-page'),
    url(r'^task/(?P<pk>\d+)/create/$', CreateTask.as_view(), name='question-update-page'),
    url(r'^task/(?P<pk>\d+)/update/$', UpdateTask.as_view(), name='question-update-page'),
    url(r'^task/(?P<pk>\d+)/delete/$', DeleteTask.as_view(), name='question-list-page'),
]
