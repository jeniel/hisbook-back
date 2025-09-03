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

# Expose port
EXPOSE 3001

# Seed DB & start app at runtime
CMD ["yarn", "start:prod"]
