import {Component, Inject} from "angular2/core";

@Component({
  selector: 'app',
  template: `<h1>{{title}}</h1>`,
  styles  : [`pre {font-size: 28px}`]
})

export class App {

  constructor(@Inject('ngRedux') ngRedux) {
    ngRedux.connect(this.mapStateToThis)(this);
  }

  mapStateToThis(state) {
    return {
      title: state.app.title
    }
  }
}
