# Use the official Nginx image as the base image
FROM nginx:latest

# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Copy the contents of the local src directory to the working directory
COPY . .

# Expose port 8080
EXPOSE 8080

# The default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
