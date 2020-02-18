package com.madhupa.assignment2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class MobilePhone {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int mobilePhoneId;

    private String spec;

    @ManyToOne
    @JsonIgnore
    private PhoneModel model;

    @OneToMany(mappedBy = "mobilePhone")
    private List<StoreProducts> storeProducts;

    public List<StoreProducts> getStoreProducts() {
        return storeProducts;
    }

    public void setStoreProducts(List<StoreProducts> storeProducts) {
        this.storeProducts = storeProducts;
    }

    public int getMobilePhoneId() {
        return mobilePhoneId;
    }

    public void setMobilePhoneId(int mobilePhoneId) {
        this.mobilePhoneId = mobilePhoneId;
    }

    public String getSpec() {
        return spec;
    }

    public void setSpec(String spec) {
        this.spec = spec;
    }

    public PhoneModel getModel() {
        return model;
    }

    public void setModel(PhoneModel model) {
        this.model = model;
    }
}
