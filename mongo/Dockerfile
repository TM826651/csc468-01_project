FROM mongo:latest


ENV MONGO_INITDB_ROOT_USERNAME=mongoadmin
ENV MONGO_INITDB_ROOT_PASSWORD=secret


WORKDIR /usr/src/app
COPY products.json /usr/src/app/data/

#COPY entrypoint.sh /docker-entrypoint-initdb.d/
COPY init.js /docker-entrypoint-initdb.d/

EXPOSE 27017
