package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceController {
	
	
	@Autowired
	private ServiceLayer s;
	
	
	//observe the input given and output returend is exactly the same
	//as we did in service function
	@GetMapping("/cvh")
	public int[] get5Multiples(@RequestParam("pqr") int nogiven)
	{
			
		return s.get5Multiples(nogiven);
	}
	
	
	

}
