import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63c77c04dc6448548ccbae880189e107_9366/Galaxy_6_Shoes_Black_GW3848_01_standard.jpg',
      name: 'Adidas Shoe',
      category: 'Shoes',
      seller: 'AMZ Seller ',
      price: 1999
    },
    {
      url: 'https://rukminim2.flixcart.com/image/300/350/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90&crop=false',
      name: 'White Shoe',
      category: 'Shoes',
      seller: 'world shoe',
      price: 599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrvOpzxth1oVwrHAxlVOHU7caVqruAWaw00Vq6DJTOdOMLwQ_9A_cHRQZsnk14He-X-E&usqp=CAU',
      name:' Headphone ',
      category: 'Headphone',
      seller: 'Boat LTD',
      price: 4000
    },
    {
      url: 'https://www.leafstudios.in/cdn/shop/products/Main_a66bce90-71a9-4c4f-9469-078ec70933e0_800x.jpg?v=1673960414',
      name: ' Smart Watch ',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://m.media-amazon.com/images/I/916GGqnsG+L._AC_UF1000,1000_QL80_.jpg',
      name: 'Canon EOS',
      category: 'Camera',
      seller: 'ABC Ltd',
      price: 100000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;