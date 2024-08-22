import Syltherine from "../assets/syltherine.png";
function Details() {



    return(
        <section>
            <div className="flex flex-col pl-10">
                <div>
                    <img src={Syltherine} alt="" className="hidden sm:h-12 w-12 px-2"/>
                    <img src={Syltherine} alt="" className="hidden sm:h-12 w-12 px-2"/>
                    <img src={Syltherine} alt="" className="hidden sm:h-12 w-12 px-2"/>
                    <img src={Syltherine} alt="" className="hidden sm:h-12 w-12 px-2"/>
                </div>
                <div>
                <img src={Syltherine} alt="" className="h-72 w-72 px-26 rounded-sm" />
                </div>
            </div>
        </section>
    )
}

export { Details }