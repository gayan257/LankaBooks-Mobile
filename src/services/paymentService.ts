export type PaymentProvider = 'payhere' | 'stripe';

export const initiatePayment = async (
  provider: PaymentProvider,
  payload: Record<string, unknown>
) => {
  if (provider === 'payhere') {
    return {
      provider,
      status: 'pending',
      payload,
      message: 'PayHere integration is ready to be wired to your merchant credentials.',
    };
  }

  return {
    provider,
    status: 'pending',
    payload,
    message: 'Stripe integration is ready to be wired to your payment gateway configuration.',
  };
};
