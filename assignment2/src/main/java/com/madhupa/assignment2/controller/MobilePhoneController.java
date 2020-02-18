package com.madhupa.assignment2.controller;

import com.madhupa.assignment2.model.Brand;
import com.madhupa.assignment2.model.MobilePhone;
import com.madhupa.assignment2.model.StoreProducts;
import com.madhupa.assignment2.service.BrandService;
import com.madhupa.assignment2.service.MobilePhoneService;
import com.madhupa.assignment2.service.StoreProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/mobilePhone")
public class MobilePhoneController {

    @Autowired
    private MobilePhoneService mobilePhoneService;


    @GetMapping("/getAll")
    public List<MobilePhone> getAllMobilePhones(){

        return mobilePhoneService.getAll();

    }

    @GetMapping(path = "/{id}")
    public Optional<MobilePhone> getById(@PathVariable("id") int id){


        return mobilePhoneService.getById(id);
    }




}
