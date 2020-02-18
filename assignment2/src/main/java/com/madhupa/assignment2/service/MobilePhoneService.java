package com.madhupa.assignment2.service;

import com.madhupa.assignment2.model.Brand;
import com.madhupa.assignment2.model.MobilePhone;
import com.madhupa.assignment2.model.Store;
import com.madhupa.assignment2.repository.BrandRepository;
import com.madhupa.assignment2.repository.MobilePhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MobilePhoneService {

    @Autowired
    private MobilePhoneRepository mobilePhoneRepository;

    public List<MobilePhone> getAll(){
        Iterable<MobilePhone> mobilePhoneRepositoryAll = mobilePhoneRepository.findAll();

        ArrayList<MobilePhone> mobilePhoneArrayList = new ArrayList<>();
        mobilePhoneRepositoryAll.forEach(mobilePhoneArrayList:: add);

        return mobilePhoneArrayList;

    }

    public Optional<MobilePhone> getById (int id){

        return mobilePhoneRepository.findById(id);

    }



}
