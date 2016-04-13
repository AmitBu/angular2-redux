import {Component} from "angular2/core";
import {MapState, BindActions} from "../angular2-redux/connector";
import {changeTitle} from '../actions/app-actions'
import {addItem} from '../actions/list-actions'
import {ItemsList} from './itemsList'
import {store} from '../store/store'

@Component({
    selector: 'app',
    directives: [ItemsList],
    template: `
        <h1>{{title}}</h1>
        <ItemsList [items]="items"> </ItemsList>
        <button (click)="changeTitle('Title changed')">Change Title</button>
        <button (click)="addItem('Anoter item')">Add item</button>
        `,
})

export class App {
    title = store.getState().app.title;

    // TODO: Check why 'MapState' does not subscribe to state
    // @MapState('app.title')
    // public title;

    @MapState('list.items')
    public items;

    @BindActions(changeTitle)
    public changeTitle;

    @BindActions(addItem)
    public addItem;

    constructor() {
        console.log(store.getState());
        store.subscribe(() => console.log(store.getState()));

        store.subscribe(() => {
            this.title = store.getState().app.title;
        });

        store.subscribe(() => {
            this.items = store.getState().list.items;
        });
    }





}
