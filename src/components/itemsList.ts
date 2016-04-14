import {Component, EventEmitter, Output } from 'angular2/core'

@Component({
    selector: 'ItemsList',
    inputs:['items'],
    template: `
        <p>Click on an item to remove him from the list</p>
        <button (click)="clearList.emit()">Clear list</button>
        <ul>
          <li *ngFor="#item of items; #i = index" (click)="removeItem.emit(i)">{{item}}</li>
        </ul>
        
        `
})

export class ItemsList {
    @Output() clearList = new EventEmitter();
    @Output() removeItem = new EventEmitter<number>();
}

