import close from "../../assets/cartTotal/close.png";
import { Bottom } from "./Bottom";
import { Product } from "./Product";

function CartBar({ click }) {
  return (
    <div className="fixed inset-0 h-auto z-50">
      <div onClick={click} className="absolute transition z-0 inset-0 bg-black w-full h-full opacity-20"></div>

      
      <div className="absolute min-h-96 z-10 overflow-y-auto max-h-[500px] bg-white w-96 right-0 opacity-100 flex flex-col flex-wrap justify-between">
        <div className="px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-black text-2xl font-bold py-4">Shopping Cart</h1>
            <div onClick={click} className="transition">
              <img src={close} alt="close button" className=" sm:w-4 h-4 cursor-pointer" />
            </div>
          </div>
          <div className="border-b opacity-20 w-72"></div>
            <Product           
              />
        <Bottom />
            
        </div>
        {/* <div className="fixed top-0 left-0 h-14 w-96 bg-white"> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export { CartBar };
