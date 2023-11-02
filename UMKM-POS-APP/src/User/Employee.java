/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package User;

/**
 *
 * @author Asus
 */
public class Employee extends User{
    private int salary;
    private String placement;
    
    public Employee(String name, String email, String password, int salary, String placement){
        setId();
        setRole("Employee");
        setUsername(name);
        setEmail(email);
        setPassword(password);
        this.salary = salary;
        this.placement = placement;
    }

    public int getSalary() {
        return salary;
    }

    public String getPlacement() {
        return placement;
    }
    
    public void infoUser() {
        System.out.println("Id          " + getId());
        System.out.println("Name        " + getUsername());
        System.out.println("Email       " + getEmail());
        System.out.println("Password    " + getPassword());
        System.out.println("Role        " + getRole());
        System.out.println("Salary      " + getSalary());
        System.out.println("Placemen    " + getPlacement());
        
    }
}
