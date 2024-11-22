
# Payables

This is a **Full-stack Project** developed as part of the [CHALLENGE.md](./CHALLENGE.md).

This README provides instructions on setting up and running the application to manually test its features.

## General Setup

- **Node.js**: 18.18.2
- **Yarn**: 1.22.22

## Backend

### Setting Up

Before starting, ensure you define the required environment variables using a `.env` file. Refer to `.env.example` for the necessary variables.

### Running the Backend

Run the backend locally with the following commands:
```bash
yarn
yarn start:dev
```

Alternatively, you can use Docker Compose:
```bash
chmod +x ./setup-dev
./setup-dev # ⚠️ Warning: This will remove ALL running and stopped containers.
docker compose up -d
```

Once started, the API will be available at `http://localhost:3000` by default. You can customize the port using the `PORT` variable in the `.env` file.

### API Documentation

Access the built-in API documentation at the `/api-docs` endpoint.

> ⚠️ Note: The batch service works only when using Docker Compose, as it requires RabbitMQ to function.

## Consumer

The Consumer is preconfigured to connect to RabbitMQ's default local URL, which is exposed via Docker Compose. To run the Consumer, use the following commands:
```bash
yarn
yarn start:dev
```

## Frontend

To start the frontend application, run:
```bash
yarn
yarn dev
```

## TODO

This project is still a work in progress and lacks features like Unit Tests, Resilience, and Infrastructure as Code. Below are specific tasks planned for each component:

### Backend

- Add a relation between `assignor` and `payable` in Prisma.
- Define a default queue in Prisma.
- Limit field lengths in Prisma.

### Consumer

- Review and remove unused code.

### Frontend

- Validate input data and display error messages to users.


### Monorepo

- Turn this repo into a functional monorepo.
## Additional Resources

I created a simple design to guide the development of the frontend interface. You can view it on [Figma](https://www.figma.com/design/A9mOZMYIBTNwB482RRcZSl/Aprove.me---Bank.me?node-id=0-1&node-type=canvas).