import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IceandfireHttpserviceService {

  public indexValueOf;
  public resultset1=[];
  public resultset2=[];
  public resultset3=[];
    constructor(public http: HttpClient) {
    console.log("http service started!")
   }

  mainUrl="https://www.anapioficeandfire.com/api";

 
  public getbook():any{
      let book=this.http.get(this.mainUrl+'/books');
     return book;
    }

  public gethouse():any{
      let house=this.http.get(this.mainUrl+'/houses');
     return house;
    }

  public getcharacters():any{
      let ficchar=this.http.get(this.mainUrl+'/characters');
     return ficchar;
    }
    
  }
