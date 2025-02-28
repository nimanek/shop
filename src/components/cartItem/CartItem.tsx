
import { useContext, useEffect, useState } from "react";
import Button from "../button/Button"
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";



interface ICartItem {
    id: number;
    qty: number;
}

function CartItem({ id, qty }: ICartItem) {
    const [product, setProduct] = useState<IProduct>()

    const {handleIncreaseProductQty,handleDecreaseProductQty,handleRemoveProduct} = useContext(ShoppingCartContext)

    useEffect(() => {
        getProduct(id).then(data => {
            setProduct(data)
        });
    }, [])


    return (
        <div className="flex mt-4 border-b pb-2">
            <Link to={`/product/${id}`}>
            <img className="rounded w-28" src={product?.image} alt="" />
            </Link>
            




            <div className="">
                <h3 className="ml-2">{product?.title}</h3>
                <Button onClick={()=>handleIncreaseProductQty(id)} className="rounded-sm p-1 ml-1" variant="primary">+</Button>
                <span className="mx-2 text-xl">{qty}</span>
                <Button onClick={()=>handleDecreaseProductQty(id)} className="rounded-sm p-1 ml-1" variant="primary">-</Button>
                <Button onClick={()=>handleRemoveProduct(id)} className="rounded-sm p-1 ml-1" variant="danger">Remove</Button>
            </div>


        </div>
    )
}

export default CartItem
