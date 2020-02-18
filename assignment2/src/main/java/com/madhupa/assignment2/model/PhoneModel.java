package com.madhupa.assignment2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class PhoneModel {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int phoneModelId;

    @ManyToOne
    @JsonIgnore
    private Brand brand;

    public List<MobilePhone> getMobilePhones() {
        return mobilePhones;
    }

    public void setMobilePhones(List<MobilePhone> mobilePhones) {
        this.mobilePhones = mobilePhones;
    }

    private String modelName;

    @OneToMany(mappedBy = "model")
    private List<MobilePhone> mobilePhones;


    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    private String url;

    public PhoneModel(){

    }



     public  int getBrandId(){

            return  this.brand.getBrandId();
     }

    public  String getBrandName(){

        return  this.brand.getBrandName();
    }
    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }



    public PhoneModel(String modelName) {
        this.modelName = modelName;
    }

    public int getPhoneModelId() {
        return phoneModelId;
    }

    public void setPhoneModelId(int phoneModelId) {
        this.phoneModelId = phoneModelId;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }
}
