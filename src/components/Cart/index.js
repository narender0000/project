import Header from '../Header'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartListView from '../CartListView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {view => {
      const {cartList} = view
      const showEmptyview = cartList.length === 0
      return (
        <>
          <Header />
          {showEmptyview ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
