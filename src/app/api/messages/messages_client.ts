import { apiFetch } from "@/helpers/apiFetch";

export const messages_GET = () => apiFetch<string[]>("/api/messages");

export interface IMessagePostData {
  text: string;
}

export const messages_POST = (text: string) =>
  apiFetch<string[]>("/api/messages", {
    method: "POST",
    body: JSON.stringify({ text } as IMessagePostData),
  });
