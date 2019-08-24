import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() item;

  @Output() itemSelected = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    console.log(' Item name ' + this.item.name);
  }

}
