import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/app/models/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_URL = 'https://api.escuelajs.co/api/v1/products';
  constructor (private httpClient:HttpClient){
  }
  
  ngOnInit(): void{
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }
  //Para todos los prods
  getProducts(){
    const url = `${this.API_URL}`;
    const response  = this.httpClient.get(url);
  }
  //Para un solo prod igualmente verificar para el taller
  getProduct(id:number){ //poner el id
    const url = `${this.API_URL}/${id}`;
    const response  = this.httpClient.get(url);
  }
  //PAra crear // capturar el fetch. el back e iluminar el registro
  createProduct(product:ProductModel){
    const url = `${this.API_URL}`;
    this.httpClient.post(url, product);//haciendo peticion al backend
  }
  // Para modificar igual tomar captura antes despues, back y todo 
  updateProduct(product:ProductModel, id:number){
    const data = {
      title: "Zapatos de color",
      price: 42,
      description: "Zapatos mocacine / Santiago Venegas",
    };
    const url = `${this.API_URL}/${id}`;
    this.httpClient.put(url, data).subscribe(
    response =>{
      console.log(response);
    }
    );//haciendo peticion al backend
  }
  // PAra borrar un object
  deleteProduct(id:number){
    const url = `${this.API_URL}/${2}`;
    this.httpClient.delete(url).subscribe(
    response =>{
      console.log(response);
    }
    );//haciendo peticion al backend
  }
  
}
