function BillingForm() {
  return (
    <section className="bg-red-200 py-8 whitespace-nowrap dark:bg-gray-900 md:py-16 h-auto w-screen sm:flex">
      <div className=" bg-orange-100 mx-auto w-1/2 flex items-center justify-center">
        <div className="justify-center items-center">
          <div>
            <h2 className="font-semibold py-2 text-2xl sm:py-5">
              Billing Details
            </h2>
          </div>
          <form action="#" className="">

            <div className="sm:flex flex-row justify-between">
              <div className="py-1 sm:py-4">
                <label for=""className="text-sm md:text-base font-medium">First Name</label> <br />
                <input type="text" id="name" className="w-60 h-8 sm:w-44 sm:h-16 rounded-lg border focus:outline-none border-slate-300 mt-1 text-black pl-2 text-lg" required/>{" "}
              </div>
              <div className="py-1 sm:py-4">
                <label for="" className="text-sm md:text-base font-medium">Last Name</label> <br />
                <input type="text" id="lastName" className="w-60 h-8 sm:w-44 sm:h-16 rounded-lg border focus:outline-none border-slate-300 mt-1 text-black pl-2 text-lg" required/>{" "}
              </div>
            </div>

            <div className="py-1 sm:py-4">
              <label for="" className="text-sm md:text-base font-medium">
              Company Name (Optional)
              </label> <br />
              <input
                type="text" id="company"
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black pl-2 mt-1 text-lg" required/>{" "}
            </div>
            <div className="py-1 sm:py-4">
              <label for="" className="text-sm md:text-base font-medium">
              ZIP code
              </label> <br />
              <input
                type="text" id="zip-input"
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg" required/>{" "}
            </div>
            <div className="py-1 sm:py-4">
              <label for="" className="text-sm md:text-base font-medium">
              Country / Region
              </label> <br />
              <input
                type="text" id="country"
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg" required/>{" "}
            </div>
            <div className="py-1 sm:py-4">
              <label for="" className="text-sm md:text-base font-medium">
              Street address
              </label> <br />
              <input
                type="text" id="address"
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg" required/>{" "}
            </div>
            <div className="py-1 sm:py-4">
              <label for="" className="text-sm md:text-base font-medium">
              Town / City
              </label> <br />
              <input
                type="text" id="town"
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg" required/>{" "}
            </div>
            <div className="py-1 sm:py-4">
              <label for="" className="text-sm md:text-base font-medium">
              Province
              </label> <br />
              <input
                type="text" id="province"
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg" required/>{" "}
            </div>
            <div className="py-1 sm:py-4">
              <label for="" className="text-sm md:text-base font-medium">
              Add-on address
              </label> <br />
              <input
                type="text" id="addOnAddress"
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg" required/>{" "}
            </div>
            <div className="py-1 sm:py-4">
              <label for="" className="text-sm md:text-base font-medium">
              Email address
              </label> <br />
              <input
                type="email" id="email"
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg" required/>{" "}
            </div>
            <div className="py-1 sm:py-4">
              <label for="" className="text-sm md:text-base font-medium">
              Additional information
              </label> <br />
              <input
                type="text" id="addInformation"
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg" required/>{" "}
            </div>
          </form>
        </div>
      </div>

 
    </section>
  );
}

export { BillingForm };
