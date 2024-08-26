import React, { useState } from "react";
import Evaluation from "../../assets/menu/evaluation.png";
import IconFace from "../../assets/productImg/iconFace.png";
import IconX from "../../assets/productImg/iconX.png";
import IconLinkedin from "../../assets/productImg/iconLinkedin.png";

function Description({
  name,
  description,
  longDescription,
  price,
  discountPrice,
}) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const formatPrice = (price) =>
    price.toLocaleString("en-US", { minimumFractionDigits: 2 });
  return (
    <section className="flex py-16 w-1/2">
      <div className="flex flex-col pl-16  items-center justify-start">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl pb-2 font-medium">{name} Sylserine</h1>
          <h3 className="text-gray-light text-lg">Rs. {formatPrice(price)}</h3>
          <span className="flex flex-row items-center gap-4 justify-center">
            <img src={Evaluation} alt="Customer reviews" className="h-4" />
            <div className="hidden lg:block border-l sm:border-l-1 h-6 mx-auto my-4 border-gray-light"></div>
            <p className="text-gray-light text-xs">5 Customer Review</p>
          </span>
          <span className="w-96">
          <p className="text-xs">
            {longDescription}Setting the bar as one of the loudest speakers in
            its class, the Kilburn is a compact, stout-hearted hero with a
            well-balanced audio which boasts a clear midrange and extended highs
            for a sound.
          </p>
          </span>
        <div className="flex flex-col items-start justify-start">
          <p className="text-base text-gray-light py-2">Size</p>
          <div className="flex flex-row gap-4">
            <button className="bg-white transition border-none hover:bg-caramel hover:text-white h-10 w-8 font-semibold text-black rounded-lg">
              XS
            </button>
            <button className="bg-white transition border-none hover:bg-caramel hover:text-white h-10 w-8 font-semibold text-black rounded-lg">
              L
            </button>
            <button className="bg-white transition border-none hover:bg-caramel hover:text-white h-10 w-8 font-semibold text-black rounded-lg">
              XL
            </button>
          </div>
          <p className="text-base text-gray-light py-2">Color</p>
          <div className="flex flex-row gap-4">
            <button className="focus:border-gray-light bg-blue-light h-10 w-10 rounded-full border border-blue-light"></button>
            <button className="focus:border-gray-light bg-black h-10 w-10 rounded-full border border-black"></button>
            <button className="focus:border-gray-light bg-caramel h-10 w-10 rounded-full border border-caramel"></button>
          </div>

          <div className=" justify-center flex flex-row gap-6 py-8">
          <div className="relative border border-gray-light rounded-xl h-12 w-24 flex items-center justify-center flex-row">
            <button
              type="button"
              id="decrement-button"
              onClick={handleDecrement}
              className="hover:bg-gray-light inline-flex items-center justify-center h-5 w-5"
            >
              <svg
                className="w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="counter-input"
              data-input-counter
              className=" border-0 bg-transparent text-sm font-normal max-w-[2rem] text-center"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
              type="button"
              id="increment-button"
              onClick={handleIncrement}
              className="hover:bg-gray-light inline-flex items-center justify-center h-5 w-5"
            >
              <svg
                className="w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <div className="border rounded-xl h-12 w-40 flex items-center justify-center bg-white transition  hover:bg-caramel hover:text-white  font-semibold">
            <button className="">Add to Cart</button>
          </div>
          </div>

          <div className="hidden lg:block sm:border-t border-opacity-40 h-10 w-96 mx-auto my-4 border-gray-light justify-center items-center sm:flex"></div>
        <table className="table-auto w-full text-left max-w-md mx-auto flex items-start justify-start  text-gray-light ">
        <tbody className="">
          <tr>
            <td className="pr-4 py-2">SKU</td>
            <td>: SS001</td>
          </tr>
          <tr>
            <td className="pr-4 py-2">Category</td>
            <td>: Sofas</td>
          </tr>
          <tr>
            <td className="pr-4 py-2">Tags</td>
            <td>: Sofa, Chair, Home, Shop</td>
          </tr>
          <tr>
            <td className="pr-4 py-2">Share</td>
            <td className="flex items-center space-x-4">
            <img src={IconFace} alt="" />
            <img src={IconLinkedin} alt="" />
            <img src={IconX} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
    </div>
    </section>
  );
}

export { Description };
