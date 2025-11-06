from django.urls import path
from . import views

urlpatterns = [
    path('', views. homepage, name='homepage'),
    path('writepage', views.writepage, name='writepage'),
    path('librarypage', views.librarypage, name='librarypage'),
    path('followingpage', views.followingpage, name='followingpage'),
    path('notificationpage', views.notificationpage, name='notificationpage'),
    path('profilepage', views.profilepage, name='profilepage'),
    path('loginpage', views.loginpage, name='loginpage'),
    path('registerpage', views.registerpage, name='registerpage'),
]