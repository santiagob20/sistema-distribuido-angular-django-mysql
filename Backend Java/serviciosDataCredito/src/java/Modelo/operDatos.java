package Modelo;

import DTO.Datos;
import DTO.Respuesta;
import Interfaces.interfaceDatos;

public class operDatos implements interfaceDatos {

    private Respuesta respuesta = new Respuesta();

    @Override
    public Respuesta insertar(Datos d) {
        return respuesta;
    }

    @Override
    public Respuesta consultar(Datos d) {
        Datos datos = new Datos();
        datos.setNombresCliente("Seabstian");
        datos.setApellidosCliente("Pinto");
        datos.setTelefonoCliente("3152236878");
        datos.setDireccionCliente("Calle 123 # 45-68");
        respuesta.setCodigo(1);
        respuesta.setDatos(datos);
        respuesta.setDescripcion("Consulta Exitosa.");
        return respuesta;
    }

    @Override
    public Respuesta editar(Datos d) {
        return respuesta;
    }

    @Override
    public Respuesta eliminar(Datos d) {
        return respuesta;
    }

}
