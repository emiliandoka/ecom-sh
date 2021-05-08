export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(cartITEM =>cartITEM.id === cartItemToAdd.id)
    
    if(existingItem !== undefined){
        cartItems.map(cartITEM => cartITEM.id=== cartItemToAdd.id
            ? {quantity: cartITEM.quantity ++, ...cartITEM}
            : cartITEM )
            return [...cartItems]    
    }else{
         return [...cartItems, {...cartItemToAdd, quantity : 1}]
    }

   
}