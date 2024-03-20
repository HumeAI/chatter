import { UserTranscriptMessage } from '@humeai/voice-react';

export const UserMessage = (message: UserTranscriptMessage) => {
  return <div className="bg-blue-200 ml-auto">{message.message.content}</div>;
};
