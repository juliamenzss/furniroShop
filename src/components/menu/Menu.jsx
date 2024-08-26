import Logo from "../../assets/menu/logo.png";
import Profile from "../../assets/menu/profile.png";
import Cart from "../../assets/menu/cart.png";
import { useState } from "react";
import { CartBar } from "../cartBar/Cart";
import { useSelector } from "react-redux";

function Menu() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const cartItems = useSelector((state) => state.cart.cart);

  const getTotalQuantity = () => {
    let total = 0
    cartItems.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return (
    <header className="h-12 sm:h-20 flex itens-center justify-between p-5 w-full ">
      <div className="relative flex items-center justify-center space-x-1 ">
        <img
          src={Logo}
          alt="Company logo"
          className="h-4 w-auto md:pl-7 md:h-5"
        />
        <a href="/">
          <h1 className="font-montserrat font-bold text-lg md:text-2xl">
            Furniro
          </h1>
        </a>
      </div>

      <nav>
        <ul className="hidden sm:text-sm sm:space-x-6 md:text-lg md:flex itens-center justify-center p-2 md:space-x-12 font-medium pr-18">
          <li>
            <a href="/" className="transition hover:text-caramel">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="transition hover:text-caramel">
              Shop
            </a>
          </li>
          <li>
            <a href="/about" className="transition hover:text-caramel">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="transition hover:text-caramel">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <nav className="items-center flex">
        <ul className="space-x-5 pr-4 md:space-x-7 flex justify-between md:pr-7 relative">
          <li>
            <a href="/profile">
              <img src={Profile} alt="Profile button" className="h-4 md:h-5" />
            </a>
          </li>

          <li className="cursor-pointer flex items-center space-x-2">
            <button onClick={toggleCart}>
              <img src={Cart} alt="Cart button" className="h-5 md:h-6" />
            </button>

            {getTotalQuantity() >= 1 && (
              <span className="absolute -top-2 bottom-0 right-2 md:right-4 ">

                <p className="flex h-4 w-4 rounded-full bg-red-800 items-center justify-center text-white text-[9px]">
                  {getTotalQuantity()}
                </p>
              </span>
            )}
          </li>
        </ul>
      </nav>

      {isCartOpen && <CartBar click={toggleCart} />}
    </header>
  );
}
export { Menu };
