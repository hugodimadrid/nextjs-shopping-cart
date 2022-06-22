import Image from 'next/image'
import Head from 'next/head'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { useCart } from 'react-use-cart'

const Cart = () => {
  const { updateItemQuantity, items, cartTotal } = useCart()

  return (
    <div className=''>
      <Head>
        <title>Cart</title>
        <meta property='og:title' content='Cart' key='title' />
      </Head>
      <h6 className='text-center text-info'>SHOPPING CART</h6>{' '}
      <hr className='text-primary' />
      <div className='row'>
        <div className='col-md-8 col-12'>
          {items.map((product) => (
            <div key={product.id} className='card rounded-0 border-0 px-2'>
              <div className='row g-0'>
                <div className='col-4 my-auto'>
                  <Image
                    src={product.image}
                    width='100'
                    height='100'
                    priority
                    className='card-img-top img-fluid image'
                    alt={product.name}
                  />
                </div>
                <div className='col-8 my-auto'>
                  <div className='card-body py-0 d-flex justify-content-between'>
                    <p className='card-title fw-light'>{product.name}</p>
                    <p className='card-title fw-light'>
                      {product.quantity} x ${product.price}
                    </p>
                  </div>
                  <div className='card-body py-0 btn-group float-end'>
                    <button
                      onClick={() =>
                        updateItemQuantity(product.id, product.quantity - 1)
                      }
                      className='btn btn-danger btn-sm rounded-pill me-3'
                    >
                      <FaMinusCircle className='mb-1' />
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(product.id, product.quantity + 1)
                      }
                      className='btn btn-primary btn-sm rounded-pill'
                    >
                      <FaPlusCircle className='mb-1' />
                    </button>
                  </div>
                </div>
              </div>{' '}
              <hr className='my-0 py-0' />
            </div>
          ))}
        </div>
        <div className='col-md-4 col-12'>
          <div className='card'>
            <div className='card-body'>
              <div className='d-flex justify-content-between'>
                <span>Delivery</span> <span>$ 0</span>
              </div>
              <div className='d-flex justify-content-between'>
                <span>Discount</span> <span>$ 0</span>
              </div>
              <div className='d-flex justify-content-between fw-bold'>
                <span>Total</span> <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Cart