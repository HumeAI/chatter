import { AgentMessage } from '@/components/AgentMessage';
import { ErrorMessage } from '@/components/ErrorMessage';
import { SearchInProgress } from '@/components/SearchInProgress';
import { SearchSucceeded } from '@/components/SearchSucceeded';
import { UserMessage } from '@/components/UserMessage';
import { cn } from '@/utils';
import type {
  AssistantTranscriptMessage,
  JSONErrorMessage,
  ToolCall,
  ToolResponse,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { useVoice } from '@humeai/voice-react';
import type { ElementRef, FC } from 'react';
import { useEffect, useRef } from 'react';

export type MessagesProps = {
  messages: Array<
    | UserTranscriptMessage
    | AssistantTranscriptMessage
    | JSONErrorMessage
    | ToolCall
    | ToolResponse
  >;
  status: ReturnType<typeof useVoice>['status'];
  onReconnect: () => void;
};

export const Messages: FC<MessagesProps> = ({
  messages,
  status,
  onReconnect,
}) => {
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
        if (message.type === 'user_message' && message.message.content) {
          return (
            <UserMessage
              key={message.receivedAt?.getTime()}
              messageContent={message.message.content}
            />
          );
        }

        if (message.type === 'assistant_message' && message.message.content) {
          return (
            <AgentMessage
              key={message.receivedAt?.getTime()}
              messageContent={message.message.content}
            />
          );
        }

        if (message.type === 'error') {
          return (
            <ErrorMessage
              key={message.receivedAt?.getTime()}
              messageContent={message.message}
            />
          );
        }

        if (message.type === 'tool_call') {
          return (
            <SearchInProgress
              key={message.receivedAt?.getTime()}
              message={message}
            />
          );
        }

        if (message.type === 'tool_response') {
          return (
            <SearchSucceeded
              key={`tool-response-${message.toolCallId}`}
              message={message}
            />
          );
        }
      })}
      {status.value === 'error' && (
        <div>
          <button
            className="ml-auto flex gap-1 text-white opacity-50"
            onClick={onReconnect}
          >
            Reconnect
          </button>
        </div>
      )}
    </div>
  );
};
