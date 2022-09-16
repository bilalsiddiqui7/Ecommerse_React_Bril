
import image from './images/81zO234HByL._SX425_.jpg'
import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './UI/Home'
import ContactUs from './UI/ContactUs';
import AboutUs from './UI/AboutUs';
import Header from './UI/Header';
import Footer from './UI/Footer';
import LoginForm from './UI/LoginForm';
import RegistrationForm from './UI/RegistrationForm';
import ChangePasswordForm from './UI/ChangePasswordForm';
import Cart from './UI/Cart';
import { addToCart } from './services/userService'
function App() {
  const itemsList = [
    {
      "id": 1,
      "name": "Apron",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 4325,
      "image": image,
      "quantity": 0
    },
    {
      "id": 2,
      "name": "Baking Parchment",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 4543,
      "image": image,
      "quantity": 0
    },
    {
      "id": 3,
      "name": "Baking Sheet",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 7643,
      "image": image,
      "quantity": 0
    },
    {
      "id": 4,
      "name": "Baking Tray / Baking",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 2455,
      "image": image,
      "quantity": 0
    },
    {
      "id": 5,
      "name": "Balloon Whisk",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 6532,
      "image": image,
      "quantity": 0
    },
    {
      "id": 6,
      "name": "Dish Drainer",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 1532,
      "image": image,
      "quantity": 0
    },
    {
      "id": 7,
      "name": "Deep Fryer",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 4875,
      "image": image,
      "quantity": 0
    },
    {
      "id": 8,
      "name": "Cupboard/ Cabinet",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 8754,
      "image": image,
      "quantity": 0
    },
    {
      "id": 9,
      "name": "Counter/ Counter Top",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 5648,
      "image": image,
      "quantity": 0
    },
    {
      "id": 10,
      "name": "Egg Slicer",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 1452,
      "image": image,
      "quantity": 0
    },
    {
      "id": 11,
      "name": "Egg Beater",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 5420,
      "image": image,
      "quantity": 0
    },
    {
      "id": 12,
      "name": "Double Boiler",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 2345,
      "image": image,
      "quantity": 0
    },
    {
      "id": 13,
      "name": "Dishwashing Liquid",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 5421,
      "image": image,
      "quantity": 0
    },
    {
      "id": 14,
      "name": "Dish Washing Liquid",
      "description": "Some example text some example text. John Doe is an architect and engineer",
      "price": 5212,
      "image": image,
      "quantity": 0
    }
  ]

  const [itemsListState, setItemsListState] = useState()
  const [updatedListState, setUpdatedListState] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [id, setId] = useState(0)

  const handleAdd = (item) => {
    let newArr = [...updatedListState]
    // let newId = id
    newArr.push(
      {
        "id": item.id,
        "pname": item.pname,
        "pdesc": item.pdesc,
        "price": item.price,
        "image": item.image,
        "quantity": item.quantity
      }
    )
    // setId(newId)
    setUpdatedListState(newArr);
    let newTotalPrice = totalPrice;
    newTotalPrice += (1 * item.price)
    setTotalPrice(newTotalPrice)
    // console.log("this is the updatedListState "+JSON.stringify(updatedListState))
  }

  const incrementHandle = (item) => {
    let newTotalPrice = totalPrice;
    const newItem = updatedListState.map((obj) => {
      if (obj.id === item.id) {
        return { ...obj, quantity: item.quantity + 1 }
      }
      return obj
    })
    setUpdatedListState(newItem);
    newTotalPrice += (1 * item.price)
    setTotalPrice(newTotalPrice)
  }

  const decrementHandle = (item) => {
    let newTotalPrice = totalPrice;
    const newItem = updatedListState.map((obj) => {
      if (obj.id === item.id) {
        return { ...obj, quantity: item.quantity - 1 }
      }
      return obj
    })
    setUpdatedListState(newItem);
    newTotalPrice -= (1 * item.price)
    setTotalPrice(newTotalPrice)
  }

  const handleRemove = (item) => {
    setUpdatedListState(updatedListState.filter(obj => obj.id != item.id));
    let newTotalPrice = totalPrice;
    newTotalPrice -= (item.quantity * item.price)
    setTotalPrice(newTotalPrice)
  }

  const handlePlaceOrder = () => {
    addToCart(updatedListState).then((resp) => {
      console.log("Add to cart called" + JSON.stringify(updatedListState))
    }).catch((error) => console.log("In App Error-> " + error))
  }
  // useEffect(() => {
  //   console.log("this is the updatedListState inside App" + JSON.stringify(updatedListState));
  // }, [updatedListState]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LoginForm />}></Route>
        <Route path='/registration' element={<RegistrationForm />}></Route>
        <Route path='/changepassword' element={<ChangePasswordForm />}></Route>
        <Route path='/home' element={<Home itemsList={itemsListState} updateItems={handleAdd} />}></Route>
        <Route path='/cart' element={<Cart updatedList={updatedListState} remove={handleRemove} increment={incrementHandle} decrement={decrementHandle} totalPriceProp={totalPrice} placeOrder={handlePlaceOrder} />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
