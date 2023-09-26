import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"


const PUBLIC_KEY = "pk_test_51NuGw5KZCAOFj1bCpDtNhlUapJsGvWn62c4fD4NzMSm5N5GE2IOQqV5YvFcL0ZKTN0MJXgBniMRylh4MoTqEn4tQ00pUGjUaPy"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {

    return (
        <Elements stripe={stripeTestPromise}>

            <PaymentForm />

        </Elements>
    )
}