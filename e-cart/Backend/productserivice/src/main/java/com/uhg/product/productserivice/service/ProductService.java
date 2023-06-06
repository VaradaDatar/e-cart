package com.uhg.product.productserivice.service;

import java.util.List;

import com.uhg.product.productserivice.model.Product;

public interface ProductService {

	public Product saveProduct(Product product);
	
	public List<Product> getAllProduct();
	
	public List<Product> findOneproduct(String product_name);
	
	public List<Product> findByCategory(String category);
	
	public void deleteProduct(long id);
	
	public void updateProduct(Product product,long id);
	
	
}
