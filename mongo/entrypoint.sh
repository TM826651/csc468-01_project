#!/bin/bash
sleep 10

mongod --auth &



# Run mongoimport command to import data into the inventory database
mongoimport --jsonArray --db=inventory --collection=items --file=/usr/src/app/data/products.json

# Continue with any other commands or script execution you may have
exec "$@"

