import {bootstrap} from "angular2/platform/browser";
import {App} from "./components/app";
import { store } from 'store/store'
import {initStore} from 'angular2-redux-bindings'



initStore(store);

bootstrap(App);
