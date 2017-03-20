import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , combineReducers , applyMiddleware} from "redux";
import {Router,Route,browserHistory,IndexRedirect} from 'react-router';
import {Provider} from "react-redux";
import App from './App';
import {Promotion} from './Promotion';
import {GroupMeal} from './GroupMeal';
import {IndividualMeal} from './IndividualMeal';
import {SpecialMeal} from './SpecialMeal';
import {Rice} from './Rice';
import {Burgar} from './Burgar';
import {Home} from './Home';

const initialState={
	result:0,
	value:[]
}
const userReducer = (state=initialState,action)=>{
	switch(action.type){
		case "addPrice":
			state={
				...state,
				result:state.result+=action.payload
			}
			break;
		default:
	}
	return state;
}
const myLogger =(store)=>(next)=>(action)=>{
	console.log("Log action:" , action);
	next(action);
}
const store = createStore(combineReducers({user:userReducer}),{},applyMiddleware(myLogger));
store.subscribe(()=>{
	console.log("Update Store :" , store.getState());
});

ReactDOM.render(
<Provider store={store}>
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
  	<IndexRedirect to="/Home" />
	  	<Route path={"Home"} component={Home}></Route>
	  	<Route path={"Promotion"} component={Promotion}></Route>
	  	<Route path={"GroupMeal"} component={GroupMeal}></Route>
	  	<Route path={"IndividualMeal"} component={IndividualMeal}></Route>
	  	<Route path={"SpecialMeal"} component={SpecialMeal}></Route>
	  	<Route path={"Rice"} component={Rice}></Route>
	  	<Route path={"Burgar"} component={Burgar}></Route>
	  	<Route path={"*"} component={Home}></Route>
  	</Route>
  </Router>
</Provider>
  ,document.getElementById('root')
);