/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package User;
import java.util.UUID;
/**
 *
 * @author Asus
 */
public class User {
    private UUID id;
    private String username;
    private String email;
    private String password;
    private String role;

    public void setId() {
        this.id = UUID.randomUUID();
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public UUID getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }
    
    public void infoUser() {
        System.out.println("Id          " + getId());
        System.out.println("Name        " + getUsername());
        System.out.println("Email       " + getEmail());
        System.out.println("Password    " + getPassword());
        System.out.println("Role        " + getRole());
    }
}
