package com.uhg.product.productserivice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uhg.product.productserivice.model.Product;
import com.uhg.product.productserivice.service.ProductService;

@RestController 
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private ProductService ps;
	@PostMapping("/add")
	public String saveProduct(@RequestBody Product product)
	{
		ps.saveProduct(product);
		return "Product added";
	}
	@GetMapping("/getallproducts")
	public List<Product> getAllProduct()
	{
		return ps.getAllProduct();
	}
	@GetMapping("/findone/{product_name}")
	public List<Product> findOneproduct(@PathVariable String product_name)
	{
		return ps.findOneproduct(product_name);
	}
	@GetMapping("/findcategory/{category}")
	public List<Product> findByCategory(@PathVariable String category)
	{
		return ps.findByCategory(category);
	}
	@DeleteMapping("/deleteproduct/{id}")
	public void deleteProduct(@PathVariable long id)
	{
		ps.deleteProduct(id);
	}
	@PutMapping("/updateproduct")
	public void updateProduct(@RequestBody Product product)
	{
		ps.saveProduct(product);
	
	}
}
