FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json yarn.lock ./
RUN yarn

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build NestJS app
RUN yarn build

EXPOSE 3001

# Run migrations, seed (optional), then start app
CMD sh -c "npx prisma migrate deploy && yarn start:prod"