package com.uhg.product.productserivice.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.uhg.product.productserivice.model.Product;
@Repository
public interface ProductRepo extends JpaRepository<Product,Long>{
	@Query(value="Select * from Product where product_name=?1",nativeQuery=true)
	public List<Product> findOneProduct(String product_name);
	
	@Query(value="Select * from Product where category=?1",nativeQuery=true)
	public List<Product> findByCategory(String category);
}
