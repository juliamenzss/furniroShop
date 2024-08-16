import Logo from "./../assets/logo.png"
import Cart from "./../assets/cart.png"
import Profile from "./../assets/profile.png"

function Menu() {
    return (
        <header className="h-12 sm:h-20 flex itens-center justify-between p-5 w-full ">
            <div className="flex items-center justify-center space-x-1 ">
                <img src={Logo} alt="Company logo" className="h-4 w-auto md:pl-7 md:h-5"/>
                <a href="/"><h1 className="font-montserrat font-bold text-lg md:text-xl">Furniro</h1></a>
            </div>
            
            <nav>
                <ul className="hidden sm:text-sm sm:space-x-6 md:text-lg md:flex itens-center justify-center p-2 md:space-x-12 font-medium pr-18">
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>

            <nav>
                <ul className="hidden md:flex justify-between space-x-7 p-3 pr-5 md:pr-7  ">
                    <li><a href="/profile"><img src={Profile} alt="Cart button" className="h-4"/></a></li>
                    <li><a href="/cart"><img src={Cart} alt="Profile button" className="h-5 w-auto" /></a></li>
                </ul>
            </nav>
        </header>
        
    )
}
export { Menu };