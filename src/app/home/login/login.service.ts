import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService{
    constructor(private httpClient:HttpClient){}

    storeServer(servers:any){
        return this.httpClient.post('https://angularwebproject-5d109.firebaseio.com/data.json',servers);
    }
    getServer(){
        return this.httpClient.get<Server>('https://angularwebproject-5d109.firebaseio.com/data/-LbvFVWAOpv_-kEt4qno');
    }   
}