package resource.service;

import resource.model.Resource;

public interface ResourceServiceInterface {
	
	public Resource getResourceDetails(int resourceId);
	public boolean addResource(Resource r);
	

}
