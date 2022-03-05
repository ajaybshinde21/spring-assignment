package resource.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import resource.model.Resource;
import resource.service.ResourceServiceInterface;
@CrossOrigin(origins= "*")
@RestController
public class ResourceController {
	
	@Autowired
	private ResourceServiceInterface resourceServiceInterface;
	
	
	// http://localhost:777/gr/3
	@GetMapping("/gr/{resourceId}")
	public ResponseEntity<Resource> getResourceDetails(@PathVariable int resourceId) {
			Resource resource = resourceServiceInterface.getResourceDetails(resourceId);
			if( resource == null){
				return  ResponseEntity.notFound().build();
			}
			return ResponseEntity.ok().body(resource);
		
	}
	
	
	
	// erquest body somebody has to supply resource object.
	//as a json spring will convert that into java object
	@PostMapping("/ar")
	public boolean addResource(@RequestBody Resource r) {
		
		
		return resourceServiceInterface.addResource(r);
		
	}
	

}
