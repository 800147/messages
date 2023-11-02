"use client";

import {
  ChangeEvent,
  FormEventHandler,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  messages_GET,
  messages_POST,
} from "@/app/api/messages/messages_client";
import { useRequest } from "@/helpers/hooks/useRequest";

const requestFunction = (text?: string) =>
  text === undefined ? messages_GET() : messages_POST(text);

export const Messages: FunctionComponent = () => {
  const [text, setText] = useState("");
  const onTextChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value),
    [setText]
  );

  const [request, messages, error, loading] = useRequest(requestFunction);

  useEffect(request, [request]);

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      request(text);
    },
    [request, text]
  );

  useEffect(() => setText(""), [messages, setText]);

  return (
    <>
      {messages?.map((message, i) => (
        <p key={i}>{message}</p>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>ERROR: {error.message}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={onTextChange}
          required
        />
        <button>Send</button>
      </form>
    </>
  );
};
