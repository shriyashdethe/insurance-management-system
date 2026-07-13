package com.sawai.insurance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sawai.insurance.entity.Policy;
import com.sawai.insurance.service.PolicyService;

@RestController
@RequestMapping("/policies")
public class PolicyController {

    @Autowired
    private PolicyService policyService;

    // Create Policy
    @PostMapping
    public Policy savePolicy(@RequestBody Policy policy) {
        return policyService.savePolicy(policy);
    }

    // Get All Policies
    @GetMapping
    public List<Policy> getAllPolicies() {
        return policyService.getAllPolicies();
    }

    // Get Policy By ID
    @GetMapping("/{id}")
    public Policy getPolicyById(@PathVariable Long id) {
        return policyService.getPolicyById(id);
    }

    // Update Policy
    @PutMapping("/{id}")
    public Policy updatePolicy(@PathVariable Long id, @RequestBody Policy policy) {
        policy.setId(id);
        return policyService.updatePolicy(policy);
    }

    // Delete Policy
    @DeleteMapping("/{id}")
    public void deletePolicy(@PathVariable Long id) {
        policyService.deletePolicy(id);
    }
}