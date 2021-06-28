package com.example.demo.model.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Task;
import com.example.demo.repo.TaskRepo;

@RestController
public class TaskController {
	
	@Autowired
	public TaskRepo taskRepo;
	
	@GetMapping(value = "/all")
	@CrossOrigin
	public List <Task> getAllTasks() {
		
		return taskRepo.findAll();
		
	}
	
	@GetMapping(value = "/all/{id}")
	@CrossOrigin
	public List <Task> getAllTasks(@PathVariable("id") String id) {
		
		return taskRepo.findTaskById(id);
		
	}
	
	
	@PostMapping(value = "/create")
	@CrossOrigin
	public List<Task> createTask(@RequestBody Task task) {
				
		Task insertedTask = taskRepo.insert(task);
		return taskRepo.findTaskById(insertedTask.getId());
	}
	
	@DeleteMapping("/task/{id}")
	@CrossOrigin
	public void deleteTask(@PathVariable String id) {
		
		taskRepo.deleteById(id);
	}
	
	
	@PutMapping("/task/{id}")
	@CrossOrigin
	public List<Task> updateTask(@RequestBody Task task, @PathVariable String id) {
		task.setId(id);
		taskRepo.save(task);

		return taskRepo.findTaskById(id);	
	}
	
}
