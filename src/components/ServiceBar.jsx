import Quality from "../assets/quality.png";
import Protection from "../assets/protection.png";
import Shipping from "../assets/shipping.png";
import Support from "../assets/support.png";

function ServiceBar() {
  return (
    <section className="p-5 h-51 w-screen bg-light-pink">
      <ul className="flex items-center justify-between m-10">
        <li className="flex items-center space-x-2">
          <img src={Quality} alt="Quality trophy" className="w-11 h-auto object-contain"/>
          <div>
            <h1 className="font-semibold text-2xl">High Quality</h1>
            <p className="font-medium text-xl text-gray">crafted from top materials</p>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <img src={Protection} alt="Warranty protection" className="w-11 h-auto object-contain" />
          <div>
            <h1 className="font-semibold text-2xl">Warranty Protection</h1>
            <p className="font-medium text-xl text-gray">Over 2 years</p>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <img src={Shipping} alt="Free shipping over $150" className="w-11 h-auto object-contain" />
          <div>
            <h1 className="font-semibold text-2xl">Free Shipping</h1>
            <p className="font-medium text-xl text-gray">Order over 150 $</p>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <img src={Support} alt="Dedicated support" className="w-11 h-auto object-contain" />
          <div>
            <h1 className="font-semibold text-2xl">24 / 7 Support</h1>
            <p className="font-medium text-xl text-gray">Dedicated support</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export { ServiceBar };
