from django.db import models
from django.contrib.auth.models import User

    

class Joke(models.Model):
    user = models.TextField(default="", verbose_name="User")
    post = models.TextField(blank=True, default="", verbose_name="Post")
    # user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="User")
   
    isliked = models.BooleanField(default=False)
    liked = models.IntegerField(verbose_name="Liked", default=0)
    publish_datetime = models.DateTimeField(auto_now_add=True, verbose_name="Publication Datetime")

    def __str__(self):
        return self.post


class Activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    joke = models.ForeignKey(Joke, on_delete=models.SET_NULL, null=True)
    is_positive = models.BooleanField(default=True)