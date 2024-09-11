import { memo, useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

import { CartItem as CartItemType } from '../types/CartItem';
import { CartContext } from '../contexts/CartContext';
import { Product } from '../types/Product';

const CartItemImage = memo(
  ({ id, image }: Pick<CartItemType, 'id' | 'image'>) => {
    return (
      <Link to={`/product/${id}`}>
        <img className="max-w-[80px]" src={image} alt="" />
      </Link>
    );
  }
);

const RemoveFromCartButton = memo(({ id }: Pick<CartItemType, 'id'>) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
      <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
    </div>
  );
});

const AddToCartButton = memo(({ product }: { product: Product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div onClick={() => addToCart(product)} className="text-xl cursor-pointer">
      <IoMdAdd className="text-gray-500 hover:text-teal-500 transition" />
    </div>
  );
});

const DecreaseAmountButton = memo(({ id }: Pick<CartItemType, 'id'>) => {
  const { decreaseAmount } = useContext(CartContext);
  return (
    <div onClick={() => decreaseAmount(id)} className="text-xl cursor-pointer">
      <IoMdRemove className="text-gray-500 hover:text-teal-500 transition" />
    </div>
  );
});

const CartProductAmount = memo(({ amount }: { amount: number }) => {
  return (
    <div className="h-full flex justify-center items-center px-2">{amount}</div>
  );
});

const CartProductPrice = memo(({ price }: { price: number }) => {
  return (
    <div className="flex flex-1 justify-around items-center">$ {price}</div>
  );
});

const CartProductTotal = memo(
  ({ price, amount }: { price: number; amount: number }) => {
    return (
      <div className="flex flex-1 justify-end items-center text-primary font-medium">{`$ ${(
        price * amount
      ).toFixed(2)}`}</div>
    );
  }
);

const CartItem = ({ item }: { item: CartItemType }) => {
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <CartItemImage id={id} image={image} />
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <RemoveFromCartButton id={id} />
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <DecreaseAmountButton id={id} />
              <CartProductAmount amount={amount} />
              <AddToCartButton product={item} />
            </div>
            <CartProductPrice price={price} />
            <CartProductTotal price={price} amount={amount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
