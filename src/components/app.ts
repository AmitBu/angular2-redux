import {Component, Inject} from "angular2/core";
import * as actions from "actions/app";
import {bindActionCreators} from "redux";


@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <input type="text" #titleBox (keydown.enter)="actions.changeTitle(titleBox.value)">    
    `,
  styles  : [`pre {font-size: 28px}`]
})

export class App {

  constructor(@Inject('ngRedux') ngRedux) {
    ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);
    console.log(actions);
  }

  mapStateToThis(state) {
    return {
      title: state.app.title
    }
  }

  mapDispatchToThis(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }

}
