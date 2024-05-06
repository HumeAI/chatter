import { AgentMessage } from '@/components/AgentMessage';
import { ErrorMessage } from '@/components/ErrorMessage';
import { SearchInProgress } from '@/components/SearchInProgress';
import { UserMessage } from '@/components/UserMessage';
import { cn } from '@/utils';
import { JSONErrorMessage } from '@humeai/voice';
import {
  type AssistantTranscriptMessage,
  type UserTranscriptMessage,
} from '@humeai/voice-react';
import type { ElementRef, FC } from 'react';
import { Fragment, useEffect, useRef } from 'react';
import { match } from 'ts-pattern';

export type MessagesProps = {
  messages: Array<
    UserTranscriptMessage | AssistantTranscriptMessage | JSONErrorMessage
  >;
  hasPendingTools: boolean;
};

export const Messages: FC<MessagesProps> = ({ messages, hasPendingTools }) => {
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
  }, [messages]);

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
      className={cn(
        'ml-auto flex h-[90svh] w-screen flex-col overflow-y-auto px-20 py-12 md:px-24 lg:w-3/4 xl:w-2/3',
        'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-700',
      )}
      ref={messagesWrapper}
    >
      {messages.map((message) => {
        return (
          <Fragment key={message.receivedAt?.getTime()}>
            {match(message.type)
              .with('user_message', () => {
                let messageContent =
                  typeof message.message !== 'string'
                    ? message.message.content
                    : '';
                return <UserMessage messageContent={messageContent} />;
              })
              .with('assistant_message', () => {
                let messageContent =
                  typeof message.message !== 'string'
                    ? message.message.content
                    : '';
                return <AgentMessage messageContent={messageContent} />;
              })
              .with('error', () => {
                let messageContent =
                  typeof message.message === 'string'
                    ? message.message
                    : 'An unexpected error occurred.';
                return <ErrorMessage messageContent={messageContent} />;
              })
              .exhaustive()}
          </Fragment>
        );
      })}
      {hasPendingTools ? <SearchInProgress /> : null}
    </div>
  );
};
