import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() name : string ='';

  @Output() close = new EventEmitter<any>();

closeClick(){
  this.close.emit({name: this.name});
} 
  constructor() { }

  ngOnInit(): void {
  }

}
