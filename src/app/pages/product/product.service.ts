import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  createProduct(){
    const url = `${this.API_URL}`;
    const data = {
      title: "Zapatos",
      price: 40,
      description: "Zapatos deportivos / Santiago Venegas",
      categoryId: 1,
      images: ["https://picsum.photos/536/354","https://picsum.photos/id/237/536/354","https://picsum.photos/seed/picsum/536/354"]
    };
    const url ="https://api.escuelajs.co/api/v1/products";
    this.httpClient.post(url, data).subscribe(
    response =>{
      console.log(response);
    }
    );//haciendo peticion al backend
  }
  // Para modificar igual tomar captura antes despues, back y todo 
  updateProduct(data, id:number){
    const data = {
      title: "Zapatos de color",
      price: 42,
      description: "Zapatos mocacine / Santiago Venegas",
    };
    const url = `${this.API_URL}/${2}`;
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
