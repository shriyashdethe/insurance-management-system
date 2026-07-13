package com.sawai.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sawai.insurance.entity.Lead;

public interface LeadRepository extends JpaRepository<Lead, Long> {

}