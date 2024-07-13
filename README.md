# TypeScript Express Crypto Tracker
## Backend
A simple TypeScript Express application that fetches real-time cryptocurrency data in every 5 seconds and stores it in MongoDB.

### Prerequisites

- Node.js (version 18 or higher)
- MongoDB (installed locally or accessible via a cloud provider)
### Installation

#### 1. Install Dependencies

First, install the necessary npm packages:
```bash
npm install 
```
#### 2. Generate API Key 
Second, generate Your own Api key from https://www.livecoinwatch.com/tools/api#try and Replace in .env file with yourApiKeyHere

#### 3. Configure Mongo URL
 Replace yourMongoUrl in .env file with your local or cloud mongoDB url 
 #### 4. Run or build your Programme
 At last Run Your Programme using:
  ```npm run dev```
  or build you Programme using :
  ```npm run build```

### Testing the Application
You can test the API  using a browser, Postman, or any API client. For example:

To get all symbols list, visit: http://localhost:3000/symbols

To get top records for a particular cryptocurrency, visit: http://localhost:3000/records/{symbol}


##FrontEnd
 A simple React + TypeScript  application that Fetch the most recent 20 real-time data entries from the mongoDB database for a particular stock or crypto and display that in a table.

### Prerequisites
- Node.js (version 18 or higher)
### Installation

#### 1. Install Dependencies

First, install the necessary npm packages:
```bash
npm install 
```
 #### 4. Run or build your Programme
 At last Run Your Programme using:
  ```npm run start```
  or build you Programme using :
  ```npm run build```
