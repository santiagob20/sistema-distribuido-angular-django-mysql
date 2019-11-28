# Create your models here.
from django.db import models

# Create your models here.
class TipoUsuario(models.Model):
    id_tipousuario = models.AutoField(primary_key=True)
    descripcion = models.CharField(max_length=50)

    def _str_(self):
        return "{0} {1}".format(self.id_tipousuario, self.descripcion)

class Rol(models.Model):
    id_rol = models.AutoField(primary_key=True)
    descripcion = models.CharField(max_length=50)

    def _str_(self):
        return "{0} {1}".format(self.id_rol, self.descripcion)

class Persona(models.Model):
    id_persona = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    cedula = models.CharField(max_length=50)
    direccion = models.CharField(max_length=50)
    telefono = models.CharField(max_length=50)
    tipo_usuario = models.ForeignKey(TipoUsuario,  null=False, blank=False, on_delete = models.CASCADE)
    tipo_rol = models.ForeignKey(Rol,  null=False, blank=False, on_delete = models.CASCADE)
    usuario = models.CharField(max_length=50, default='')
    clave = models.CharField(max_length=500, default='')

    def _str_(self):
        return "{0} {1} {2} {3} {4} {5} {6}".format(self.id_persona, self.nombre, self.cedula, self.direccion, self.telefono, self.tipo_usuario, self.tipo_rol)

class Producto(models.Model):
    id_producto = models.AutoField(primary_key=True)
    descripcion = models.CharField(max_length=50)
    precio = models.CharField(max_length=50)

    def _str_(self):
        return "{0} {1} {2}".format(self.id_producto, self.descripcion, self.precio)

class ProductoPersona(models.Model):
    id_productoPersona = models.AutoField(primary_key=True)
    id_persona = models.ForeignKey(Persona,  null=False, blank=False, on_delete = models.CASCADE)
    id_producto = models.ForeignKey(Producto,  null=False, blank=False, on_delete = models.CASCADE)

    def _str_(self):
        return "{0} {1} {2}".format(self.id_productoPersona, self.id_persona, self.id_producto)

