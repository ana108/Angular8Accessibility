import { Component, OnInit, Input, HostBinding, ElementRef, HostListener, Output } from '@angular/core';
import { Highlightable, FocusableOption } from '@angular/cdk/a11y';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-list-new',
  // tslint:disable-next-line: use-host-property-decorator
  host: {
    tabindex: '0',
    // role: 'list-item',
  },
  templateUrl: './list-new.component.html',
  styleUrls: ['./list-new.component.css']
})
export class ListNewComponent implements OnInit, Highlightable, FocusableOption {
  constructor(private element: ElementRef) { }
  // disabled?: boolean;
  @Input() item:any;
  private _isActive = false;

  //@Output() tabbed = new EventEmitter();

  @HostBinding('class.active') get isActive() {
    return this._isActive;
  }

  setActiveStyles(): void {
    console.log('Active Styles');
    this._isActive = true;
  }
  setInactiveStyles(): void {
    this._isActive = false;
  }
  getLabel(): string {
    return this.item.username;
  }

  focus() {
    this.element.nativeElement.focus();
  }

  ngOnInit() {
    console.log('init child');
  }
  @HostListener('keydown', ['$event'])
  onKeydown(event) {
    console.log('event 23');
    //this.tabbed.emit(event);
  }
}
