import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
@Input() name : string ='';
@Output() close = new EventEmitter<any>();

closeClick(){
  this.close.emit({name: this.name});
} 
  constructor() { }

  ngOnInit(): void {
  }

}
