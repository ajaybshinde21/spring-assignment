package resource.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import resource.dao.ResourceDAOInterface;
import resource.model.Resource;

@Service
public class ResourceService implements ResourceServiceInterface {
	
	
	@Autowired
	private ResourceDAOInterface resourceDaoInterface;
	

	@Override
	public Resource getResourceDetails(int resourceId) {
		// TODO Auto-generated method stub
		
		Optional<Resource> x = resourceDaoInterface.findById(resourceId);
		Resource r = null;
		if(x.isPresent())
		{
			 r = x.get();
			
		}
		return r;
	}

	@Override
	public boolean addResource(Resource r) {
		// TODO Auto-generated method stub
		boolean added = false;
		try {
			resourceDaoInterface.save(r);
			added=true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
		}
		return added;
	}
	
	

}
