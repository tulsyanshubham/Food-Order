import React from 'react'
import { LiaRupeeSignSolid } from 'react-icons/lia'

export default function FoodItem() {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img
                    src="https://b.zmtcdn.com/data/pictures/chains/2/50382/2eb4ebef13c3bba9c55a515f6ddf6e88.jpg?output-format=webp&it=aroundl300:273&crop=300:273 ;* *"
                    alt="Pizza"
                    className="card-img-top mx-auto"
                />
                {/* Heading and Description */}
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Veg Loaded Pizza</h5>
                    <p className="fooditem_des">
                        Crunchy and Cheesy veg loaded pizza served with happiness
                    </p>
                    <p className="card-text">
                        <LiaRupeeSignSolid /> 180
                        <br />
                    </p>
                    <button
                        type="button"
                        id="cart_btn"
                        className="btn btn-primary d-inline ml-4"
                    >
                        Add to Cart
                    </button>
                    <br />
                    <p>
                        Status: {" "}
                        <span
                            id="stock_status"
                            className={10 > 5 ? "greenColor" : "redColor"}
                        >
                            {10 > 5 ? "In Stock" : "Out of Stock"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
