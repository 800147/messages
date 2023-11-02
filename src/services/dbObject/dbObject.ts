declare global {
  var dbObject: {
    messages: string[];
  };
}

if (!global.dbObject) {
  global.dbObject = {
    messages: [`First! Init time: ${new Date().toLocaleString()}`],
  };
}

export const dbObject = global.dbObject;
