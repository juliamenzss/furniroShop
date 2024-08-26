import Ellipse from '../../assets/billing/ellipse.png'
function BillingDetails() {
    return (
      <section className="w-full max-w-md flex items-center justify-center pt-20">
    <div className="">

      <table className=" w-full sm:min-w-full text-left text-sm">
        <thead>
          <tr>
            <th className="px-10 text-lg sm:px-6 py-3 sm:text-2xl font-medium">Product</th>
            <th className="px-10 text-lg sm:px-6 py-3 sm:text-2xl font-medium text-right">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pl-10 sm:px-6 py-3 sm:py-4 text-gray-light text-sm sm:text-base font-normal">
              Asgaard sofa <span className="text-black">x 1</span>
            </td>
            <td className="pr-10 sm:pr-6 sm:pl-6 py-3 sm:py-4 text-sm sm:text-base font-light text-right">
              Rs. 250,000.00
            </td>
          </tr>
          <tr>
            <td className="pl-10 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium">Subtotal</td>
            <td className="pr-10 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-light text-right">
              Rs. 250,000.00
            </td>
          </tr>
          <tr>
            <td className="pl-10 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium">Total</td>
            <td className="px-10 text-base sm:px-6 py-3 sm:py-4 text-right sm:text-lg font-semibold text-caramel">
              Rs. 250,000.00
            </td>
          </tr>
        </tbody>
      </table>

      
      
      <section className=" w-full sm:min-w-full text-left text-sm px-10  sm:px-6">
      <div className="px-5">
      <div className="w-56 sm:w-96 mx-auto border-t opacity-20"></div>
      </div>
        <div className='flex flex-row my-3 items-center'>
          <img src={Ellipse} alt="ellipse" className='h-3 w-3'/>
          <h4 className='font-normal pl-3'>Direct Bank Transfer</h4>  
        </div>

        <div>
          <p className='text-gray-light font-light'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
        </div>

          <div className='py-6'>
            <span className='flex-row flex items-center py-2'>
              <input type="checkbox" className='appearance-none w-3 h-3 border border-gray-light rounded-full checked:bg-black cursor-pointer focus:outline-none'/>
              <p className='pl-3 text-gray-light font-medium'>Direct Bank Transfer</p>
            </span>
            <span className='flex-row flex items-center'>
              <input type="checkbox" className='appearance-none w-3 h-3 border border-gray-light rounded-full checked:bg-black cursor-pointer focus:outline-none'/>
              <p className='pl-3 text-gray-light font-medium'>Cash On Delivery</p>
            </span>

        <div className='py-6'>            
          <p className='font-light'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className='font-semibold'>privacy policy</a>.</p>
        </div>

      <div className='flex justify-center'>
      <button className="py-3 px-16 mt-2 transition hover:bg-caramel hover:text-white border text-xl mb-8 sm:py-4 sm:px-20 rounded-xl">
      Place order
        </button>
      </div>
        </div>
      
      </section>
      </div>
    </section>
    );
  }
  
  export { BillingDetails };
  