package com.tt.cms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tt.cms.model.Customer;
import com.tt.cms.service.CustomerService;

@RestController
@RequestMapping("/customers/api")
@CrossOrigin("http://localhost:3000")
public class CustomerController {

	@Autowired
	private CustomerService service;

	@GetMapping("/all")
	public List<Customer> getCustomers() {
		return service.customers();
	}

	@PostMapping("/save")
	public Customer add(@RequestBody Customer customer) {
		return service.addCustomer(customer);
	}

	@PutMapping("/update/{Id}")
	public Customer update(@PathVariable Integer Id, @RequestBody Customer customer) {
		return service.updateCustomer(Id, customer);
	}

	@GetMapping("/getById/{Id}")
	public Customer findById(@PathVariable Integer Id) {
		return service.findCustomerById(Id);
	}

	@DeleteMapping("/delete/{Id}")
	public void delete(@PathVariable Integer Id) {
		service.deleteCustomer(Id);
	}
}