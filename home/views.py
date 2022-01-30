from django.shortcuts import render,HttpResponseRedirect
from .forms import SignUpForm, LoginForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .models import *
from django.db.models import Q

# Create your views here.

def home(request):
    return render(request,'home.html',{})

def btech(request):
    return render(request,'btech.html',{})

def ranking(request):
    return render(request,'ranking.html',{})

def user_login(request):
    form = LoginForm()
    if request.method == "POST":
        form = LoginForm(request=request, data=request.POST)
        if form.is_valid():
            uname = form.cleaned_data['username']
            upass = form.cleaned_data['password']
            print(uname)
            print(upass)
            user = authenticate(username=uname, password=upass)
            if user is not None:
                login(request, user)
                messages.success(request, 'Logged in Successfully !!')
                return HttpResponseRedirect('/home/')
    return render(request, 'login.html', {'form':form})

def user_signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            messages.success(request, 'Congratulations!! You have become an Author.')
            form.save()
    else:
        form = SignUpForm()
    return render(request,'signup.html',{'form':form})

def user_logout(request):
 logout(request)
 return HttpResponseRedirect('/home/')

def searchbar_view(request):
	if request.method == "POST":
		searched = request.POST['searched']
		filter_colleges = College.objects.filter(Q(Exam_Name__contains = searched) | Q(stream = searched) | Q(location__contains = searched) | Q(Course_type = searched)| Q(College_Name__contains = searched))
		return render(request, "searchbar.html", {'searched' : searched, 'filter_colleges': filter_colleges})
	else:
		return render(request, "searchbar.html")

def college_info(request):
    return render(request,'college_info.html',{})
