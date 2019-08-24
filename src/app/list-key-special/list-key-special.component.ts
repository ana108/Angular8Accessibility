import { Component, OnInit, QueryList, AfterViewInit, ContentChildren, HostListener, AfterContentInit } from '@angular/core';
import {ActiveDescendantKeyManager, FocusKeyManager } from '@angular/cdk/a11y';
import { ListNewComponent } from '../list-new/list-new.component';
import { ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-list-key-special',
  // tslint:disable-next-line: use-host-property-decorator
  host: { role: 'list' },
  templateUrl: './list-key-special.component.html',
  styleUrls: ['./list-key-special.component.css']
})
export class ListKeySpecialComponent implements OnInit, AfterViewInit, AfterContentInit {
  // @ViewChildren(ListNewComponent) items: QueryList<ListNewComponent>; // ListNewComponent
  @ContentChildren(ListNewComponent) items: QueryList<ListNewComponent>;
  users = [
    { username: 'anastasiya'},
    { username: 'stacy' },
    { username: 'andrushchak' }
  ];
  private keyManager: ActiveDescendantKeyManager<ListNewComponent>;
  // private keyManager: FocusKeyManager<ListNewComponent>;
  ngAfterContentInit() {
    // 2. Instantiate FocusKeyManager
    // this.keyManager = new  ActiveDescendantKeyManager<ListNewComponent>().withWrap();
  }
  ngAfterViewInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap();
  }
  constructor() { }

  ngOnInit() {
    console.log('On init');
  }
  @HostListener('keydown', ['$event'])
  onKeydown(event) {
    console.log('event ' + JSON.stringify(event));
    this.keyManager.onKeydown(event);
  }
  receiveKeyUp(event) {
     console.log('Event received ' + JSON.stringify(event));
  }
}
