FROM public.ecr.aws/lambda/nodejs:18 as BUILDER

COPY package*.json tsconfig.json ./

RUN npm ci && npm cache clean --force

# optimize docker layer caching
COPY src src/
RUN npx tsc

#==============
FROM public.ecr.aws/lambda/nodejs:18 as RUNNER

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

COPY package*.json ./

RUN npm ci && npm cache clean --force

# /var/task is the working directory for amazon linux 2 lambda containers
COPY --from=BUILDER /var/task/dist ./

CMD ["app.lambdaHandler"]