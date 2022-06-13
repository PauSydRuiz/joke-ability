from django.contrib.auth.backends import get_user_model

from rest_framework import serializers
from .models import Joke, Activity


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('id',
                  'username',
                  'email',
                  'password'
                  )


class JokeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Joke
        fields = ('id',
                  'user',
                  'post',
                  'publish_datetime'
                  )


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ('id',
                  'user',
                  'joke',
                  'is_positive'
                  )
