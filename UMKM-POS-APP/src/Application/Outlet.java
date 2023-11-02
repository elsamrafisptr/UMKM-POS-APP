/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Application;

import java.util.UUID;
import java.util.ArrayList;

import User.Employee;

/**
 *
 * @author Asus
 */
public class Outlet {

    private UUID id;
    private String outletAddress;
    private ArrayList<String> contact;
    private ArrayList<Employee> employees;
    private ArrayList<Product> products;
    static int counter = 1;

    // Constructor
    public Outlet(String outletAddress, ArrayList<String> contact) {
        this.id = UUID.randomUUID();
        this.outletAddress = outletAddress;
        this.contact = contact;
        this.products = new ArrayList<>();
        this.employees = new ArrayList<>();
    }

    // Getter and Setter methods
    public UUID getId() {
        return id;
    }

    public void setId() {
        this.id = UUID.randomUUID();
    }

    public String getOutletAddress() {
        return outletAddress;
    }

    public void setOutletAddress(String outletAddress) {
        this.outletAddress = outletAddress;
    }

    public ArrayList<String> getContact() {
        return contact;
    }

    public void setContact(ArrayList<String> contact) {
        this.contact = contact;
    }

    public ArrayList<Product> getProducts() {
        return products;
    }

    public ArrayList<Employee> getEmployees() {
        return employees;
    }

    // Method to add product to the outlet
    public void addProduct(Product product) {
        products.add(product);
        System.out.println("Product " + product.getName() + " added to the outlet.");
    }

    // Method to remove product from the outlet
    public void removeProduct(Product product) {
        if (products.contains(product)) {
            products.remove(product);
            System.out.println("Product " + product.getName() + " removed from the outlet.");
        } else {
            System.out.println("Product not found in the outlet.");
        }
    }

    // Method to add employee to the outlet
    public void addEmployee(Employee employee) {
        employees.add(employee);
        System.out.println("Employee " + employee.getUsername() + " added to the outlet.");
    }

    // Method to remove employee from the outlet
    public void removeEmployee(Employee employee) {
        if (employees.contains(employee)) {
            employees.remove(employee);
            System.out.println("Employee " + employee.getUsername() + " removed from the outlet.");
        } else {
            System.out.println("Employee not found in the outlet.");
        }
    }

    // Method to display outlet information
    public void displayOutletInfo() {
        System.out.println("Outlet ID: " + id);
        System.out.println("Outlet Address: " + outletAddress);
        System.out.println("Contact Information:");
        for (String contactInfo : contact) {
            System.out.println("- " + contactInfo);
        }
        System.out.println("Products in the Outlet:");
        for (Product product : products) {
            System.out.println("- " + product.getName());
        }
        System.out.println("Employees in the Outlet:");
        for (Employee employee : employees) {
            System.out.println("- " + employee.getUsername());
        }
    }

}
