import { Buffer } from 'buffer';

export async function fetchHubtelStatus(reference: string | null) {
  try {
    const authString = `${process.env.HUBTEL_CLIENT_ID}:${process.env.HUBTEL_API_KEY}`;
    const authHeader = `Basic ${Buffer.from(authString).toString('base64')}`;

    const response = await fetch(
      `https://rmsc.hubtel.com/v1/merchantaccount/merchants/${process.env.HUBTEL_MERCHANT_ACCOUNT}/transactions/status?clientReference=${reference}`,

      {
        headers: {
          'Authorization': authHeader,
          'Accept': 'application/json'
        }
      }
    );
    console.log(`${process.env.HUBTEL_STATUS_URL}/transactions/${process.env.HUBTEL_MERCHANT_ACCOUNT}/status?clientReference=${reference}`)
    

    if (!response.ok) {
      throw new Error(`Hubtel API responded with ${response.status}`);
    }

    const data = await response.json();
    return data.Data[0]?.TransactionStatus || 'unknown';
    
  } catch (error) {
    console.error('Hubtel status check failed:', error);
    return 'error';
  }
}