from django.contrib import admin
from backendBancos.Apps.Datos.models import *
# Register your models here.
admin.site.register(TipoUsuario)
admin.site.register(Rol)
admin.site.register(Persona)
admin.site.register(Producto)
admin.site.register(ProductoPersona)