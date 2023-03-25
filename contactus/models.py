from django.db import models

class Contactus(models.Model):
    name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    massage=models.TextField()

# Create your models here.
