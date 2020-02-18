package com.madhupa.assignment2.service;

import com.madhupa.assignment2.model.Store;
import com.madhupa.assignment2.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StoreService {

    @Autowired
    private StoreRepository storeRepository;

    public List<Store> getAll(){
        Iterable<Store> storeRepositoryAll = storeRepository.findAll();

        ArrayList<Store> storeArrayList = new ArrayList<>();
        storeRepositoryAll.forEach(storeArrayList:: add);

        return storeArrayList;

    }

    public Optional<Store> getById (int id){

        return storeRepository.findById(id);

    }


}
