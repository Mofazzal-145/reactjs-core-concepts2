import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// ex: 03

function App() {
  return (
    <div className='App'>
        <ExternalUsers></ExternalUsers>
    </div>
   
  )
}
function ExternalUsers () {
  const [users, setUsers] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  }, []);


  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        // users.map(user => <li>{user.username}</li>)
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User (props) {
  return (
    <div style={{border: '2px solid blue', margin:'20px'}}>
      <h3>Name: {props.name}</h3>
      <h5>Email: {props.email}</h5>
    </div>
  )
}


// ex : 02
/* function App() {
  return (
    <div className='App'>
        <Counter></Counter>
    </div>
   
  )
}
function Counter() {
  const [count, setCount] = useState(10)
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1); */
  // another way for increase
  /* const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  } */
 // another way for decrease
/*  const decreaseCount = () => {
   const newCount2 = count -1;
   setCount(newCount2);
 } */



// ex : 01
// function App() {
//   const products = [
//     {name: 'laptop', price: 58000},
//     {name: 'phone', price: 8000},
//     {name: 'watch', price: 800},
//     {name: 'Tablet', price: 80000},
//   ]
//   return (
//     <div className="App">
//       {
//         products.map(product => <Product name={product.name} price={product.price } ></Product>)
//       }
//      {/* <Product name = "laptop" price = "50000"></Product>
//      <Product name = "phone" price = "25000"></Product>
//      <Product name = "watch" price = "2500"></Product> */}
//     </div>
//   );
// }
// function Product(props) {
//   return(
//     <div className='product'>
//       <h3>Name:{props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }

export default App;
