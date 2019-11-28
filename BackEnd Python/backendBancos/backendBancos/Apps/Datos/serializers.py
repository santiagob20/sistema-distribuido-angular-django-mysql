from rest_framework import serializers
from .models import TipoUsuario, Rol, Persona, Producto, ProductoPersona


class tipoUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoUsuario
        fields = ('id_tipousuario', 'descripcion')


class rolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = ('id_rol', 'descripcion')


class personaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ('id_persona', 'nombre', 'cedula', 'direccion',
                  'telefono', 'tipo_usuario', 'tipo_rol', 'usuario', 'clave')


class authPersonaSerializer(serializers.Serializer):
    class Meta:
        model = Persona
        fields = ('id_persona', 'nombre', 'cedula', 'tipo_usuario', 'tipo_rol', 'usuario')


class productoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ('id_producto', 'descripcion', 'precio')


class productoPersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductoPersona
        fields = ('id_productoPersona', 'id_persona', 'id_producto')
