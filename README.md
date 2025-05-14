# Basic CI/CD pipeline using GitHub Actions and Docker 
This is a simple Node.js web application created using Express.js. The primary goal of this project is to demonstrate how to build and containerize a Node.js application using Docker and automate its deployment using GitHub Actions. By leveraging these tools, the app becomes easy to deploy across different environments with consistency and scalability.

The application is structured with a Dockerfile for containerization and a GitHub Actions workflow defined under .github/workflows/docker-image.yml, which is triggered on every push to the main branch. This workflow automatically builds a Docker image of the application and pushes it to Docker Hub. For this to work, the necessary Docker credentials are stored securely as GitHub repository secrets.

The project uses Node.js and Express as the backend framework. Docker is used to package the application, making it portable and efficient to deploy. GitHub Actions serves as the CI/CD tool to automate the build and deployment pipeline, while Docker Hub acts as the container registry where the Docker image is stored.

In terms of CI/CD configuration, two secrets must be added to your GitHub repository: DOCKER_USERNAME and DOCKER_PASSWORD. These are used to authenticate with Docker Hub and push the image securely. Once configured, the workflow will handle the rest automatically.

This project is ideal for learning or demonstrating CI/CD workflows, containerization practices, and GitHub Actions integration in a real-world scenario.
