# Use Alpine Linux as the base image
FROM python:3.9-alpine

# Install required packages
RUN apk add --no-cache build-base libxml2-dev libxslt-dev

# Copy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy python script
COPY amazon.py .

# Run the script when the container starts
CMD ["python", "amazon.py"]
