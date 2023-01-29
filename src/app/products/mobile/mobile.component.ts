import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  @Input() name: string ='';
@Output() close = new EventEmitter<any>();

closeClick(){
  this.close.emit({name: this.name});
}
  constructor() { }

  ngOnInit(): void {
  }

  

}
