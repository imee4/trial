import { Component, OnInit } from '@angular/core';
import { CrudService } from "./crud.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  Users: any = [];

  constructor(public crudService: CrudService) { }

  ngOnInit() {
    this.fetchUsers()
  }  

  fetchUsers() {
    return this.crudService.getUsers().subscribe((data: {}) => {
      this.Users = data;
    })    
  }  

  remove(id: any) {
    this.crudService.delete(id).subscribe(res => {
      this.fetchUsers()
    })
  }

}