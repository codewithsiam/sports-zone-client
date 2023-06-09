import { useParams } from "react-router-dom";
import useSelectedClasses from "../../Hooks/useSelectedClasses";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import './CheckooutForm.css'

const CheckoutForm = ({ payClass, id }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const { user } = useContext(AuthContext);

    console.log('pay class', payClass)
    // class data 
    const price = parseFloat(payClass?.price);

    // fetch('http://localhost:5000/create-payment-intent', {
    useEffect(() => {
        if (price > 0) {
            axios.post('http://localhost:5000/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price])

    // pay button click function 
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.error('error', error);
            setCardError(error.message);
        }
        else {
            setCardError('')
            console.log('payment method', paymentMethod)
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous'
                    }
                }
            })

        if (confirmError) {
            console.log(confirmError)
        }

        setProcessing(false);

        if (paymentIntent?.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId)
            // send to mongodb 
            const payment = {
                classId: payClass?.classId,
                className: payClass?.name,
                classImage: payClass?.classImage,
                instructorName: payClass?.instructorName,
                instructorEmail: payClass?.instructorEmail,
                studentName: user?.displayName,
                studentEmail: user?.email,
                transactionId,
                price,
                date: new Date(),
            }

            axios.post('http://localhost:5000/payments', payment)
                .then(res => {
                    console.log("from step one",res.data);
                    if (res.data.postResult.insertedId) {
                        axios.delete(`http://localhost:5000/classes/selected?id=${id}&email=${user?.email}`)
                            .then(res => {
                                
                                if (res.data.deletedCount > 0) {
                                    Swal.fire(
                                        'Paid!',
                                        `Payment successfull!`,
                                        'success'
                                    )
                                }
                            })

                    }
                })

        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-success mt-4" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;