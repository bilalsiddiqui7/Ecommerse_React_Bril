import React, { useState, useEffect } from 'react'
import image from '../images/81zO234HByL._SX425_.jpg'
import $ from 'jquery';
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
function Home({ itemsList, updateItems }) {

    //THIS JQUERY IS FOR THE SEARCH FILTER
    $(document).ready(function () {
        $("#myInput").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#myList div").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <input id="myInput" className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-success" type="submit">
                    Search
                </button>
            </nav>
            
            {/* You should not use nav tag here....this actually comes in front of your <Header/> component....
            So I have added a margin from top as mt-5 -ASHISH */}
            <div className="row" id="myList">
                {itemsList.map((item) =>

                    <div key={item.id} className="card col-3" style={{ width: 319 }}>
                        <img
                            className="card-img-top"
                            src={item.image}
                            alt="Card image"
                            style={{ width: "100%" }}
                        />
                        <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <h5 className="price">₹ {item.price}</h5>
                            <p className="card-text">
                                {item.description}
                            </p>
                            {/* <a href="#" className="btn btn-primary" onClick={()=>updateItems(item)}>
                                Add to Cart
                            </a> */}
                            <div className="btn btn-primary" onClick={() => updateItems(item)}>
                                Add to Cart
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </>
    )
}

export default Home