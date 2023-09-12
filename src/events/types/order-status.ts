export enum OrderStatus {
    // When the order has be created, but the 
    // ticket it is trying to order has not been reserved.
    Created = 'created',
    // Thet ticket is trying to reserve has already 
    // been reserved, or when the user has cancelled the order;
    // The order expires before payment.
    Canceled = 'canceled',
    // The order has successfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',
    // The order has reserverd the ticket and the user has
    // provided payment successfully
    Complete = 'complete'
}
