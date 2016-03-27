import {provider} from "ng2-redux";
import {bootstrap} from "angular2/platform/browser";
import {App} from "./components/app";
import {createStore} from "redux";
import rootReducer from "reducers/root";
import {middlewars} from "middleware/index";

const store = createStore(rootReducer, middlewars);

bootstrap(App, [
  provider(store)
])
    .catch(err => console.error(err));
