import { fromZodError } from 'zod-validation-error';

import { VoiceAssistantTokenSchema } from '@/models/voice';

const apiKey = process.env.VOICE_API_KEY;
const secretKey = process.env.VOICE_CLIENT_SECRET;

const authString = `${apiKey}:${secretKey}`;
const encoded = Buffer.from(authString).toString('base64');

export const dynamic = 'force-dynamic';

export async function GET() {
  const tokenData = await fetch('https://test-api.hume.ai/oauth2-cc/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${encoded}`,
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }).toString(),
  })
    .then((res) => res.json())
    .then((data) => {
      const parsed = VoiceAssistantTokenSchema.safeParse(data);
      if (!parsed.success) {
        throw new Error(fromZodError(parsed.error).toString());
      }

      return parsed.data;
    });

  return Response.json(tokenData);
}
