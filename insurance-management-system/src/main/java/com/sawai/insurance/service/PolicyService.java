package com.sawai.insurance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sawai.insurance.entity.Policy;
import com.sawai.insurance.repository.PolicyRepository;

@Service
public class PolicyService {

    @Autowired
    private PolicyRepository policyRepository;

    // Save Policy
    public Policy savePolicy(Policy policy) {
        return policyRepository.save(policy);
    }

    // Get All Policies
    public List<Policy> getAllPolicies() {
        return policyRepository.findAll();
    }

    // Get Policy By ID
    public Policy getPolicyById(Long id) {
        return policyRepository.findById(id).orElse(null);
    }

    // Update Policy
    public Policy updatePolicy(Policy policy) {
        return policyRepository.save(policy);
    }

    // Delete Policy
    public void deletePolicy(Long id) {
        policyRepository.deleteById(id);
    }
}