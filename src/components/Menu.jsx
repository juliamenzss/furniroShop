import Logo from "./../assets/logo.png"
import Cart from "./../assets/cart.png"
import Profile from "./../assets/profile.png"

function Menu() {
    return (
        <header className="flex itens-center justify-between p-5 w-full h-20 shadow-header ">
            <div className="flex items-center justify-center space-x-1 ">
                <img src={Logo} alt="Company logo" className="pl-7 "/>
                <a href="/"><h1 className="font-montserrat font-bold text-sm md:text-3xl pt-2">Furniro</h1></a>
            </div>
            
            <nav>
                <ul className="hidden md:flex itens-center justify-center p-2 space-x-14 font-medium text-lg pr-20">
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>

            <nav>
                <ul className="flex flex-col md:flex-row justify-between space-x-7 p-2 pr-7">
                    <li><a href="/profile"><img src={Profile} alt="Cart button" className="h-5"/></a></li>
                    <li><a href="/cart"><img src={Cart} alt="Profile button" className="h-6" /></a></li>
                </ul>
            </nav>
        </header>
        
    )
}
export { Menu };