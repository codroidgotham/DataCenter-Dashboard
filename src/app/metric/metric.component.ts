import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnInit,OnChanges {
  @Input('used') val:number=0;
  @Input('available') max:number=0;
  // @Input() title:string=''; 
  // @Input() description='';
  // private _value:number=0;
  // private _max:number=0;
  // @Input('used') 
  // set val(value:number){
  //   //console.log(value)
  //   if (isNaN(value)){
  //     this._value=0;
  //   }else{this._value=value}
  // }
  // get val(){return this._value;}
  // @Input('available') 
  // set max(max:number){
  //   //console.log(max);
  //   if (isNaN(max)){
  //     this._max=0;
  //   }else{this._max=max}
  // }
  // get max(){
  //   return this._max;
  // }


  constructor() { }

  ngOnInit(): void {
  }

  isDanger(){
    return this.val/this.max >0.7;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['val'] && isNaN(changes['val'].currentValue)) this.val = 0;
    if (changes['max'] && isNaN(changes['max'].currentValue)) this.max = 0;
  }

}
