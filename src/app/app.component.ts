import { Component, ViewChild, ViewChildren, ElementRef, QueryList, HostListener, AfterViewInit, OnInit, NgZone,
  OnDestroy, ChangeDetectorRef, Input,
} from '@angular/core';
import { FocusTrapFactory, FocusMonitor, ListKeyManager} from '@angular/cdk/a11y';
import { ListItemComponent } from './list-item/list-item.component';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkTrapFocus} from '@angular/cdk/a11y';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  /*template: `
  <button (click)="testA11y()"> Test A11y! </button>
  <div #element role="dialog" hidden=true>
      <label>Sample field</label>
      <input #elementChild>
      <label>Sample field</label>
      <input #elementChild>
      <label>Sample field</label>
      <input #elementChild>
      <label>Sample field</label>
      <input #elementChild>
      <label>Sample field</label>
      <input #elementChild>
  </div>`*/
})

export class AppComponent implements AfterViewInit, OnInit {

  constructor() {}
  keyManager: any;
  searchQuery: string;

  // @ViewChild('element', {static: false}) element: ElementRef;
 // @ViewChildren('elementChild') elementChild: QueryList<any>;
  selectedId = 0;
  isLoadingUsers = false;

  public users: any[] = [];
  ngOnInit(): void {
    const u1 = {
      name: 'ana',
      last: 'andru',
      id: 0
    };
     const u2 = {
      name: 'julez',
      last: 'andru',
      id: 0
    };
     const u3 = {
      name: 'marcella',
      last: 'andru',
      id: 0
    };
    this.users = [u1, u2, u3];
  }

  ngAfterViewInit() {
  }
  handleKeyUp(event) {
    console.log(this.searchQuery);
  }
  showUserInfo(event) {

  }
}
