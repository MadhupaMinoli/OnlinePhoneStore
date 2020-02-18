package com.madhupa.assignment2.repository;

import com.madhupa.assignment2.model.Brand;
import com.madhupa.assignment2.model.PhoneModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.ui.Model;

public interface ModelRepository extends CrudRepository<PhoneModel, Integer> {




}
