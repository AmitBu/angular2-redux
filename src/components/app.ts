import {Component} from "angular2/core";
import {MapState, BindActions} from "angular2-redux-bindings";
import {changeTitle} from '../actions/app-actions'
import {ItemsList} from './itemsList'
import {store} from '../store/store'
import * as List from '../actions/list-actions'

@Component({
    selector: 'app',
    directives: [ItemsList],
    template: `
        <h1>{{title}}</h1>
        <button (click)="changeTitle('Title changed')">Change Title</button>
        <ItemsList [items]="items" (clearList)="clearList()" (removeItem)="removeItems($event)"> </ItemsList>
        <div>
            <input #text />
            <button (click)="addItem(text.value)">Add item</button>
        </div>
        `,
})

export class App {
     @MapState('app.title')
     public title;

    @MapState('list.items')
    public items;

    @BindActions(changeTitle)
    public changeTitle;

    @BindActions(List.addItem)
    public addItem;

    @BindActions(List.clearAllItems)
    public clearList;

    @BindActions(List.removeItem)
    public removeItems;

    constructor() {
        console.log(store.getState());
        store.subscribe(() => console.log(store.getState()));
    }
}
