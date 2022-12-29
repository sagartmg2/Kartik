import React, { useContext } from 'react';
import { CartContext } from '../App';
const Cart = () => {

    const cart_context = useContext(CartContext)

    return (
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">product</th>
                        <th scope="col">Qunaity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart_context.cart_items.map(cart_item => {
                            return <tr>
                                <th scope="row">1</th>
                                <td>{cart_item.name}</td>
                                <td>{cart_item.quantity}</td>
                                <td>{cart_item.quantity * cart_item.price}</td>
                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    );
}

export default Cart;
