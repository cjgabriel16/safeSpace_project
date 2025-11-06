from django.shortcuts import render

# Create your views here.
def homepage(request):
    return render(request, 'demmit/homepage.html')

def writepage(request):
    return render(request, 'demmit/writepage.html')

def librarypage(request):
    return render(request, 'demmit/librarypage.html')

def followingpage(request):
    return render(request, 'demmit/followingpage.html')

def notificationpage(request):
    return render(request, 'demmit/notificationpage.html')

def profilepage(request):
    return render(request, 'demmit/profilepage.html')

def loginpage(request):
    return render(request, 'demmit/loginpage.html')

def registerpage(request):
    return render(request, 'demmit/registerpage.html')