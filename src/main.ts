import {bootstrap} from "angular2/platform/browser";
import {App} from "./components/app";
import {createStore} from "redux";
import {initStore} from "./angular2-redux/connector";
import { store } from 'store/store'


initStore(store);

bootstrap(App);
