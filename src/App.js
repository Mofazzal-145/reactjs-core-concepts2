import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'laptop', price: 58000},
    {name: 'phone', price: 8000},
    {name: 'watch', price: 800},
    {name: 'Tablet', price: 80000},
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price } ></Product>)
      }
     {/* <Product name = "laptop" price = "50000"></Product>
     <Product name = "phone" price = "25000"></Product>
     <Product name = "watch" price = "2500"></Product> */}
    </div>
  );
}
function Product(props) {
  return(
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
