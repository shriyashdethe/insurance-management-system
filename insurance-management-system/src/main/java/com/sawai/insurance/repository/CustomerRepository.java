package com.sawai.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sawai.insurance.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}