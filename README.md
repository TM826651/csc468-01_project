# CSC468-01_Project

## Product Price Analysis App

### Project Discussion/Implementation Plan

Our team will achieve this product through a CI/CD pipeline to handle the web scraping, data cleansing and saving to a database, and the presentation of the data through an interactive UI. Containers using a combination of Linux and Python will be utilized for web scraping and cleaning, while a lightweight Linux distribution node will handle the database management; Another node will handle the web server for the UI. By using CI/CD pipeline, we can automate the deployment of containers building the web scraping to scale and increase speed by each container performing its own data cleansing.

Web Scraping will be performed at irregular intervals between 30 seconds and 120 seconds (2 minutes) in order to avoid ban risks. Containers may be utilized with IP masks in the case of constant bans.

The Amazon API can be utilized (up to a million requests for a free account) to do direct web scraping with minimal cleaning; if that does not suffice, then alternative web scraping will need to be utilized for that specific storefront.

Step-by-step analysis of design:


1. Webscraper detects price change or pull price at irregular intervals. This will be handled through either comparison or using Python sleep at randomized intervals to avoid bot detection by the host storefront.  
2. Change is pulled down to worker node. This will be performed using either a Python web scraping library or cURL requests.  
3. Data is parsed for price and time. Parsing will be done with a Python script to pull the price from the data, depending on the storefront.  
4. Worker node sends POST with cleaned information to MongoDB database server
5. MongoDB writes data to database.   
6. User opens web UI (webserver written in React)  
7. Webserver sends GET to database server to load pertinent data during query  
8. Data is loaded into UI with information for user. This frontend will provide all needed information with a visually pleasing UX, as well as a suggestion on the ideal time to purchase the product in question.  

Tech Stack:  
Frontend: Linux, React   
Backend: Linux, Python, Jenkins, Github  
Database Server: MongoDB (MongoDB Atlas)
