package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tasks")
public class Task {
	
	@Id
	 private String id;
	 private String name;
	 private String status;

public Task() {
	super();
	// TODO Auto-generated constructor stub
}

public Task(String id, String name, String status) {
	super();
	this.id = id;
	this.name = name;
	this.status = status;
}

public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}


}