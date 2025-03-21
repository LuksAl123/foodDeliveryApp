// import * as functions from "firebase-functions";
// // import { info } from "firebase-functions/logger";
// import corsModule from 'cors';
// import Stripe from 'stripe';
// import { environment } from "../../src/environments/environment";

// const cors = corsModule(({origin: true}));

// export const stripePaymentSheet = functions.https.onRequest((request, response) => {

//     cors(request, response, async() => {
//         const data = request.body;

//         console.log('data: ', data);

//         const _stripe = new Stripe(
//             environment.stripe.secretKey,
//             {apiVersion: '2022-11-15'}
//         );

//         try {
//             const params: Stripe.CustomerCreateParams = {
//                 email: data.email,
//                 name: data.name,
//                 // source: '',
//                 // address: {
//                 //     line1: 'ABC',
//                 //     postal_code: '',
//                 //     city: '',
//                 //     state: '',
//                 //     country: ''
//                 // }
//                 // description: 'test customer',
//             };
//             const customer: Stripe.Customer = await _stripe.customers.create(params);
//             console.log(customer.id);
//             const ephemeralKey = await _stripe.ephemeralKeys.create(
//                 {customer: customer.id},
//                 {apiVersion: '2020-08-27'}
//             );
//             const paymentIntent = await _stripe.paymentIntents.create({
//                 amount: data.amount,
//                 currency: data.currency,
//                 customer: customer.id,
//                 automatic_payment_methods: {
//                     enabled: true,
//                 },
//             });

//             response.set("Access-Control-Allow-Origin", "*"); // Allow CORS
//             response.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//             response.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

//             const result = {
//                 paymentIntent: paymentIntent.client_secret,
//                 ephemeralKey: ephemeralKey.secret,
//                 customer: customer.id,
//             };
//             response.send(result);
//         } catch(e) {
//             response.status(500).json(e);
//         }
//     });
// });

import { onRequest } from "firebase-functions/v2/https";
import corsModule from "cors";
import Stripe from "stripe";
import { environment } from "../../src/environments/environment";

const cors = corsModule({ origin: true });

export const stripePaymentFlow = onRequest(async (request, response) => {
  return new Promise((resolve) => {
    cors(request, response, async () => {
      const data = request.body;
      console.log("data: ", data);

      const _stripe = new Stripe(environment.stripe.secretKey, {
        apiVersion: "2022-11-15",
      });

      try {
        const customer = await _stripe.customers.create({
          email: data.email,
          name: data.name,
        });

        const ephemeralKey = await _stripe.ephemeralKeys.create(
          { customer: customer.id },
          { apiVersion: "2020-08-27" }
        );

        const paymentIntent = await _stripe.paymentIntents.create({
          amount: data.amount,
          currency: data.currency,
          customer: customer.id,
          automatic_payment_methods: { enabled: true },
        });

        response.set("Access-Control-Allow-Origin", "*");
        response.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

        response.json({
          paymentIntent: paymentIntent.client_secret,
          ephemeralKey: ephemeralKey.secret,
          customer: customer.id,
        });

        resolve(); // Resolve Promise to signal function completion
      } catch (error) {
        console.error(error);
        response.status(500).json(error);
        resolve();
      }
    });
  });
});


