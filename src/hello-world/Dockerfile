FROM public.ecr.aws/lambda/nodejs:18

COPY package*.json src tsconfig.json ./

RUN npm ci
RUN npx tsc

CMD ["src/app.lambdaHandler"]
