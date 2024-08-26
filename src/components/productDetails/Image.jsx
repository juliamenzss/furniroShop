import Syltherine from "../../assets/menu/syltherine.png";
function Image({img }) {
    return (
      <section className="flex flex-row ">
        <section className="flex p-16 bg-red-100 space-x-4">
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
              src={img}
              alt=""
              className="h-96 w-96 px-26 rounded-xl"
            />
          </div>
        </section>

        
      </section>
    );
}

export { Image }