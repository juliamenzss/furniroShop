import { Menu } from "../components/Menu"
import { Footer } from "../components/Footer"
import { NavigationToolbar } from "../components/NavigationToolbar"
import { Details } from "../components/Details";


function Product() {
    return (
        <div>
            <Menu />
            <NavigationToolbar />
            <Details />
            <Footer />
        </div>
    )
}

export { Product };