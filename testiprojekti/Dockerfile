# Esimerkkiprojektin Dockerfile
FROM python:3.11-slim
LABEL maintainer="panu"
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "-m", "src"]
