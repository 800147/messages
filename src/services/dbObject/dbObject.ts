declare global {
  var dbObject: {
    messages: string[];
  };
}

if (!global.dbObject) {
  global.dbObject = { messages: ["first!"] };
}

export const dbObject = global.dbObject;
