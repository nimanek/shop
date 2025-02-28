import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


interface IShoppingCartProvider {
    children: React.ReactNode;
}

interface ICartItem {
    id: number;
    qty: number;
}

interface IShoppingCartContext {
    cartItems: ICartItem[];
    handleIncreaseProductQty: (id: number) => void;
    handleDecreaseProductQty: (id: number) => void;
    getProductQty: (id: number) => number;
    handleRemoveProduct: (id: number) => void;
    cartQty: number;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {

    const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>("cartItems", [])

    const handleIncreaseProductQty = (id: number) => {
        setCartItems(currentItems => {
            let selectedItem = currentItems.find(item => item.id == id)

            if (selectedItem == null) {
                return [...currentItems, { id: id, qty: 1 }]
            }
            else {
                return currentItems.map(item => {
                    if (item.id == id) {
                        return { ...item, qty: item.qty + 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        })
    };

    const handleDecreaseProductQty = (id: number) => {
        setCartItems(currentItems => {
            let selectedItem = currentItems.find(item => item.id == id)
            if (selectedItem?.qty === 1) {
                return currentItems.filter(item => item.id !== id)
            }
            else {
                return currentItems.map(item => {
                    if (item.id == id) {
                        return { ...item, qty: item.qty - 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    const getProductQty = (id: number) => {
        return cartItems.find(item => item.id == id)?.qty || 0
    }

    const handleRemoveProduct = (id: number) => {
        setCartItems(currentItems => currentItems.filter(item => item.id !== id))
    }

    const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)

    return (

        <ShoppingCartContext.Provider value={{ cartItems, handleIncreaseProductQty, handleDecreaseProductQty, getProductQty, handleRemoveProduct, cartQty }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}