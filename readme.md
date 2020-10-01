Chatbot application
    - Uses database, that contains some pre-defined set of questions and answers.
    - Uses fuzzy logic for unknown questions.
    - In case, if the query doesn't find any suitable solution, made by the client. A contact mail is returned.


# Requirements

1. Nodejs
2. Mongodb

# Configuration

1. Start the mongoDB service.
2. Create a "Chatbot" database.
3. Import the json file in data folder to "tags" collection.

# Installation

1. Migrate to project directory in terminal/ command prompt
    > npm install
2. In project directory, run the following command
    > node ./bin/www

# URLs

1. http://localhost:3000/ - Chat bot interactive UI
2. http://localhost:3000/api/chat - api call to query question
    Request method: GET
    Request format: {
        q: <Question>
    }
    Response format: {
        id: <ObjectId>,
        q: <Question>,
        a: <Answer>,
        tags: [<list_of_relative_words>]
    }
3. http://localhost:3000/spi/messages
    Request method: GET
    Request format: {
        id: <client_id>,
        messages: [<array_of_messages>]
    }
    Response format{
        id: < 0 in case of existing client else new client id> 
    }

# BACKEND CONFIGURATION
 
 Path: <PROJECT_PATH>/lib
 Description:
    - All backend configuration are in lib diretory.
    - Config file contains all the required uri path and constants.
    - Chat file stores all the logic required to process incoming request.
    - routes file has all the defination to route to specific file that contains the request processing methods.

# FRONTEND CONFIGURATION

A simple UI developed with jade.