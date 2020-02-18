package com.madhupa.assignment2.controller;

import com.madhupa.assignment2.model.Store;
import com.madhupa.assignment2.model.StoreProducts;
import com.madhupa.assignment2.service.StoreProductsService;
import com.madhupa.assignment2.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/StoreProducts")
public class StoreController {

    @Autowired
    private StoreProductsService storeProductsService;

    @GetMapping("/getAll")
    public List<StoreProducts> getAllStores(){

        return storeProductsService.getAll();

    }



}
