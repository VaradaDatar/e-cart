package com.uhg.product.productserivice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Product")
public class Product {
	@Id
	private long id;
	private String product_name;
	private String product_discription;
	private String category;
	private long product_price;
	private long product_quantity;
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(long id, String product_name, String product_discription,String category, long product_price,
			long product_quantity) {
		super();
		this.id = id;
		this.product_name = product_name;
		this.product_discription = product_discription;
		this.category=category;
		this.product_price = product_price;
		this.product_quantity = product_quantity;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getProduct_discription() {
		return product_discription;
	}
	public void setProduct_discription(String product_discription) {
		this.product_discription = product_discription;
	}
	public long getProduct_price() {
		return product_price;
	}
	public void setProduct_price(long product_price) {
		this.product_price = product_price;
	}
	public long getProduct_quantity() {
		return product_quantity;
	}
	public void setProduct_quantity(long product_quantity) {
		this.product_quantity = product_quantity;
	}
	
}
