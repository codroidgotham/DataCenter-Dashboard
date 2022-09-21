import { Component, OnDestroy, OnInit, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';
interface Metric{
  used:number;available:number;
}
export interface Node{
  name:string;
  cpu:Metric;
  mem: Metric;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  @Output()
  onRefresh=new EventEmitter<Date>();
  cpu:Metric={used:0,available:0};
  mem:Metric={used:0,available:0};
  cluster1:Node[]=[];
  cluster2:Node[]=[];
  interval:any;
  constructor() { }

  ngOnInit(): void {
    this.generateData();
    this.interval=setInterval(()=>this.generateData,15000);
  }
  generateData(){
    this.cluster1=[];
    this.cluster2=[];
    this.cpu={used:0,available:0};
    this.mem={used:0,available:0};
    for(let i=1;i<4;i++){this.cluster1.push(this.randomNode(i))}
    for(let i=4;i<7;i++){this.cluster2.push(this.randomNode(i))}
    this.onRefresh.emit(new Date());
  }
  randomNode(i:number):Node{
    const node:Node={name:`node${i}`,cpu:{available:16,used:this.createRandomInteger(0,16)},mem:{available:48,used:this.createRandomInteger(0,48)}};
    this.cpu.used+=node.cpu.used;
    this.cpu.available+=node.cpu.available;
    this.mem.used+=node.mem.used;
    this.mem.available+=node.mem.available;
    return node;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  createRandomInteger(a:number,b:number):number{
    return Math.floor(Math.random()*b)+1;
  }
}
