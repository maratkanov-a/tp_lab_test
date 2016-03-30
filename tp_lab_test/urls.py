from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^login/', 'django.contrib.auth.views.login', name='login-page'),
    url(r'^logout/', 'django.contrib.auth.views.logout', {'next_page': '/'}, name='logout-page'),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('todo_list.urls')),
]
