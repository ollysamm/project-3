# Use an official lightweight Python runtime as the base image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file to the container
COPY requirements.txt ./

# Install the app's dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app's files to the container
COPY . .

# Start the app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]