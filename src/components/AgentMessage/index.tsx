import { AgentTranscriptMessage } from '@humeai/voice-react';

export const AgentMessage = (message: AgentTranscriptMessage) => {
  return <div className="bg-red-200 mr-auto">{message.message.content}</div>;
};
