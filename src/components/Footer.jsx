function Footer() {
    return (
      <footer>
        <div className="pt-1 sm:pt-5 flex items-start justify-between flex-wrap h-auto m-4 px-10">
          <section className="flex-col">
            <h3 className=" pb-5 text-lg sm:pb-8 font-bold sm:text-2xl">
              Furniro.
            </h3>
            <div className="text-sm sm:text-base text-light-gray font-light">
              400 University Drive Suite 200 Coral <br /> Gables,
              <br />
              FL 33134 USA
            </div>
          </section>

          <section className="pt-9 sm:pt-0 font-medium">
            <h4 className="pb-4 sm:pb-10 text-light-gray">Links</h4>
            <ul className="gap-4 sm:gap-8 flex flex-col">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Shop</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </section>

          <section className="pt-9 sm:pt-0 font-medium">
            <h4 className="pb-4 sm:pb-10 text-light-gray">Help</h4>
            <ul className="gap-4 sm:gap-8 flex flex-col">
              <li>
                <a href="/">Payment Options</a>
              </li>
              <li>
                <a href="/">Returns</a>
              </li>
              <li>
                <a href="/">Privacy Policies</a>
              </li>
            </ul>
          </section>

          <section className="pt-9 sm:pt-0 text-light-gray">
            <h4 className="pb-4 sm:pb-10 font-medium">Newsletter</h4>
            <form className="flex-col-3 sm:flex flex-wrap gap-8">
              <input
                className=" border-b-2 border-light-gray focus:outline-none"
                type="email"
                placeholder="Enter Email Adress"
              />
              <button
                className="pt-4 font-light sm:pt-0 border-b-2 border-light-gray"
                type="subit">
                Subscribe
              </button>
            </form>
          </section>
        </div>

        <section>
          <div className="w-11/12 mx-auto border-t opacity-10 my-4"></div>
          <p className="m-2 pt-2 pb-6 font-light sm:m-8 px-10 sm:font-normal flex flex-wrap">
            2023 furnino. All rights reverved
          </p>
        </section>
      </footer>
    );
}

export { Footer }