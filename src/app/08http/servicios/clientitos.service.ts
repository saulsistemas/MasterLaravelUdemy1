import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientitosService {
  public url:string ='https://reqres.in/';
  constructor(private _http:HttpClient){

  }
  getUser(userId){
    return this._http.get(this.url+'api/users/'+userId)
    
  }
  getAllUser(){
    return this._http.get(this.url+'api/users?page=2')
  }

  //endpointClientes: string = 'http://localhost:3000/';
  //constructor(private http:HttpClient) { }
  //getClientes(){
  //  return this.http.get(this.endpointClientes).pipe(map((data:any)=>{return data}));
  //  
  //  //return this.http.get(this.endpointClientes)
  //  //                .pipe(
  //  //                  map((data:any)=>{
  //  //                    return data;
  //  //                  })
  //  //                )
  //}
}
