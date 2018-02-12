package fr.asoumagne.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import fr.asoumagne.entities.UserEntity;

@Path("/users")
public class HelloWorldService {

	// @GET
	// @Path("/{id}")
	// @Produces(MediaType.APPLICATION_JSON)
	// public User getUser( @PathParam("id") int id ) {
	// User user = new User(id, "John Doe", 22);
	// return user;
	// }
	//
	// @GET
	// @Path("/test/{name}")
	// public int getMsg( @PathParam("name") int name ) {
	// System.out.println(name);
	// return name;
	// }

	@POST
	@Path("/add")
	@Consumes(MediaType.APPLICATION_JSON)
	public int getMsg(UserEntity user) {
		System.out.println(user);
		return 0;
	}
}
