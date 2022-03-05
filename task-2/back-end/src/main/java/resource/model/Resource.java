package resource.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Resource {
	
	@Id
	private int resourceId; 
	
	private String resourceName;
	private boolean avaialability;
	public int getResourceId() {
		return resourceId;
	}
	public void setResourceId(int resourceId) {
		this.resourceId = resourceId;
	}
	public String getResourceName() {
		return resourceName;
	}
	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}
	public boolean isAvaialability() {
		return avaialability;
	}
	public void setAvaialability(boolean avaialability) {
		this.avaialability = avaialability;
	}
	public Resource(int resourceId, String resourceName, boolean avaialability) {
		
		this.resourceId = resourceId;
		this.resourceName = resourceName;
		this.avaialability = avaialability;
	}
	public Resource() {
		// TODO Auto-generated constructor stub
	}
	
	

}
