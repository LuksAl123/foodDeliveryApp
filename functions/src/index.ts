import * as functions from "firebase-functions";
import * as corsModule from 'cors';
import Stripe from 'stripe';
import { environment } from "src/environments/environment";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const cors = corsModule(({origin: true}));

export const stripePaymentSheet = functions.https.onRequest((request, response) => {
    cors(request, response, async() => {
        const data = request.body;

        console.log('data: ', data);

        const _stripe = new Stripe(
            environment.stripe.secretKey,
            {apiVersion: '2022-11-15'}
        );

        try {
            const params: Stripe.CustomerCreateParams = {
                email: data.email,
                name: data.name,
                // source: '',
                // address: {
                //     line1: 'ABC',
                //     postal_code: '',
                //     city: '',
                //     state: '',
                //     country: ''
                // }
                // description: 'test customer',
            };
            const customer: Stripe.Customer = await _stripe.customers.create(params);
            console.log(customer.id);
            const ephemeralKey = await _stripe.ephemeralKeys.create(
                {customer: customer.id},
                {apiVersion: '2020-08-27'}
            );
            const paymentIntent = await _stripe.paymentIntents.create({
                amount: data.amount,
                currency: data.currency,
                customer: customer.id,
                automatic_payment_methods: {
                    enabled: true,
                },
            });
            const result = {
                paymentIntent: paymentIntent.client_secret,
                ephemeralKey: ephemeralKey.secret,
                customer: customer.id,
            };
            response.send(result);
        } catch(e) {
            response.status(500).json(e);
        }
    });
});
