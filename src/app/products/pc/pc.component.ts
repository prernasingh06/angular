import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {
  @Input() name : string ='';
  @Output() close = new EventEmitter<any>();

closeClick(){
  this.close.emit({name: this.name});
} 
  constructor() { }

  ngOnInit(): void {
  }

}
