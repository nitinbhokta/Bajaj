from django.db import models

# Create your models here.
class User(models.Model):
    status = models.CharField(max_length=100)
    userid = models.CharField(max_length=100)
    email = models.EmailField()
    rollno = models.CharField(max_length=50, blank=True, null=True)


    def __str__(self):
         return f"User: {self.userid}, Email: {self.email}, Roll No: {self.rollno}, Status: {self.status}"

