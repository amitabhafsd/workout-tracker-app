package com.cts.fsd.workout.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.fsd.workout.entity.Category;
import com.cts.fsd.workout.exception.ResourceNotFoundException;
import com.cts.fsd.workout.repo.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	CategoryRepository categoryRepository;
	
	
	public List<Category> createCategory(List<Category> categoriesEntityList){
		
		return categoryRepository.saveAll(categoriesEntityList);
		
	}
	
	public List<Category> getAllCategories(){
		
		return categoryRepository.findAll();
		
	}
	
	public Category getCategoryById(int categoryId){
		
//		return categoryRepository.findById(Long.valueOf(categoryId)).get();
		return categoryRepository.findById(Long.valueOf(categoryId)).orElseThrow(() -> new ResourceNotFoundException("Category" , "categoryId" , categoryId));
		
	}
	
	public void removeCategoryById(int categoryId){
		
		categoryRepository.deleteCategoryById(Long.valueOf(categoryId));
		
	}
}
