package ServiciosREST;

import java.io.IOException; 
import javax.ws.rs.container.ContainerRequestContext; 
import javax.ws.rs.container.ContainerRequestFilter; 
import javax.ws.rs.core.Response;

public class CORSRequestFilter implements ContainerRequestFilter{
    
    public CORSRequestFilter(){
        super();
    }
    
    @Override
    public void filter(ContainerRequestContext containerRequestContext) throws IOException{
        if (containerRequestContext.getRequest().getMethod().equalsIgnoreCase("OPTIONS"))
        {
            containerRequestContext.abortWith(Response.status(Response.Status.OK).build());
        }
    }
}
