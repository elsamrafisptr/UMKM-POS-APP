/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Application;

import java.util.UUID;
import java.util.ArrayList;
import java.util.Date;

import User.Employee;

/**
 *
 * @author Asus
 */
public class Transaction {

    private UUID id;
    private ArrayList<Product> products;
    private Employee worker;
    private String paymentMethod;
    private Date dateTransaction;
    private double totalAmount;
    private boolean isCompleted;

    public Transaction(Employee worker, String paymentMethod) {
        this.id = UUID.randomUUID();
        this.products = new ArrayList<>();;
        this.worker = worker;
        this.paymentMethod = paymentMethod;
        this.dateTransaction = new Date();
        this.totalAmount = calculateTotalAmount();
        this.isCompleted = false;
    }

    // Method to calculate total amount of the transaction
    private double calculateTotalAmount() {
        double totalAmount = 0;
        for (Product product : products) {
            totalAmount += product.getSellPrice();
        }
        return totalAmount;
    }

    // Method to add a product to the transaction
    public void addProduct(Product product) {
        products.add(product);
        totalAmount += product.getSellPrice();
    }

    // Method to remove a product from the transaction
    public void removeProduct(Product product) {
        if (products.contains(product)) {
            products.remove(product);
            totalAmount -= product.getSellPrice();
        }
    }

    // Method to complete the transaction
    public void completeTransaction() {
        isCompleted = true;
        // Implement logic for completing the transaction, such as updating inventory and generating receipts.
    }

    // Method to print receipt
    public void printReceipt() {
        System.out.println("============================");
        System.out.println("Transaction ID: " + id);
        System.out.println("Date: " + dateTransaction);
        System.out.println("============================");
        System.out.println("Cashier: " + worker.getUsername());
        System.out.println("Products Purchased:");
        for (Product product : products) {
            System.out.println("- " + product.getName() + ": Rp" + product.getSellPrice());
        }
        System.out.println("Total Amount:Rp" + totalAmount);
        System.out.println("Payment Method: " + paymentMethod);
        System.out.println("Thank you for your purchase!");
        System.out.println("============================");
    }

    // Getter methods
    public UUID getId() {
        return id;
    }

    public ArrayList<Product> getProducts() {
        return products;
    }

    public Employee getWorker() {
        return worker;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public Date getDateTransaction() {
        return dateTransaction;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public boolean isCompleted() {
        return isCompleted;
    }
}
