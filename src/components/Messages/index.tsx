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
    <div className="w-5xl flex flex-col gap-10 px-10">
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
