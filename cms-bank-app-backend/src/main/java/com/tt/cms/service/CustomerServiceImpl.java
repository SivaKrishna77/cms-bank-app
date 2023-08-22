package com.tt.cms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tt.cms.model.Customer;
import com.tt.cms.repository.CustRepository;
import com.tt.cms.exception.CustomerNotFoundException;

@Service
public class CustomerServiceImpl implements CustomerService {
	private CustRepository repository;
	
	public CustomerServiceImpl (CustRepository repository) {
		this.repository = repository;
	}
	
	@Override
	public List<Customer> customers() {
		return repository.findAll();
	}

	@Override
	public Customer addCustomer(Customer customer) {
		return repository.save(customer);
	}

	@Override
	public Customer updateCustomer(Integer Id, Customer customer) {
		Customer customerById = findCustomerById(Id);
		customerById = findCustomerById(Id);
		customerById.setAadhar(customer.getAadhar());
		customerById.setAcc_no(customer.getAcc_no());
		customerById.setAddress(customer.getAddress());
		customerById.setBranch(customer.getBranch());
		customerById.setEmail(customer.getEmail());
		customerById.setFirstName(customer.getFirstName());
		customerById.setLastName(customer.getLastName());
		customerById.setPhNo(customer.getPhNo());
		customerById.setBal(customer.getBal());
		
		repository.save(customerById);
		return customerById;
	}

	@Override
	public Customer findCustomerById(Integer Id) {
		return repository.findById(Id)
				.orElseThrow(() -> new CustomerNotFoundException("Customer Not Found with ID : "+ Id));
	}

	@Override
	public void deleteCustomer(Integer Id) {
		Customer customerById=findCustomerById(Id);
		repository.delete(customerById);
	}

}
