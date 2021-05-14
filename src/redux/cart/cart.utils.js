export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(cartITEM =>cartITEM.id === cartItemToAdd.id)
    
    if(existingItem !== undefined){
       return cartItems.map(cartITEM => cartITEM.id=== cartItemToAdd.id
            ? {...cartITEM, quantity: cartITEM.quantity +1}
            : cartITEM )
             
    }
         return [...cartItems, {...cartItemToAdd, quantity : 1}]
    
}
export const removeItemFromCart = (cartItems, cartItemToRemove)=>{
    const exisitinCartItem = cartItems.find(cartItem=> cartItem.id === cartItemToRemove.id
        )
        if(exisitinCartItem.quantity===1){
          return  cartItems.filter(cartItem=> cartItem.id !== cartItemToRemove.id)
        }
        return cartItems.map(cartItem => cartItem.id=== cartItemToRemove.id? {...cartItem, quantity: cartItem.quantity -1}: cartItem)
}