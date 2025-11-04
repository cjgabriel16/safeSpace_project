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

# 2. Header Popover Links
#def notifications_page_view(request):
    # This is the 'View All' page
    #return render("<h1>All Notifications Page</h1>")

#def user_profile_view(request):
    #return render("<h1>User Profile Page</h1>")

#def user_settings_view(request):
    #return render("<h1>User Settings Page</h1>")

#def logout_view(request):
    # In a real app, this would handle the user logout logic
    #return render("<h1>Logged Out Successfully</h1>")

#def login(request):
    #return render(request, 'login.html')

#def register(request):
    #return render(request, 'register.html')

#def home(request):
    #return render(request, 'home.html')

#def features(request):
    #return render(request, 'features.html')

#def write(request):
    #return render(request, 'write.html')

#def library(request):
    #return render(request, 'library.html')

#def history(request):
    #return render(request, 'history.html')

#def following(request):
    #return render(request, 'following.html')

#def menu(request):
    #return render(request, 'menu.html')

