import {Component, EventEmitter, Output } from 'angular2/core'

@Component({
    selector: 'ItemsList',
    inputs:['items'],
    template: `
        <ul>
          <li *ngFor="#item of items; #i = index" (click)="removeItem(i)">{{item}}</li>
        </ul>
        <button (click)="clearList.emit()">clear</button>
        `
})

export class ItemsList {
    @Output() clearList = new EventEmitter();
    @Output() removeItem = new EventEmitter();
    
    
}

