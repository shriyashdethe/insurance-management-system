package com.sawai.insurance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sawai.insurance.entity.Lead;
import com.sawai.insurance.service.LeadService;

@RestController
@RequestMapping("/leads")
public class LeadController {

    @Autowired
    private LeadService leadService;

    // Create Lead
    @PostMapping
    public Lead saveLead(@RequestBody Lead lead) {
        return leadService.saveLead(lead);
    }

    // Get All Leads
    @GetMapping
    public List<Lead> getAllLeads() {
        return leadService.getAllLeads();
    }

    // Get Lead By ID
    @GetMapping("/{id}")
    public Lead getLeadById(@PathVariable Long id) {
        return leadService.getLeadById(id);
    }

    // Update Lead
    @PutMapping("/{id}")
    public Lead updateLead(@PathVariable Long id, @RequestBody Lead lead) {
        lead.setId(id);
        return leadService.updateLead(lead);
    }

    // Delete Lead
    @DeleteMapping("/{id}")
    public void deleteLead(@PathVariable Long id) {
        leadService.deleteLead(id);
    }
}