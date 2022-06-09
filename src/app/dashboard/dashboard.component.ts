import { Component, OnInit, Input } from '@angular/core';
import { JokeService } from '../joke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  username: any=[];
  

  constructor(private router:Router, private user: JokeService) { }


  ngOnInit(): void {
    this.getUsername();
  }

  logout(){
    localStorage.clear();
  }

  getUsername(){
    //return localStorage.getItem('username')
    this.username=localStorage.getItem('username');
  }
  
  
}
