import { APIGatewayProxyEvent, Handler } from 'aws-lambda';

type ProxyHandler = Handler<APIGatewayProxyEvent>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const lambdaHandler: ProxyHandler = async (event: APIGatewayProxyEvent) => {
    console.log(JSON.stringify(event));

    let body;
    let statusCode = 200;
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        switch (`${event.httpMethod} ${event.resource}`) {
            case 'DELETE /{id}':
                body = `Deleted item ${event.pathParameters?.id}`;
                break;
            case 'GET /{id}':
                body = `Got item ${event.pathParameters?.id}`;
                break;
            case 'GET /':
                body = `Got items`;
                break;
            case 'POST /':
                body = `Put item ${event.body}`;
                break;
            default:
                throw new Error(`Unsupported route: ${event.httpMethod} ${event.resource}`);
        }
    } catch (err: any) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};
