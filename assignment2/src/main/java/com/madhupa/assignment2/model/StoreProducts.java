package com.madhupa.assignment2.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class StoreProducts {

@Id
private int storeProductId;


@ManyToOne
@JsonIgnore
private MobilePhone mobilePhone;


@ManyToOne
@JsonIgnore
private Store store;

    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public MobilePhone getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(MobilePhone mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public String getPhoneName(){
        return this.mobilePhone.getModel().getModelName();
    }
    public String getPhoneSpec(){
        return this.mobilePhone.getSpec();
    }

    public  String getModelUrl(){
        return this.mobilePhone.getModel().getUrl();
    }
    public int getMobileId(){
        return this.mobilePhone.getMobilePhoneId();
    }

    public String getStoreName(){
        return  this.store.getStoreName();
    }

    public int getStoreId(){
        return this.store.getStoreId();
    }

    private int price;
    private int discount;

    public int getDiscount() {
        return discount;
    }

    public String getBrandName(){
        return this.mobilePhone.getModel().getBrand().getBrandName();
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public int getStoreProductId() {
        return storeProductId;
    }

    public void setStoreProductId(int storeProductId) {
        this.storeProductId = storeProductId;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
