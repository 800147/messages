import { dbObject } from "./dbObject";

const MAX_MESSAGES_COUNT = 10;

// Promise is needed because we want to act like real DB
export const getMessages = () => Promise.resolve([...dbObject.messages]);

// Promise is needed because we want to act like real DB
export const addMessage = (message: string) => {
  dbObject.messages = [...dbObject.messages, message].slice(
    MAX_MESSAGES_COUNT * -1
  );

  return Promise.resolve();
};
