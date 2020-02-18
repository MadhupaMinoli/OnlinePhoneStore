package com.madhupa.assignment2.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Store {
        @Id
        @GeneratedValue(strategy= GenerationType.AUTO)
        private int storeId;

        @OneToMany(mappedBy = "store")
        private List<StoreProducts> storeProducts;

        private String storeName;
        private String storeContactNo;
        private String url;
        private String address;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<StoreProducts> getStoreProducts() {
            return storeProducts;
        }

        public void setStoreProducts(List<StoreProducts> storeProducts) {
            this.storeProducts = storeProducts;
        }

        public Store() {
        }

         public int getStoreId() {
            return storeId;
        }



        public void setStoreId(int storeId) {
            this.storeId = storeId;
        }

        public String getStoreName() {
            return storeName;
        }

        public void setStoreName(String storeName) {
            this.storeName = storeName;
        }

        public String getStoreContactNo() {
            return storeContactNo;
        }

        public void setStoreContactNo(String storeContactNo) {
            this.storeContactNo = storeContactNo;
        }
}
