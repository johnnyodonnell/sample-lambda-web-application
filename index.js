
const handler = (event, context, callback) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    callback(null, "Hello World!");
};

exports.handler = handler;

