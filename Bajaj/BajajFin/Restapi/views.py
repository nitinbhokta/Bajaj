from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializer import UserSerializer



# Create your views here.

@api_view(['Get'])
def get_user(request):
    return Response(UserSerializer({'status': "true"  ,'userid':"Nitin",'email':"22bcshhjc@cuchd.in",'rollno':"123456"}))
