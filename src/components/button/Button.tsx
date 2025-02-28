import React, { ComponentProps } from 'react'

type Tvariant = "primary" | "secondary" | "danger" | "warning" | "success"
type Tbutton = ComponentProps<"button"> & {
    variant?: Tvariant
}
function Button({ children, variant, style ,...rest }: Tbutton) {
    return (
        <button {...rest} style={{...style, ...checkVariant(variant) }}>
            {children}
        </button>
    )
}

export default Button;


function checkVariant(variant?: Tvariant) {
    if (variant === "primary") {
        return { backgroundColor: "blue", color: "white" };
    } else if (variant === "secondary") {
        return { backgroundColor: "gray", color: "white" };
    } else if (variant === "danger") {
        return { backgroundColor: "red", color: "white" };
    } else if (variant === "warning") {
        return { backgroundColor: "yellow", color: "black" };
    } else if (variant === "success") {
        return { backgroundColor: "green", color: "white" };
    }
}
