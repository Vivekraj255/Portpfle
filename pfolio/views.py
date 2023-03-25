from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render,redirect

from contactus.models import Contactus  #(FOR FORM DATA)

def homePage(request):
     return render(request,"index.html")

def aboutme(request):
    return render(request,"about.html")
def contactUs(request):
    return render(request,"contact.html")

# GET FORM DATA
def saveEnquiry(request):
    
    if request.method=="POST":
        Name=request.POST.get('Name')
        Email=request.POST.get('Email')
        Massage=request.POST.get('Massage')
        data=Contactus(name=Name,email=Email,massage=Massage)
        data.save()
    return render(request,"index.html")