import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplePayEventsEnum, CreatePaymentFlowOption, CreatePaymentSheetOption, GooglePayEventsEnum, PaymentFlowEventsEnum, PaymentSheetEventsEnum, Stripe } from '@capacitor-community/stripe';
import { lastValueFrom } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface StripeResponseType {
  paymentIntent: string;
  ephemeralKey: string;
  customer: string;
}

@Injectable({
  providedIn: 'root'
})

export class StripeService {

  constructor(private http: HttpClient) { 
    Stripe.initialize({
      publishableKey: environment.stripe.publishableKey,
    });
  }

  // async paymentSheet(data) {
  //   /*
  //   With PaymentSheet, you can make payments in a single flow. 
  //   As soon as the User presses the payment button, 
  //   the payment is completed. (If you want user have some flow after that, 
  //   please use paymentFlow method)
  //   */

  //   try {
  //     // be able to get event of PaymentSheet
  //     Stripe.addListener(PaymentSheetEventsEnum.Completed, () => {
  //       console.log('PaymentSheetEventsEnum.Completed');
  //     });

  //     // Connect to your backend endpoint, and get every key.
  //     const data$ = this.fetchData(data);

  //     const { paymentIntentClientSecret, customerEphemeralKeySecret, customerId } = await lastValueFrom(data$) as CreatePaymentSheetOption;
  //     // const { paymentIntent, ephemeralKey, customer } = await (data$).toPromise();

  //     // console.log('paymentIntent: ', paymentIntent);

  //     // prepare PaymentSheet with CreatePaymentSheetOption.
  //     await Stripe.createPaymentSheet({
  //       paymentIntentClientSecret,
  //       customerEphemeralKeySecret,
  //       customerId,
  //       merchantDisplayName: 'Food Delivery'
  //     });

  //     // present PaymentSheet and get result.
  //     const result = await Stripe.presentPaymentSheet();
  //     console.log('result: ', result);
  //     if (result && result.paymentResult === PaymentSheetEventsEnum.Completed) {

  //     }
  //   } catch(e) {
  //     console.log(e);
  //     throw(e);
  //   }
  // }

  // fetchData(data) {
  //   return this.http.post(environment.firebaseApiUrl + 'stripePaymentSheet', data).pipe(first());
  // }

  fetchData(data) {
    return this.http.post<StripeResponseType>(environment.firebaseApiUrl, data).pipe(first());
  };

  async paymentFlow(data) {
    /*
    With PaymentFlow, you can make payments in two steps flow. 
    When the user presses the submit button, 
    the system only gets the card information, 
    and puts it in a pending state. 
    After that, when the program executes the confirmation method, 
    the payment is executed. In most cases, 
    it is used in a flow that is interrupted by a final confirmation screen.
    */
    try {
      await Stripe.initialize({
        publishableKey: environment.stripe.publishableKey,
      });
      // be able to get event of PaymentFlow
      Stripe.addListener(PaymentFlowEventsEnum.Completed, () => {
        console.log('PaymentFlowEventsEnum.Completed');
      });

      // Connect to your backend endpoint, and get every key.
      // const data$ = this.fetchData(data);
      const data$ = this.fetchData(data);

      const { paymentIntent, ephemeralKey, customer } = await lastValueFrom(data$) as StripeResponseType;
      // const { paymentIntent, ephemeralKey, customer } = await (data$).toPromise();

      // Prepare PaymentFlow with CreatePaymentFlowOption.

      await Stripe.createPaymentFlow({
        paymentIntentClientSecret: paymentIntent,
        customerEphemeralKeySecret: ephemeralKey,
        customerId: customer,
        merchantDisplayName: 'Food Delivery',
        enableGooglePay: true
      });

      // Present PaymentFlow. **Not completed yet.**
      const presentResult = await Stripe.presentPaymentFlow();
      console.log('presentResult: ', presentResult); // { cardNumber: "●●●● ●●●● ●●●● ****" }

      // Confirm PaymentFlow. Completed.
      const confirmResult = await Stripe.confirmPaymentFlow();
      console.log('confirmResult: ', confirmResult);
      if (confirmResult.paymentResult === PaymentFlowEventsEnum.Completed) {
        // Happy path
        return paymentIntent;
      }
      return null;
    } catch(e) {
      throw(e);
    }
  }

  // async applePay(data) {
  //     // Check to be able to use Apple Pay on device
  //   const isAvailable = Stripe.isApplePayAvailable().catch(() => undefined);
  //   if (isAvailable === undefined) {
  //     // disable to use Google Pay
  //     return;
  //   }

  //   // be able to get event of Apple Pay
  //   Stripe.addListener(ApplePayEventsEnum.Completed, () => {
  //     console.log('ApplePayEventsEnum.Completed');
  //   });

  //   // Connect to your backend endpoint, and get paymentIntent.
  //   // const data$ = this.http.post<{
  //   //   paymentIntent: string;
  //   // }>(environment.firebaseApiUrl + 'stripePaymentSheet', {}).pipe(first());

  //   const data$ = this.fetchData(data);

  //   const { paymentIntent } = await lastValueFrom(data$) as any;
  //   // const { paymentIntent } = await (data$).toPromise();

  //   // Prepare Apple Pay
  //   await Stripe.createApplePay({
  //     paymentIntentClientSecret: paymentIntent,
  //     paymentSummaryItems: [{
  //       label: 'Food Delivery',
  //       amount: data?.amount * 100
  //     }],
  //     merchantIdentifier: 'fooddelivery',
  //     countryCode: 'BR',
  //     currency: data?.currency,
  //   });

  //   // Present Apple Pay
  //   const result = await Stripe.presentApplePay();
  //   if (result.paymentResult === ApplePayEventsEnum.Completed) {
  //     // Happy path
  //   }
  // }

  // async googlePay(data) {
  //   // Check to be able to use Google Pay on device
  //   const isAvailable = Stripe.isGooglePayAvailable().catch(() => undefined);
  //   if (isAvailable === undefined) {
  //     // disable to use Google Pay
  //     return;
  //   }

  //   Stripe.addListener(GooglePayEventsEnum.Completed, () => {
  //     console.log('GooglePayEventsEnum.Completed');
  //   });

  //   // const data = new HttpParams({
  //   //   fromObject: this.data
  //   // });

  //   // Connect to your backend endpoint, and get paymentIntent.
  //   // const data$= this.http.post<{
  //   //   paymentIntent: string;
  //   // }>(environment.firebaseApiUrl + 'stripePaymentSheet', {}).pipe(first());

  //   const data$ = this.fetchData(data);

  //   const { paymentIntent } = await lastValueFrom(data$) as any;
  //   // const { paymentIntent } = await (data$).toPromise();

  //   // Prepare Google Pay
  //   await Stripe.createGooglePay({
  //     paymentIntentClientSecret: paymentIntent,

  //     // Web only. Google Pay on Android App doesn't need
  //     paymentSummaryItems: [{
  //       label: 'Food Delivery',
  //       amount: data?.amount * 100
  //     }],
  //     merchantIdentifier: 'merchant.com.getcapacitor.stripe',
  //     countryCode: 'BR',
  //     currency: data.currency,
  //   });

  //   // Present Google Pay
  //   const result = await Stripe.presentGooglePay();
  //   if (result.paymentResult === GooglePayEventsEnum.Completed) {
  //     // Happy path
  //   }
  // }
}
