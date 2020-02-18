package com.madhupa.assignment2.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Brand {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int brandId;

    private String brandName;

    @OneToMany(mappedBy = "brand")
    private List<PhoneModel> models;

    public List<PhoneModel> getModels() {
        return models;
    }

    public void setModels(List<PhoneModel> models) {
        this.models = models;
    }


    public int getBrandId() {
        return brandId;
    }

    public void setBrandId(int brandId) {
        this.brandId = brandId;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }
}
