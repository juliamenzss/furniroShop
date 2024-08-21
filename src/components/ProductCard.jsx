import Syltherine from "../assets/syltherine.png";
import Share from "../assets/hoverImage/share.png";
import Compare from "../assets/hoverImage/compare.png";
import Like from "../assets/hoverImage/like.png";


function ProductCard() {
  return (
    <section className="  max-w-sm w-64 shadow-sm pb-6 m-5 bg-silver-gray hover:bg-sky-700">
      <div>
      <img className="w-full" src={Syltherine} alt="product.name" />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">title</h3>
        <p className="text-gray text-base">description</p>
      </div>
      <div className="px-6 flex-row flex gap-2">
        <p className="text-l font-semibold">Rp 2.500.000</p>
        <p className="line-through text-sm">Rp 3.500.000</p>
      </div>

      <section>
      <div className="">
        <button className="">
          Add to cart
        </button>
        <div className="px-4 py-2 rounded-md mx-2 ">
        <button className={Share}><img src="" alt="" /> Share</button>
        <button className={Compare}><img src="" alt="" />Compare</button>
        <button className={Like}><img src="" alt="" />Like</button>
        </div>
      </div>
      </section>
      </div>
    </section>
  );
}

export { ProductCard };
