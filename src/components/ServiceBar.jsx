import Quality from "../assets/serviceBar/quality.png";
import Protection from "../assets/serviceBar/protection.png";
import Shipping from "../assets/serviceBar/shipping.png";
import Support from "../assets/serviceBar/support.png";

function ServiceBar() {
  return (
    <section className="h-72 sm:h-44 md:h-44 w-full bg-light-yellow flex items-center justify-center">
      <ul className="sm:flex flex-wrap w-full md:flex items-center justify-between md:p-8 m-5">
        <li className="pl-20 flex justify-start pb-4 sm:flex items-center space-x-3">
          <img src={Quality} alt="Quality trophy" className="w-8 sm:w-10 h-auto object-contain"/>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">High Quality</h1>
            <p className="text-sm sm:text-base font-medium text-gray">crafted from top materials</p>
          </div>
        </li>
        <li className="pl-20 flex justify-start pb-4 sm:flex items-center space-x-3">
          <img src={Protection} alt="Warranty protection" className="w-8 sm:w-10 h-auto object-contain"/>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">Warranty Protection</h1>
            <p className="text-sm sm:text-base font-medium text-gray">Over 2 years</p>
          </div>
        </li>
        <li className="pl-20 flex justify-start pb-4 sm:flex items-center space-x-3">
          <img src={Shipping} alt="Free shipping over 150 $" className="w-8 sm:w-10 h-auto object-contain"/>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">Free Shipping</h1>
            <p className="text-sm sm:text-base font-medium text-gray">Order over 150 $</p>
          </div>
        </li>
        <li className="pl-20 flex justify-start pb-4 sm:flex items-center space-x-3">
          <img src={Support} alt="Dedicated support" className="w-8 sm:w-10 h-auto object-contain"/>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">24 / 7 Support</h1>
            <p className="text-sm sm:text-base font-medium text-gray">Dedicated support</p>
          </div>
        </li>

      </ul>
    </section>
  );
}

export { ServiceBar };
