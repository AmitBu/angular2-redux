import {Component} from "angular2/core";
import {MapState, BindActions} from "../angular2-redux/connector";
import {removeTitle} from '../components/actions'

@Component({
  selector  : 'app',
  template  : `
        <h1>{{title}}</h1>
        <button (click)="remove()">remove</button>
        `,
})

export class App {

  @MapState('title')
  private title;

  @BindActions(removeTitle)
  private remove;




}
