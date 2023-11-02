/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Application;

import java.util.UUID;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Date;

import User.User;
import User.Employee;
import java.util.Scanner;

/**
 *
 * @author Asus
 */
public class Main {

    public static void main(String[] args) {
        int userChoice;

        // Karyawan
        Employee karyawan1 = new Employee("Asep", "asep@", "asep", 1000000, "Buah batu");
        Employee karyawan2 = new Employee("tejo", "asep", "asep", 1500000, "Paris Van Java");

        // Produk
        Product Produk1 = new Product("Ayam Bakar", 15, 10000, 14000);
        Product Produk2 = new Product("Ayam Geprek", 25, 9500, 14000);
        Product Produk3 = new Product("Ayam Goreng Kremes", 25, 11000, 14000);
        Product Produk4 = new Product("Bebek Goreng", 15, 13000, 17000);
        Product Produk5 = new Product("Lele Goreng", 20, 9000, 12000);

        //  Outlet
        ArrayList<String> contactInfo = new ArrayList<>();
        contactInfo.add("Phone: 0812-3456-7890");
        contactInfo.add("Email: example@example.com");

        Outlet outlet1 = new Outlet("Depan Gate 1 Universitas Telkom, Bojongsoang", contactInfo);
        // Memasukkan karyawan dan produk ke dalam outlet
        outlet1.addEmployee(karyawan1);
        outlet1.addEmployee(karyawan2);

        outlet1.addProduct(Produk1);
        outlet1.addProduct(Produk2);
        outlet1.addProduct(Produk3);
        outlet1.addProduct(Produk4);
        outlet1.addProduct(Produk5);
        System.out.println("");
        outlet1.displayOutletInfo();
        
        
        Transaction transaction1 = new Transaction(karyawan1, "Cash");
        transaction1.addProduct(Produk1);
        transaction1.addProduct(Produk2);
        transaction1.addProduct(Produk4);
        transaction1.addProduct(Produk4);
        transaction1.addProduct(Produk5);
        transaction1.printReceipt();
        
        System.out.println("\n");
        transaction1.removeProduct(Produk4);
        transaction1.removeProduct(Produk5);
        transaction1.printReceipt();
        
    }
}
