import { AgentMessage } from '@/components/AgentMessage';

import { UserMessage } from '@/components/UserMessage';
import {
  AgentTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { FC, Fragment } from 'react';

export type MessagesProps = {
  transcriptMessages: Array<UserTranscriptMessage | AgentTranscriptMessage>;
};

export const Messages: FC<MessagesProps> = ({ transcriptMessages }) => {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto gap-8">
      {transcriptMessages.map((message, index) => {
        return (
          <Fragment key={index}>
            {message.type === 'user_message' ? (
              <UserMessage message={message} />
            ) : (
              <AgentMessage message={message} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
