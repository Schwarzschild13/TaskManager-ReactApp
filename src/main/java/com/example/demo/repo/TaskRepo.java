package com.example.demo.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Task;

@Repository
public interface TaskRepo extends MongoRepository<Task, String>{

	List<Task> findTaskById(String id);

//	List findTaskById(Long id);
}	
