package com.madhupa.assignment2.controller;

import com.madhupa.assignment2.model.Brand;
import com.madhupa.assignment2.model.PhoneModel;
import com.madhupa.assignment2.service.BrandService;
import com.madhupa.assignment2.service.ModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/model")
public class ModelController {

    @Autowired
    private ModelService modelService;

    @GetMapping("/getAll")
    public List<PhoneModel> getAllModels(){

        return modelService.getAll();

    }

    @GetMapping(path = "/{id}")
    public Optional<PhoneModel> getById(@PathVariable("id") int id){


        return modelService.getById(id);
    }



}
