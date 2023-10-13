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
public class Pegawai {
    private int idPegawai;
    private String namaPegawai;
    private String alamatPegawai;
    private String kontakPegawai;
    static int counter = 1;

    // Constructor, getter, dan setter
    public Pegawai(String namaPegawai, String alamatPegawai, String kontakPegawai){
        this.idPegawai = counter++;
        this.namaPegawai = namaPegawai;
        this.alamatPegawai = alamatPegawai;
        this.kontakPegawai = kontakPegawai;
    }
    
    
    //getter
    public int getIdPegawai() {
        return idPegawai;
    }
    public String getNamaPegawai() {
        return namaPegawai;
    }
    public String getAlamatPegawai() {
        return alamatPegawai;
    }
    public String getKontakPegawai() {
        return kontakPegawai;
    }
    
    public void displayInfo() {
        System.out.println("Pegawai " + getIdPegawai());
        System.out.println("Nama Pegawai         :"+ getNamaPegawai());
        System.out.println("Alamat Pegawai       :"+ getAlamatPegawai());
        System.out.println("Kontak Pegawai       :"+ getKontakPegawai());
    }
    
    
}
