import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
    readonly API_URL = 'https://api.escuelajs.co/api/v1/users';
constructor (private httpClient: HttpClient){
}
  ngOnInit(): void {
    this.deleteClient(9);
  }
  getClients() {
    const url = `${this.API_URL}`;
    this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      });
  }
  getClient(id:number) {
    const url = `${this.API_URL}/${id}`;
    this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      });
  }
  createClient() {
    const data = {
      "email": "SantiagoVenegas@Yavirac.com",
      "password": "Esteesunejemplo",
      "name": "Santiago Venegas",
      "role": "customer",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480"
    };
    const url = `${this.API_URL}`;
    this.httpClient.post(url, data).subscribe(
  response =>{
    console.log(response);
  }
  );
  }
  modifyClient(id: number) { 
    const data = {
      "email": "emailNuevo@Yavirac.com",
      "password": "Esteesunejemplo",
      "name": "Cambiado",
      "role": "customer",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480"
    };
    const url = `${this.API_URL}/${id}`;
    this.httpClient.put(url, data).subscribe(
      response => {
        console.log(response);
      });
  }
  deleteClient(id: number) { 
    const url = `${this.API_URL}/${id}`;
    const response = this.httpClient.delete(url).subscribe(
    response =>{
    console.log(response);
    }
    );
  }
}