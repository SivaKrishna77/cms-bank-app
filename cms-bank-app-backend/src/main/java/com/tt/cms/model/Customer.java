package com.tt.cms.model;

import jakarta.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @Column(name = "AccNo")
    private long acc_no;
    
    @Column(name = "FirstName")
    private String firstName;

    @Column(name = "LastName")
    private String lastName;

    @Column(name = "Email")
    private String email;
    
    @Column(name = "Phno")
    private long phNo;

    @Column(name = "AadharNo")
    private long aadhar;
    
    @Column(name= "Balance")
    private float bal;

    @Column(name = "Address")
    private String address;
    
    @Column(name = "Branch")
    private String branch;

    public Customer() {

    }

    public Customer(long acc_no, String firstName, String lastName, 
    				String email, long phNo, long aadhar, float bal, String address, String branch) {
        super();
        this.acc_no = acc_no;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phNo = phNo;
        this.aadhar = aadhar;
        this.bal = bal;
        this.address = address;
        this.branch = branch;
    }

	public float getBal() {
		return bal;
	}

	public void setBal(float bal) {
		this.bal = bal;
	}

	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public long getAcc_no() {
		return acc_no;
	}

	public void setAcc_no(long acc_no) {
		this.acc_no = acc_no;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhNo() {
		return phNo;
	}

	public void setPhNo(long phNo) {
		this.phNo = phNo;
	}

	public long getAadhar() {
		return aadhar;
	}

	public void setAadhar(long aadhar) {
		this.aadhar = aadhar;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}
}