# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from datetime import datetime

from django.contrib.auth.backends import get_user_model

from rest_framework import mixins as rest_mixins
from rest_framework.viewsets import GenericViewSet, ReadOnlyModelViewSet
from rest_framework import permissions

from core.mixins import (
    ListActionMixin,
    CreateActionMixin,
    RetrieveActionMixin,
    UpdateActionMixin,
)
from core.models import Activity, Joke, User
from core.serializers import ActivitySerializer, JokeSerializer, UserSerializer


class UserViewSet(
   CreateActionMixin,
    RetrieveActionMixin,
    UpdateActionMixin,
    rest_mixins.DestroyModelMixin,
    ListActionMixin,
    GenericViewSet
):
    # queryset = get_user_model().objects.all()
    queryset = User.objects.all()
    serializer_class = UserSerializer
    create_serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class JokeViewSet(
    CreateActionMixin,
    RetrieveActionMixin,
    UpdateActionMixin,
    rest_mixins.DestroyModelMixin,
    ListActionMixin,
    GenericViewSet
):
    queryset = Joke.objects.all()
    serializer_class = JokeSerializer
    create_serializer_class = JokeSerializer
    permission_classes = [permissions.AllowAny]


class ActivityViewSet(
    CreateActionMixin,
    RetrieveActionMixin,
    UpdateActionMixin,
    rest_mixins.DestroyModelMixin,
    ListActionMixin,
    GenericViewSet
):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
