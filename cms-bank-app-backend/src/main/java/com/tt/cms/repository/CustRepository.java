package com.tt.cms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tt.cms.model.Customer;

public interface CustRepository extends JpaRepository<Customer, Long>{

	Optional<Customer> findById(Integer id);

}