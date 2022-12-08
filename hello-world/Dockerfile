FROM public.ecr.aws/lambda/nodejs:16

COPY package*.json app.ts tsconfig.json ./

RUN npm ci --only=production
RUN npx tsc

CMD ["app.lambdaHandler"]
