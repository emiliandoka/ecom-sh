import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBtn = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IqdkzDLs8wJOw0Fs0rtMdYnZkwMpu5TnoFJZr590aNmdD06Z5s872Oz2VXbyC8TANkJIJ4jX39BjlSLHRN1RUD100Bt9hUNxj'
    const onToken = token=>console.log(token)
    return (
        <StripeCheckout
        label="Pay Now"
        name="Ecom Shop"
        billingAddress
        shippingAddress
        image='https://cdn0.iconfinder.com/data/icons/shopping-and-commerce-5-4/48/222-512.png'
        description={`Your Total is $${price}`}
        ammount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutBtn;