'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = function (event, context, callback) {
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            foo: "bar"
        }),
    };
    callback(null, response);
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
//# sourceMappingURL=handler.js.map