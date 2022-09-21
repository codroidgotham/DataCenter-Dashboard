import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() onRefresh=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  refresh(){
    this.onRefresh.emit("blue");
  }
}

