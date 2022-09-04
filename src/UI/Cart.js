import React from 'react'
import { useEffect } from 'react'
function Cart({ updatedList, increment, decrement, remove, totalPriceProp }) {
  // useEffect(() => {
  //   console.log("this is the updatedList inside cart " + JSON.stringify(updatedList));
  // }, [updatedList]);
  return (
    <div className='container'>
      {updatedList.map((item) =>
        <div className="card-body row" key={item.id}>
          <img
            className="card-img-top col-3"
            src={item.image}
            alt="Card image"
            style={{ width: "100%" }}
          />
          <div className='col-6'>
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              {item.price}
            </p>
            <p>Quantity {item.quantity}</p>
            <div className="btn-group">
              <button type="button" className="btn btn-success" onClick={() => increment(item)}>
                +
              </button>
              <button type="button" className="btn btn-success">
              ₹ {item.quantity * item.price}
              </button>
              <button type="button" className="btn btn-success" onClick={() => decrement(item)}>
                -
              </button>
            </div>
            <div>
              <button type="button" className='btn btn-danger mt-5' onClick={() => remove(item)}>Remove</button>
            </div>
          </div>
          {/* <div className='col-3'>
              <button type="button" className='btn btn-danger'>Remove</button>
            </div> */}
        </div>
      )}
      <hr></hr>
      <div className='row'>
        <div className='col-9'>
          <h1>Total amount ₹ {totalPriceProp}</h1>
          <h6 style={{color: "limegreen"}}>Delivery Charges (Free)</h6>
        </div>
        <div className='col-3'>
          <button type="button" className="btn btn-warning">Place order</button>
        </div>
      </div>
    </div>

  )
}

export default Cart