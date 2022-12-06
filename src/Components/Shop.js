import React from "react"


export default function Shop (props) {



    return (
        <div>
            <h1>Shop</h1>
            <div className="card">
                <h3>T-Shirt</h3>
                <button onClick={props.handleMinus}>-</button>
                <input type="number"
                       placeholder={props.count}
                       value={props.count}/>
                <button onClick={props.handleAdd}>+</button>
                <button onClick={props.handleCart}>Add to cart</button>
            </div>
        </div>

    )

}