package com.conradpitheau.bookclub.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Size(min = 5, max = 75)
    private String name;
    @NotNull
    @Size(min = 5, max = 200)
    private String email;
    @NotNull
    @Size(min = 3, max = 60)
    private String password;
    @Column(updatable=false)
    
    @OneToMany(mappedBy="sender", fetch = FetchType.LAZY)
    private List<GIft> sendGifts;
    
    @OneToMany(mappedBy="receiver", fetch =FetchType.LAZY)
    private List<GIft> receivedGifts;
    
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
    @Transient
    @NotEmpty(message="Confirm Password is required!")
    @Size(min=8, max=128, message="Confirm Password must be between 8 and 128 characters")
    private String confirm;
    
	public User() {
	}

	public User(Long id, @NotNull @Size(min = 5, max = 75) String name, @NotNull @Size(min = 5, max = 200) String email,
			@NotNull @Size(min = 3, max = 60) String password, Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	public String getConfirm() {
		return confirm;
	}
	public void setConfirm(String confirm) {
		this.confirm = confirm;
	}
	public List<GIft> getSendGifts() {
		return sendGifts;
	}
	public void setSendGifts(List<GIft> sendGifts) {
		this.sendGifts = sendGifts;
	}
	public List<GIft> getReceivedGifts() {
		return receivedGifts;
	}
	public void setReceivedGifts(List<GIft> receivedGifts) {
		this.receivedGifts = receivedGifts;
	}
	
	
}

