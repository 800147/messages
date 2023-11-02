import {
  addMessage,
  getMessages,
} from "@/services/dbObject/dbObjectController";
import { res, toServerError } from "@/services/server/res";
import type { IMessagePostData } from "./messages_client";

export async function GET() {
  try {
    await new Promise((res) => setTimeout(res, 500));

    return res({
      data: await getMessages(),
    });
  } catch (error) {
    return res({ error: toServerError(error) });
  }
}

export async function POST(req: Request) {
  try {
    await new Promise((res) => setTimeout(res, 500));

    addMessage(((await req.json()) as IMessagePostData).text);

    return res({
      data: await getMessages(),
    });
  } catch (error) {
    return res({ error: toServerError(error) });
  }
}
