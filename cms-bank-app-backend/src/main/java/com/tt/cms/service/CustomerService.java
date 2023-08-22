package com.tt.cms.service;

import java.util.List;

import com.tt.cms.model.Customer;
import com.tt.cms.service.CustomerService;

public interface CustomerService {
	
	List<Customer> customers();
	
	Customer addCustomer(Customer customer);
	
	Customer updateCustomer(Integer Id,Customer customer);
	
	void deleteCustomer(Integer Id);

	Customer findCustomerById(Integer Id);
}