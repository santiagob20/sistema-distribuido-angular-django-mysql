from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from .models import TipoUsuario, Rol, Persona, Producto, ProductoPersona
from .serializers import *
from django.db.models import Q
from django.http import HttpResponse, JsonResponse, HttpRequest
import json

# Create your views here.


class tipoUsuarioView(viewsets.ModelViewSet):
    queryset = TipoUsuario.objects.all()
    serializer_class = tipoUsuarioSerializer


class rolView(viewsets.ModelViewSet):
    queryset = Rol.objects.all()
    serializer_class = rolSerializer


class personaView(viewsets.ModelViewSet):
    queryset = Persona.objects.all()
    serializer_class = personaSerializer


class productoView(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = productoSerializer


class productoPersonaView(viewsets.ModelViewSet):
    queryset = ProductoPersona.objects.all()
    serializer_class = productoPersonaSerializer


@csrf_exempt
def auth_user(request):
    req_body = json.loads(request.body)
    criterio1 = Q(usuario=req_body['usuario'])
    criterio2 = Q(clave=req_body['clave'])
    user = Persona.objects.filter(criterio1 & criterio2).values(
        'id_persona', 'nombre', 'cedula', 'tipo_usuario', 'tipo_rol', 'usuario')
    data_user = list(user)
    

    if(len(data_user) > 0):
        data2 = data_user[0]
        rta = {
            'code': 1,
            "description": "user authenticated succesfully",
            'data_user': data2
        }
    else:
        rta = {
            'code': 0,
            "description": "user not authenticated",
            'data_user': data_user
        }
    return JsonResponse(rta, safe=False)