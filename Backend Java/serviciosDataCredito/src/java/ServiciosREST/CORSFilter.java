package ServiciosREST;

import javax.ws.rs.container.ContainerRequestContext; 
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;

public class CORSFilter implements ContainerResponseFilter{
    public CORSFilter()
    {
        super();
    }
    @Override 
    public void filter(ContainerRequestContext containerRequest, ContainerResponseContext containerResponse)
    {
        containerResponse.getHeaders().add("Access-Control-Allow-Origin", "*");
        containerResponse.getHeaders().add("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        containerResponse.getHeaders().add("Access-Control-Allow-Credentials", "true");
        containerResponse.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
    } 
}