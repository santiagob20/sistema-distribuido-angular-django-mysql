package ServiciosREST;

import DTO.Datos;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import DTO.Respuesta;
import Modelo.operDatos;

@Path("servicios")
public class RestServices {


    @POST
    @Path("consultarCliente")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Respuesta consultarGacPorNit(Datos d) {
        return new operDatos().consultar(d);
    }

}
