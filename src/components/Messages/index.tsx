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
    <div className="flex flex-col w-5xl gap-10 px-10">
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
