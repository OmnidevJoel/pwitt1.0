
import './App.css';
import Home from './components/home-screen-component'
import Admin from './components/admin-dash-component'
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports'
import { useState, useEffect } from 'react';
//import EmpQuery from './components/EmpQuery';
import {BasicTable} from './components/BasicTable'
import {Otter} from './components/Otter'

Amplify.configure(awsconfig);





function App() {
  
  
  
  
  
  
  
  return (
//<Home/>
<div><Otter/></div> 





  );
}

export default App;
