import { fromZodError } from 'zod-validation-error';

import { VoiceAssistantTokenSchema } from '@/models/voice';

export const getClientToken = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const parsed = VoiceAssistantTokenSchema.safeParse(data);

      if (!parsed.success) {
        throw new Error(fromZodError(parsed.error).toString());
      }

      return parsed.data;
    });
