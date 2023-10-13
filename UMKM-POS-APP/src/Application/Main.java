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
public class Main {
    public static void main(String[] args) {
        Produk Produk1 = new Produk("Ayam Bakar", 15, 14000);
        Produk Produk2 = new Produk("Ayam Geprek", 25, 14000);
        
        Produk1.displayInfo();
        Produk2.displayInfo();
        
        Pegawai kasir1 = new Pegawai("ABC", "Jln. Terusan Buah Batu", "089123456789");
        Pegawai kasir2 = new Pegawai("BCD", "Jln. Bojong Batu", "089144446789");
        kasir1.displayInfo();
        
        Pegawai[] pegawai = {kasir1, kasir2};
        Outlet outlet1 = new Outlet("Buah Batu", "Dekat Telkom", kasir1);
        outlet1.displayInfo();
    }
}
