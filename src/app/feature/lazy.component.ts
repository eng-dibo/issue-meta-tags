import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lazy-comp',
  template: '<lazy-child-comp *ngIf="ready"></lazy-child-comp>',
})
export class LazyComponent {
  ready=false
  constructor(private httpClient:HttpClient) {
     this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(()=>{
       this.ready=true
     })
  }
}
