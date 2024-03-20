import { z } from 'zod';

export const VoiceAssistantTokenSchema = z.object({
  token_type: z.string(),
  access_token: z.string(),
  grant_type: z.string(),
  issued_at: z.number(),
  expires_in: z.number(),
});
