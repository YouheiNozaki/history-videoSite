import { createClient } from 'microcms-js-sdk';

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: 'example-ryusou',
  apiKey: process.env.NEXT_PUBLIC__X_API_KEY,
});
