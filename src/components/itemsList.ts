import {Component, EventEmitter} from 'angular2/core'

@Component({
    selector: 'ItemsList',
    inputs:['items'],
    outputs: ['listClick'],
    template: `
        <button (click)="listClick.emit()">clear</button>
        <ul>
          <li *ngFor="#item of items">{{item}}</li>
        </ul>
        `
})

export class ItemsList {
    listClick = new EventEmitter()
}