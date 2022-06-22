from django.contrib.auth.backends import get_user_model

from rest_framework import serializers
from .models import Joke, Activity, User

from rest_framework.validators import UniqueTogetherValidator


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id',
                  'username',
                  'email',
                  'password'
                  )
        
    
    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data) 
        user.set_password(validated_data['password'])
        user.save()
        return user
       
   


class JokeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Joke
        fields = ('id',
                  'user',
                  'post',
                  'isliked',
                  'liked',
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
