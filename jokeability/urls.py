"""jokeability URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import JokeViewSet, UserViewSet

jokes_router = DefaultRouter()
jokes_router.register(r"jokes", JokeViewSet)

users_router = DefaultRouter()
users_router.register(r"users", UserViewSet)

#from .views import index
urlpatterns = (
    path('admin/', admin.site.urls),
    # path('index/', index, name='index'),
    path('core/', include('core.urls')),
    path('jokes/', include(jokes_router.urls)),
    path('users/', include(users_router.urls)),
)


