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
public class Outlet {
    private int idOutlet;
    private String namaOutlet;
    private String alamatOutlet;
    private Pegawai pegawaiOutlet;
    static int counter = 1;

    // Constructor, getter, dan setter
    public Outlet(String namaOutlet, String alamatOutlet, Pegawai pegawaiOutlet){
        this.idOutlet = counter++;
        this.namaOutlet = namaOutlet;
        this.alamatOutlet = alamatOutlet;
        this.pegawaiOutlet = pegawaiOutlet;
    }
    
    
    //getter
    public int getIdOutlet() {
        return idOutlet;
    }
    public String getNamaOutlet() {
        return namaOutlet;
    }
    public String getAlamatOutlet() {
        return alamatOutlet;
    }
    public Pegawai getPegawaiOutlet() {
        
        return pegawaiOutlet;
    }
    
    public void displayInfo() {
        System.out.println("Outlet ke - " + getIdOutlet());
        System.out.println("Nama Outlet                 :"+ getNamaOutlet());
        System.out.println("Alamat Outlet               :"+ getAlamatOutlet());
        System.out.println("Pegawai yg ditugaskan       :"+ getPegawaiOutlet().getNamaPegawai());
    }
    
    
}
