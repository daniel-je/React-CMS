import React, { Component } from 'react';
import Customer from './components/Customer'
// import logo from './logo.svg';
import './App.css';

const customer = [{
  'id':1
 ,'image':'https://placeimg.com/64/64/1'
 ,'name':'DHSeo'
 ,'birthday':'961222'
 ,'gender':'male'
 ,'job':'student'
},
{
  'id':2
 ,'image':'https://placeimg.com//64/64/2'
 ,'name':'JamesLee'
 ,'birthday':'961223'
 ,'gender':'male'
 ,'job':'programer'
}
]

// var i=0;

class App extends Component {
  render() {
    return (
      // <Customer
      // id={customer[i].id}
      // image={customer[i].image}
      // name={customer[i].name}
      // birthday={customer[i].birthday}
      // gender={customer[i].gender}
      // job={customer[i].job}
      // />
<div>
  {customer.map(c=>{
    return <Customer key={c.id} id={c.id} image={c.image} />
  })}
</div>

    );
  }
}

export default App;
