import Syltherine from "../assets/syltherine.png";
import Evaluation from "../assets/evaluation.png";
function Details() {



    return (
      <section className="flex flex-row">
        <section className="flex py-16 bg-red-100 w-1/2 space-x-4">
          <div className="flex flex-col pl-16 gap-6 items-center justify-start">
            <img
              src={Syltherine}
              alt=""
              className="hidden sm:flex h-16 w-20px-2"
            />
            <img
              src={Syltherine}
              alt=""
              className="hidden sm:flex h-16 w-20 rounded-xl px-2"
            />
            <img
              src={Syltherine}
              alt=""
              className="hidden sm:flex h-16 w-20 rounded-xl px-2"
            />
            <img
              src={Syltherine}
              alt=""
              className="hidden sm:flex h-16 w-20 rounded-xl px-2"
            />
          </div>
          <div>
            <img
              src={Syltherine}
              alt=""
              className="h-96 w-96 px-26 rounded-xl"
            />
          </div>
        </section>

        <section className="flex py-16 bg-orange-300 w-1/2">
          <div className="flex flex-col pl-16 gap-6 items-center justify-start">
            <h2>Asgaard sofa</h2>
            <h3>Rs. 250,000.00</h3>
            <span className="flex flex-row">
              <img src={Evaluation} alt="" />
              <p>5 Customer Review</p>
            </span>
            <p>
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div className="flex flex-col">
              <p>Size</p>
              <div className="flex flex-row gap-4">
                <button className="bg-white transition border-none hover:bg-caramel hover:text-white h-10 w-8 font-semibold text-black rounded-lg ">
                  L
                </button>
                <button className="bg-white transition border-none hover:bg-caramel hover:text-white h-10 w-8 font-semibold text-black rounded-lg ">
                  L
                </button>
                <button className="bg-white transition border-none hover:bg-caramel hover:text-white h-10 w-8 font-semibold text-black rounded-lg ">
                  L
                </button>
              </div>
              <p>Color</p>
              <div className="flex flex-row gap-4">
      
                <button className="focus:border-gray-light bg-blue-light h-10 w-10 rounded-full border border-blue-light">
        
                </button>
                <button className="focus:border-gray-light bg-black h-10 w-10 rounded-full border border-black">
                  
                </button>
                <button className="focus:border-gray-light bg-caramel h-10 w-10 rounded-full border border-caramel">
                  
                </button>
              </div>
              <div>
              
<form class="border rounded-xl">
    <label for="counter-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
    <div class="relative flex items-center">
        <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="counter-input" data-input-counter class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required />
        <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
</form>

              </div>
            </div>
          </div>
        </section>
      </section>
    );
}

export { Details }