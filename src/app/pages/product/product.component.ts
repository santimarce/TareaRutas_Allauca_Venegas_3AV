// inyeccion de dependencias

import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { CreateProductDto, ProductModel, UpdateProductDto } from 'src/app/models/productmodel';
import { CategoryModel } from 'src/app/models/categorymodel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: ProductModel[] = []; 
  category: CategoryModel = {id: 0, name:'', description:''};
  product: ProductModel = { id: 0, title: '', description: '', price: 0, images: [''], category: this.category};
  selectedProduct: UpdateProductDto = { title: '', price: 0, description: '' };
  createProductxd: CreateProductDto = { "title": 'Zanahorias Blancas’', "price": 1000, "description": "Este es un ejemplo para la tarea 2 de servicios – Santiago Venegas", "images": ["https://picsum.photos/200/300"], "categoryId": 3 };

  constructor(private productService: ProductserviceService) {
    this.editProduct();
  }
  
  ngOnInit(): void {
    this.getProducts();
    //this.getProduct(80);
    //this.createProduct(this.createProductxd);
    //this.updateProduct(18, this.selectedProduct);
    //this.deleteProduct(376);
  }

  getProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    this.productService.getAll().subscribe(
      response => {
        this.products = response;
        console.log(response);
      }
    );
  }
  getProduct(id: ProductModel['id'] ){
    return this.productService.getOne(id).subscribe(
      response => {
        this.product = response;
        console.log(response);
      }
    );
  }
  createProduct(product: CreateProductDto){
    this.productService.store(product).subscribe(
      response => {
        this.product = response;
        console.log(response);
      }
    );
  }
  updateProduct(id: ProductModel['id'], product:UpdateProductDto){
    this.productService.update(id, product).subscribe(
      response =>{
        console.log(response);
      }
    );
  }
  editProduct(){
    this.selectedProduct = {title:'', price:0, description:''};
  }
  
  deleteProduct(id: ProductModel['id']){
    this.productService.destroy(id).subscribe(
      response =>{
        this.products = this.products.filter(product => product.id != id); 
        console.log(response);
      }
    );
  }
}