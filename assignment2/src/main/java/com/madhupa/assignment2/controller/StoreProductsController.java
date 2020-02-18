package com.madhupa.assignment2.controller;

import com.madhupa.assignment2.model.Store;
import com.madhupa.assignment2.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Stores")
public class StoreProductsController {

    @Autowired
    private StoreService storeService;

    @GetMapping("/getAll")
    public List<Store> getAllStores(){

        return storeService.getAll();

    }

    @GetMapping(path = "/{id}")
    public Optional<Store> getById(@PathVariable("id") int id){

        storeService.getById(id);
       return storeService.getById(id);
    }

}
