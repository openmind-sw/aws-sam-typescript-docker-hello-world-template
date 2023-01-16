"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const lambdaHandler = async (event) => {
    let body;
    let statusCode = 200;
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        switch (event.routeKey) {
            case 'DELETE /hello/{id}':
                body = `Deleted item ${event.pathParameters?.id}`;
                break;
            case 'GET /hello/{id}':
                body = `Got item ${event.pathParameters?.id}`;
                break;
            case 'GET /hello/':
                body = `Got items`;
                break;
            case 'PUT /hello/':
                body = `Put item ${event.body}`;
                break;
            default:
                throw new Error(`Unsupported route: "${event.routeKey}"`);
        }
    }
    catch (err) {
        statusCode = 400;
        body = err.message;
    }
    finally {
        body = JSON.stringify(body);
    }
    return {
        statusCode,
        body,
        headers,
    };
};
exports.lambdaHandler = lambdaHandler;
