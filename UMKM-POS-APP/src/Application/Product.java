/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Application;
import java.util.UUID;
/**
 *
 * @author Asus
 */
public class Product {
    private UUID id;
    private String name;
    private int stock;
    private int prodPrice;
    private int sellPrice;
    
    //constructor
    public Product(String name, int stock, int prodPrice, int sellPrice) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.stock = stock;
        this.prodPrice = prodPrice;
        this.sellPrice = sellPrice;
    }
    
    //getter
    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getStock() {
        return stock;
    }

    public int getProdPrice() {
        return prodPrice;
    }

    public int getSellPrice() {
        return sellPrice;
    }
    
    
    public void displayInfo() {
        System.out.println("Produk              :" + getId());
        System.out.println("Nama Produk         :"+ getName());
        System.out.println("Jumlah Stok Produk  :"+ getStock());
        System.out.println("Harga Produk        :"+ getSellPrice());
    }
}
