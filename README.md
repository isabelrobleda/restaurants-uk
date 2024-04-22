# 10 Restaurants in Leeds 
This project shows a web application for displaying a list of restaurants using Node.js, Express, and React.

## Prerequisits 
Make sure you have installed in your computer:
- Node.js (higher than v14)
- npm 

## Setup
Clone the repository in your device: 
- git clone https://github.com/isabelrobleda/restaurants-uk 
- cd restaurants-uk 

## Installation
To install the dependencies of this project, run the following commands:
- npm install
- Backend: node server.js (in one terminal) to start the server on your localhost:3000 to get the API and be able to fetch the data 
- npm run dev
- Frontend: open another terminal and run: "npm run dev" to run the application in your browser

## Features
- List of restaurants displayed with name, cuisines, rating, and address.
- Responsive design for various screen sizes.

## Assumptions 
When working with the project, the following assumptions were made: 
- Data: it was assumed that the data provided was consistent and that specific data such as "rating", it was expected for me to fetch the starRating of each restaurant
- I assume that users will have the versions of node and npm needed to setup the application
- This application does not provide security measures since it is not handeling personal data and it is only used as a challange.

## Improvements
- User Interface: I would improve the UI with more interactive elements like filters (for the cusine for example), that the user is able to search by the name of the restaurant or that they can sort by rating.
- Error handeling: I would expand the error handling to manage and get the reports of possible errors like network errors.
- Testing: I would also add a unit testing to make myself sure that the application maintains its functionality if changes happen so I can fix error quickly. 
- Security Measures: such as HTTPS and ensuring data validation to protect against possible attacks
- Documentation: Improving documentation to ensure that all functionalities are well explained and easy to understand for other developers.


<img src="../restaurants-uk/src/assets/screenshot.png" alt="screenshot-webapp"/>