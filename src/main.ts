import {provider} from "ng2-redux";
import store from "store/store";
import {bootstrap} from "angular2/platform/browser";
import {App} from "./components/app";

bootstrap(App, [
  provider(store)
])
    .catch(err => console.error(err));
