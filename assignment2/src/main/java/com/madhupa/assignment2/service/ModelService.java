package com.madhupa.assignment2.service;

import com.madhupa.assignment2.model.Brand;
import com.madhupa.assignment2.model.PhoneModel;
import com.madhupa.assignment2.repository.BrandRepository;
import com.madhupa.assignment2.repository.ModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ModelService{

    @Autowired
    private ModelRepository modelRepository;

    public List<PhoneModel> getAll(){
        Iterable<PhoneModel> modelRepositoryAll = modelRepository.findAll();

        ArrayList<PhoneModel> modelArrayList = new ArrayList<>();
        modelRepositoryAll.forEach(modelArrayList:: add);

        return modelArrayList;

    }

    public Optional<PhoneModel> getById (int id){

        return modelRepository.findById(id);

    }


}
