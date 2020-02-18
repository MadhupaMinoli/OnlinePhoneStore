package com.madhupa.assignment2.service;

import com.madhupa.assignment2.model.Brand;
import com.madhupa.assignment2.model.StoreProducts;
import com.madhupa.assignment2.repository.BrandRepository;
import com.madhupa.assignment2.repository.StoreProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StoreProductsService {

    @Autowired
    private StoreProductsRepository storeProductsRepository;

    public List<StoreProducts> getAll(){
        Iterable<StoreProducts> storeProductsRepositoryAll= storeProductsRepository.findAll();

        ArrayList<StoreProducts> storeProductsArrayList = new ArrayList<>();
        storeProductsRepositoryAll.forEach(storeProductsArrayList:: add);

        return storeProductsArrayList;

    }




}
