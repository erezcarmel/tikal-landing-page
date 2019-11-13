import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import {
  Homepage,
  Job
} from './views';

import './style.scss';


export default function App() {
  return (
    <Router className="app">
			<Switch>
				<Route path="/job">
					<Job />
				</Route>
				<Route path="/">
					<Homepage />
				</Route>
			</Switch>
    </Router>
  );
}