# bbisesti/graphqlServer

This project is used to aggregate data from multiple data sources into a single API for the purposes of integrating into Brett Bisesti's website.  This is an example of how GraphQL can be used to merge data from different data sources

## Required for project
nodeJS >= 9.11.1  
npm >= 5.6.0  

.env file containing the following variables  
log_level - level logging to log files  
log_file - directory and file name to write logs to (usually ./logs/file_name.log  
port - port to run application on  
env - environment to run application (usually dev)  
facebook_access_token - access token for Facebook Application to use  
github_token = personal token to GitHub account  

## To Install and run
1. Clone project to local machine  
2. cd into project directory and run "npm install"  
3. Run "npm start" to start up server  
4. Open web browser and go to "http://localhost:port/graphiql"  
