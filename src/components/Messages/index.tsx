import { AgentMessage } from '@/components/AgentMessage';
import { UserMessage } from '@/components/UserMessage';
import {
  type AssistantTranscriptMessage,
  type UserTranscriptMessage,
} from '@humeai/voice-react';
import type { ElementRef, FC } from 'react';
import { Fragment, useEffect, useRef } from 'react';

export type MessagesProps = {
  transcriptMessages: Array<UserTranscriptMessage | AssistantTranscriptMessage>;
};

export const Messages: FC<MessagesProps> = ({ transcriptMessages }) => {
  const autoScroll = useRef(true);
  const messagesWrapper = useRef<ElementRef<'div'>>(null);

  useEffect(() => {
    if (autoScroll.current) {
      const el = messagesWrapper.current;
      el?.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [transcriptMessages]);

  useEffect(() => {
    const el = messagesWrapper.current;

    const handler = (event: WheelEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
        autoScroll.current = true;
      } else {
        autoScroll.current = false;
      }
    };

    el?.addEventListener('wheel', handler);

    return () => {
      el?.removeEventListener('wheel', handler);
    };
  }, []);

  return (
    <div
      className="flex size-full flex-col gap-10 overflow-y-auto px-10 py-[50px]"
      ref={messagesWrapper}
    >
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
