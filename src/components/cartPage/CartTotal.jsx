import img from "../../assets/example.png";
import trash from "../../assets/trash.png";

function CartTotal() {
  return (
    <section className="my-20 w-screen flex flex-col lg:flex-row gap-4 justify-evenly xl:w-10/12 ">
      <section >
        <table className="w-full border-collapse">
          <thead className="bg-light-salmon">
            <tr>
              <th className="text-sm font-semibold"></th>
              <th className="py-4 text-sm font-medium">Product</th>
              <th className="text-sm font-medium">Price</th>
              <th className="text-sm font-medium">Quantity</th>
              <th className="text-sm font-medium">Subtotal</th>
              <th className="text-sm font-medium"></th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="ml-2 py-8 w-10 sm:w-24">
                <img src={img} alt="" className=" w-10  h-10 sm:w-24 sm:h-24 rounded-md object-cover" />
              </td>
              <td className="px-2 sm:px-8 text-xs text-gray-light">Asgaard sofa</td>
              <td className="px-2 sm:px-8 text-xs text-gray-light">Rs. 250,000.00</td>
              <td className="py-1 mt-10 sm:w-16 sm:mt-16 text-gray-light border flex text-sm justify-between p-2 items-center rounded-lg">
                <button className="text-black text-xs">-</button>
                <h1 className="text-black text-xs sm:text-sm">1</h1>
                <button className="text-black text-xs">+</button>
              </td>
              <td className="px-2 sm:px-8 text-xs sm:text-sm">Rs. 250,000.00</td>
              <td className="px-2 sm:px-8 cursor-pointer w-10 sm:w-24">
                <img src={trash} alt="" className="w-4 h-4 object-cover"/>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className=" bg-light-salmon p-4 lg:w-72 xl:w-96 xl:pb-12 flex flex-col justify-center lg:items-center">
        <h1 className="text-3xl font-semibold mb-2 lg:mb-14">Cart Totals</h1>
        <div className="lg:hidden border-t w-full mb-8 text-gray-light"></div>
        <div className="pb-6 flex mb-2 w-full justify-between lg:justify-around">
          <h2 className="text-sm font-medium">Subtotal</h2>
          <h3 className="text-sm text-gray-light">Rs. 250,000.00</h3>
        </div>
        <div className="pb-6 flex mb-2 w-full justify-between lg:justify-around">
          <h2 className="text-sm font-medium">Total</h2>
          <h3 className="text-lg text-caramel font-semibold">Rs. 250,000.00</h3>
        </div>
        <button className="transition hover:bg-caramel hover:text-white border text-xl mb-8 py-4 px-10 rounded-xl">
          Check Out
        </button>
      </section>
    </section>
  );
}

export { CartTotal };