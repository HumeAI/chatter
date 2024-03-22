import { AgentMessage } from '@/components/AgentMessage';
import { UserMessage } from '@/components/UserMessage';
import type {
  AgentTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import type { FC } from 'react';
import { Fragment } from 'react';

export type MessagesProps = {
  transcriptMessages: Array<UserTranscriptMessage | AgentTranscriptMessage>;
};

export const Messages: FC<MessagesProps> = ({ transcriptMessages }) => {
  return (
    <div className="my-8 flex flex-col gap-10 px-10">
      {transcriptMessages.map((message) => {
        return (
          <Fragment key={message.receivedAt.getTime()}>
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
