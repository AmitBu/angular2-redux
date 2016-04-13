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
        <button (click)="removeTitle('sdfsdf')">remove</button>
        <button (click)="addItem('Amit')">Add item</button>
        `,
})

export class App {
    title = store.getState().app.title;

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



    // @MapState('app.title')
    // public title;

    @MapState('list.items')
    public items;

    @BindActions(changeTitle)
    public removeTitle;

    @BindActions(addItem)
    public addItem;

}
