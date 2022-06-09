
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  username: any;
  // id: any;
  private sub: any;
  
  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
  this.sub = this.activatedRoute.params.subscribe(params => {
  this.username = params['username'];
  // this.id = params['id'];
  });
  }
  
  ngOnDestroy() {
  this.sub.unsubscribe();
  }
  }