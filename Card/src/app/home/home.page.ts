import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  card:any[]=[]

  constructor(private http : HttpClient) {
    this.http.get('https://api.microfundit.com/stories').subscribe(data=>{

this.card=data["stories"]
})
  }
  
}
