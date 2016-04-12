import {provide} from "angular2/core";
import {bindActionCreators} from "redux";
import {isString, isFunction} from "./utils";

// reference to the store
let _store;

export function initStore(store){
  _store = store;
}

// wrap the store in an angular provider
export function provider(store) {
  _store = store;
  return provide('Store', {useValue: _store})
}

export function MapState(value = null) {
  return (target, prop) => {
    if (target.ngOnInit) {
      const _onInit   = target.ngOnInit;
      target.ngOnInit = () => {
        _onInit();
        unsubscribe(target, mapStateSlice(target, prop, value));
      }
    } else {
      target.ngOnInit = () => {
        unsubscribe(target, mapStateSlice(target, prop, value));
      };
    }
  }
}

export function BindActions(actions) {
  return (target, prop) => {
    if (target.ngOnInit) {
      const _onInit   = target.ngOnInit;
      target.ngOnInit = () => {
        _onInit();
        target[prop] = bindActionCreators(actions, _store.dispatch)
      }
    } else {
      target.ngOnInit = () => {
        target[prop] = bindActionCreators(actions, _store.dispatch)
      }
    }
  }
}
function mapStateSlice(target, prop, value) {

  if (isFunction(target[prop])) {
    return useMapFunction(target, prop);
  }

  return mapSliceToProp(target, prop, value)
}

function useMapFunction(target, prop) {
  const _state = _store.getState();
  Object.assign(target, target[prop](_state));

  return _store.subscribe(()=> {
    Object.assign(target, target[prop](_state));
  })
}

function mapSliceToProp(target, prop, value) {
  if (!target[prop]) {
    target[prop] = getStateSlice(_store, value);
  }

  return _store.subscribe(()=> {
    if (target[prop] !== getStateSlice(_store, value)) {
      target[prop] = _store.getState()[value]
    }
  })
}

function getStateSlice(store, slice) {
  let _state = store.getState();

  if (isString(slice)) {
    const _keys = slice.split('.');

    _keys.forEach(key => _state = _state[key]);
    return _state;
  }
}

function unsubscribe(target, unsubscribeFn) {
  if (target.ngOnDestroy) {
    const _onDestroy = target.ngOnDestroy;

    target.ngOnDestroy = () => {
      _onDestroy();
      unsubscribeFn();
    }
  } else {
    target.ngOnDestroy = () => {
      unsubscribeFn();
    }
  }
}
