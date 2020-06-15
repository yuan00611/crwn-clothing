import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51Gu9K4IQg8k6yoneeGprJFfdrrVGjc2KpeRgc7jfDPtoplH6r4FgVpFONYKZRsHNQ7KzgVevoNUeNDgvvvjwdYp700vchhBSWI';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout 
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;