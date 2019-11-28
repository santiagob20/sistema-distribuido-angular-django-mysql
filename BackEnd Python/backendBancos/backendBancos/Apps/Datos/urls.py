from django.urls import path, include
from django.conf.urls import url
from .import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register('tipopersona', views.tipoUsuarioView)
router.register('rol', views.rolView)
router.register('persona', views.personaView)
router.register('producto', views.productoView)
router.register('productopersona', views.productoPersonaView)


urlpatterns = [
    path('', include(router.urls)),
    url(r'^authuser/$',views.auth_user)
]