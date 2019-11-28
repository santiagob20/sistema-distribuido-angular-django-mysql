package Interfaces;

import DTO.Datos;
import DTO.Respuesta;


public interface interfaceDatos {

    public Respuesta insertar(Datos d);
    
    public Respuesta consultar(Datos d);

    public Respuesta editar(Datos d);

    public Respuesta eliminar(Datos d);

}
