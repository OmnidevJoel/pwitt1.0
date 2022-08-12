
import './App.css';
//import Home from './components/home-screen-component'
//import Admin from './components/admin-dash-component'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'
//import EmpQuery from './components/EmpQuery';
import {CreateEmpPage} from './components/CreateEmpPage'

Amplify.configure(awsconfig);





function App() {
  
  
  
  
  
  
  
  return (

<div><CreateEmpPage/></div> 





  );
}

export default App;
