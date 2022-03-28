
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };
  }
  
  render(){
    return(
      <div className='App'>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href='/'>Resturant confusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    )
  }
}




export default App;
