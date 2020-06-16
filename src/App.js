import React from 'react';
import{Route}from'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop,component'


function App(){
  return(
    <div>
      <switch>
      <Route  exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>        
      </switch>
    </div>
  )
}
// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       showChild: true,
//       text: ''
//     };
//   }

//   render() {
//     return (
//       <div >
//         <HomePage/>
//       </div>
//     );
//   }
// }

export default App;
