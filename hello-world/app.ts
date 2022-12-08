export const lambdaHandler = async (event: unknown) => {
    try {
        console.log(`Test: ${JSON.stringify(event, null, 2)}`);
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Hello Huston',
            }),
        };
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
};
