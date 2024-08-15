import Syltherine from "../assets/syltherine.png";

function ProductCard() {
  return (
      <section className="max-w-sm w-64 overflow-hidden shadow-sm pb-6 m-5 bg-silver-gray">
        <img className="w-full" src={Syltherine} alt="title" />
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2">title</h3>
          <p className="text-gray text-base">description</p>
        </div>
        <div className="px-6">
          <p className="text-gray-700 text-base">description</p>
        </div>
      </section>
  );
}

export { ProductCard };
