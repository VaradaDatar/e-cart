package com.uhg.product.productserivice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uhg.product.productserivice.model.Product;
import com.uhg.product.productserivice.repo.ProductRepo;
@Service
public class ProductServiceImpl implements ProductService{
	@Autowired
	private ProductRepo pr;
	@Override
	public Product saveProduct(Product product)
	{
		return pr.save(product);
	}
	@Override
	public List<Product> getAllProduct()
	{
		return pr.findAll();
	}
	@Override
	public List<Product> findOneproduct(String product_name)
	{
		return pr.findOneProduct(product_name);
	}
	@Override
	public List<Product> findByCategory(String category)
	{
		return pr.findByCategory(category);
	}
	@Override
	public void deleteProduct(long id)
	{
		pr.deleteById(id);
	}
	@Override
	public void updateProduct(Product product,long id)
	{
		pr.save(product);
	}
	
}
