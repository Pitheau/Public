package com.conradpitheau.bookclub.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="gifts")
public class GIft {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Size(min = 2, max = 200)
	private String giftName;
	
	@NotNull
	@Min(0)
	private Integer quantity;
	
	@ManyToOne(fetch =FetchType.LAZY)
	@JoinColumn(name="sender_id")
	private User sender;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="receiver_id")
	private User receiver;
	
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
	public GIft() {}
	public GIft(Long id, @NotNull @Size(min = 2, max = 200) String giftName, @NotNull @Min(0) Integer quantity) {
		super();
		this.id = id;
		this.giftName = giftName;
		this.quantity = quantity;
	
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getGiftName() {
		return giftName;
	}
	public void setGiftName(String giftName) {
		this.giftName = giftName;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public User getSender() {
		return sender;
	}
	public void setSender(User sender) {
		this.sender = sender;
	}
	public User getReceiver() {
		return receiver;
	}
	public void setReceiver(User receiver) {
		this.receiver = receiver;
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
	
	
	 
	 
}