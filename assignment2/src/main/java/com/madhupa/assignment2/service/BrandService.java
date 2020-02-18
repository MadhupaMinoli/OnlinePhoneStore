package com.madhupa.assignment2.service;

import com.madhupa.assignment2.model.Brand;
import com.madhupa.assignment2.model.Store;
import com.madhupa.assignment2.repository.BrandRepository;
import com.madhupa.assignment2.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BrandService {

    @Autowired
    private BrandRepository brandRepository;

    public List<Brand> getAll(){
        Iterable<Brand> brandRepositoryAll = brandRepository.findAll();

        ArrayList<Brand> brandArrayList = new ArrayList<>();
        brandRepositoryAll.forEach(brandArrayList:: add);

        return brandArrayList;

    }


}
