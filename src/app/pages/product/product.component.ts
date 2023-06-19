// inyeccion de dependencias

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

constructor (private productService:ProductService, private httpClient: HttpClient){
}

ngOnInit(): void{
  //this.getProducts();
  //this.getProduct();
  //this.createProduct();
  //this.updateProduct();
  this.getProducts();
}
//Para todos los prods
getProducts(){
  //const url = 'https://api.escuelajs.co/api/v1/products';
  const response = this.productService.getProducts();
    console.log(response);
}
//Para un solo prod igualmente verificar para el taller
getProduct(){
  const response = this.productService.getProduct(2);
  console.log(response);
}
//PAra crear // capturar el fetch. el back e iluminar el registro
createProduct(){
  const data = {
    title: "Zapatos",
    price: 40,
    description: "Zapatos deportivos / Santiago Venegas",
    categoryId: 1,
    images: ["https://picsum.photos/536/354","https://picsum.photos/id/237/536/354","https://picsum.photos/seed/picsum/536/354"]
  };
  const url ="https://api.escuelajs.co/api/v1/products";
  const response = this.httpClient.post(url, data).subscribe(
  response =>{
    console.log(response);
  }
  );//haciendo peticion al backend
}
// Para modificar igual tomar captura antes despues, back y todo 
updateProduct(){
  const data = {
    title: "Zapatos de color",
    price: 42,
    description: "Zapatos mocacine / Santiago Venegas",
  };
  const url ="https://api.escuelajs.co/api/v1/products/218";
  this.httpClient.put(url, data).subscribe(
  response =>{
    console.log(response);
  }
  );//haciendo peticion al backend
}
// PAra borrar un object
deleteProduct(){
  const url = "https://api.escuelajs.co/api/v1/products/3";
  const response = this.httpClient.delete(url).subscribe(
  response =>{
    console.log(response);
  }
  );//haciendo peticion al backend
}

};