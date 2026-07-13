package com.sawai.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sawai.insurance.entity.Policy;

public interface PolicyRepository extends JpaRepository<Policy, Long> {

}