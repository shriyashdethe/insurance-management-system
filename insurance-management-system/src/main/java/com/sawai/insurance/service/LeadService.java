package com.sawai.insurance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sawai.insurance.entity.Lead;
import com.sawai.insurance.repository.LeadRepository;

@Service
public class LeadService {

    @Autowired
    private LeadRepository leadRepository;

    // Save Lead
    public Lead saveLead(Lead lead) {
        return leadRepository.save(lead);
    }

    // Get All Leads
    public List<Lead> getAllLeads() {
        return leadRepository.findAll();
    }

    // Get Lead By ID
    public Lead getLeadById(Long id) {
        return leadRepository.findById(id).orElse(null);
    }

    // Update Lead
    public Lead updateLead(Lead lead) {
        return leadRepository.save(lead);
    }

    // Delete Lead
    public void deleteLead(Long id) {
        leadRepository.deleteById(id);
    }
}