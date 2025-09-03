FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json yarn.lock ./
RUN yarn

# Copy all source
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the NestJS project
RUN yarn build

# Run Prisma seed
RUN npx prisma db seed

# Expose port
EXPOSE 3001

# Start the app
CMD ["yarn", "start:prod"]