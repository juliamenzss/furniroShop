function Footer() {
    return (
      <footer>
        <div className="flex items-start justify-between flex-wrap h-auto m-8 px-10 pt-5">
        <section className="flex-col">
          <h3 className="font-bold text-2xl pb-10">Furniro.</h3>
          <address className="text-light-gray font-light">
            400 University Drive Suite 200 Coral <br /> Gables,
            <br />
            FL 33134 USA
          </address>
        </section>

        <section className="font-medium">
          <h4 className="text-light-gray pb-10 ">Links</h4>
          <ul className="flex flex-col gap-8">
            <li>
              <a href="/"></a>Home
            </li>
            <li>
              <a href="/"></a>Shop
            </li>
            <li>
              <a href="/"></a>About
            </li>
            <li>
              <a href="/"></a>Contact
            </li>
          </ul>
        </section>

        <section className="font-medium">
          <h4 className="text-light-gray pb-10">Help</h4>
          <ul className="flex flex-col gap-8">
            <li>
              <a href="/"></a>Payment Options
            </li>
            <li>
              <a href="/"></a>Returns
            </li>
            <li>
              <a href="/"></a>Privacy Policies
            </li>
          </ul>
        </section>

        <section className="text-light-gray">
          <h4 className="font-medium pb-10">Newsletter</h4>
          <form className="flex flex-wrap gap-8">
            <input type="email" placeholder="Enter Email Adress" />
            <button type="subit">Subscribe</button>
          </form>
        </section>
        </div>

        <section>
          <div className="w-11/12 mx-auto border-t opacity-10 my-4"></div>
          <p className="font-normal flex flex-wrap m-8 px-10 pt-5">2023 furnino. All rights reverved</p>
        </section>
      </footer>
    );
}

export { Footer }