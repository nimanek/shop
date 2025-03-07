import { Link } from "react-router-dom"
import Container from "../../components/container/Container"
import ProductItem from "../../components/productItem/ProductItem"
import { useEffect, useState } from "react"
import { getProducts } from "../../services/api"
import { IProduct } from "../../types/server"


const Store = () => {
    const [products, setProducts] = useState<IProduct[]>([])


    useEffect(() => {
        getProducts().then(result => {
            setProducts(result)
        })
    }, [])


    return (
        <div>
            <Container>
                <h1 className="mt-5">Lastest Products</h1>

                <div className="grid grid-cols-4 gap-4 mt-4">

                    {
                        products.map(item => (
                            <Link key={item.id} to={`/product/${item.id}`}>
                                <ProductItem {...item} />
                            </Link>
                        ))
                    }

                </div>
            </Container>

        </div>
    )
}

export default Store
