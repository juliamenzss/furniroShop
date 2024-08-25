import RemoveProduct from "../../assets/cartTotal/removeProduct.png";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../store/cart/cartSlice";

function Product() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.discountPrice ? item.discountPrice : item.price;
      return total + price * item.quantity;
    }, 0);
  };


  return (
    <div className="flex flex-col ">
      {cart.map((item) => (
        <div
          key={item.productId}
          className="flex items-center justify-between w-56 my-4 ">
          <div className="flex flex-row">
            <img src={item.image} alt="" className="w-20 h-20 rounded-xl" />
          </div>
          <div className="">
            <h1 className="text-sm font-medium">{item.name}</h1>
            <div className="flex justify-between items-center">
              <h3>{item.quantity}</h3>
              <h3 className="font-light text-sm"> x </h3>
              <h3 className="text-caramel font-medium text-xs">
                {item.discountPrice ? item.discountPrice : item.price}
              </h3>
            </div>

            <button onClick={() => dispatch(removeProduct(item.productSkuId))}>
              <img src={RemoveProduct} alt="" className="flex items-end" />
            </button>
          </div>
       
        </div>
      ))}
       <div className="flex justify-between w-80 py-2 pr-4 ">
          <h1>Subtotal</h1>
          <h3 className="text-caramel font-semibold">Rp {getTotalPrice().toFixed(3)}</h3>
        </div>
    </div>
  );
}
// }

export { Product };

     