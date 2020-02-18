package com.madhupa.assignment2.controller;

import com.madhupa.assignment2.model.Brand;
import com.madhupa.assignment2.model.Store;
import com.madhupa.assignment2.service.BrandService;
import com.madhupa.assignment2.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Brand")
public class BrandController {

    @Autowired
    private BrandService brandService;

    @GetMapping("/getAll")
    public List<Brand> getAllBrands(){

        return brandService.getAll();

    }


}
