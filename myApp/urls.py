from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('writepage', views.writepage, name='writepage'),
    path('librarypage', views.librarypage, name='librarypage'),
    path('followingpage', views.followingpage, name='followingpage'),
    path('notificationpage', views.notificationpage, name='notificationpage'),
    path('profilepage', views.profilepage, name='profilepage'),
    path('loginpage', views.loginpage, name='loginpage'),
    path('registerpage', views.registerpage, name='registerpage'),

    # 2. Header Popover URLs
    #path('notifications/', views.notifications_page_view, name='notifications_page'), # Maps to {% url 'notifications_page' %}
    #path('profile/', views.user_profile_view, name='user_profile'), # Maps to {% url 'user_profile' %}
    #path('settings/', views.user_settings_view, name='user_settings'), # Maps to {% url 'user_settings' %}
    #path('logout/', views.logout_view, name='logout'), # Maps to {% url 'logout' %}
]
    

    # path('login/', views.login, name='login'),
    # path('register/', views.register, name='register'),
    # path('home/', views.home, name='home'),
    # path('features/', views.features, name='features'),
    # path('write/', views.write, name='write'),
    # path('library/', views.library, name='library'),
    # path('history/', views.history, name='history'),
    # path('following/', views.following, name='following'),
    # path('menu/', views.menu, name='menu'),
      