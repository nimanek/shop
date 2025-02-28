import { Link, NavLink } from "react-router-dom"
import Container from "../container/Container"
import { useContext } from "react"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"




function Navbar() {

    const { cartQty } = useContext(ShoppingCartContext)

    return (
        <div className='h-10 border-b shadow flex items-center'>
            <Container>
                <div className="flex justify-between items-center">
                    <ul className="flex ">
                        <li className="mr-4"><NavLink to="/" >Home</NavLink></li>
                        <li className="mr-4"><NavLink to="/store" >Store</NavLink></li>
                    </ul>

                    <div className="relative">
                        <Link to="/cart">
                            <img className="w-7 h-7" src="https://img.icons8.com/pastel-glyph/50/shopping-trolley--v2.png" />
                        </Link>
                        <span className="bg-black text-white rounded-full w-4 h-4 absolute flex items-center text-xs justify-center -right-1 -top-1">{cartQty}</span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
