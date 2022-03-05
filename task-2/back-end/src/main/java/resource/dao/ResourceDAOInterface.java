package resource.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import resource.model.Resource;

@Repository
public interface ResourceDAOInterface extends JpaRepository<Resource, Integer>{
	
	
	

}
