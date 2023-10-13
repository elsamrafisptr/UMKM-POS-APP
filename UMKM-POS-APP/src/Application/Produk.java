/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Application;

/**
 *
 * @author Asus
 */
public class Produk {
    private int idProduk;
    private String namaProduk;
    private int jumlahStok;
    private int hargaProduk;
    static int counter = 1;
    
    //constructor
    public Produk(String namaProduk, int jumlahStok, int hargaProduk) {
        this.idProduk = counter++;
        this.namaProduk = namaProduk;
        this.jumlahStok = jumlahStok;
        this.hargaProduk = hargaProduk;
    }
    
    //getter
    public int getIdProduk() {
        return idProduk;
    }
    public String getNamaProduk() {
        return namaProduk;
    }
    public int getJumlahStok() {
        return jumlahStok;
    }
    public int getHargaProduk() {
        return hargaProduk;
    }
    
    public void displayInfo() {
        System.out.println("Produk " + getIdProduk());
        System.out.println("Nama Produk         :"+ getNamaProduk());
        System.out.println("Jumlah Stok Produk  :"+ getJumlahStok());
        System.out.println("Harga Produk        :"+ getHargaProduk());
    }
}
