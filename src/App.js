import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// ex : 02
function App() {
  return (
    <div className='App'>
        <Counter></Counter>
    </div>
   
  )
}

function Counter() {
  const [count, setCount] = useState(10)
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
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

  return(
     <div>
       <h3>Count: {count}</h3>
       <button onClick={increaseCount}>Increase</button>
       <button onClick={decreaseCount}>Decrease</button>
     </div>
  )
}


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
