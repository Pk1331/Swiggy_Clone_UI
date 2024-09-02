
# Fagito - Swiggy Clone

## Fagito Website & Dashboard
  - You can see Live Demo [Here](https://swiggy-clone-ui.vercel.app/)
    
  - You can add your new Restaurant [Here](https://swiggy-clone-dashboard-mu.vercel.app/)
## Website Image
![markuphero-mB6VafUCgeAeTpbZTeXs](https://github.com/user-attachments/assets/8b315395-f155-45bf-971c-da10eb4c228d)

## Table of Contents
- Project Overview
- Features
- Technologies Used
- Installation
- Usage
- API Endpoints
- Deployment

## Project Overview

Fagito is a Swiggy clone that allows users to explore various restaurants and food items, search for specific dishes, and view details about top restaurant chains in Machilipatnam. The project is built using React for the frontend, Express.js for the backend, and MongoDB for the database.

## Features
- __Navbar__: A navigation bar that includes a search bar and login/signup options.
- __Image Carousel__: A scrollable section showcasing featured images or categories.
- __Top Restaurant Chains__: A scrollable section that displays top restaurant chains in Machilipatnam.
- __Filterable Restaurant List__: Allows users to filter restaurants based on cuisine type like South Indian, North Indian, Chinese, and Bakery.
- __Restaurant Menu__: Displays the menu of a selected restaurant with product details and pricing.
  
## Technologies Used
  - __Frontend__:
       - React.js
       - HTML/CSS
  - __Backend__:
       - Node.js
       - Express.js
  - __Database__:
       - MongoDB
  _ __Deployment__:
       - Vercel (Frontend)
       - Render.com (Backend)
## Installation
  1. __Clone the repository__:
     
      ```
          https://github.com/Pk1331/Swiggy_Clone_UI.git
      ```
 2. __Install dependencies__:
     - For the frontend:
       
         ```
              npm i create-vite appname  react-router-dom react-icons react-loader-spinner
         ```
    - For the backend
        ```
            npm i express mongoose cors dotenv nodemon multer jsonwebtoken bodyparser bcrypt.js
        ```
  3. __Set up environment variables__: Create a .env file in the backend folder and add the following:
        ```
           DATABASE_URL=your_mongodb_connection_string
           PORT=5000(example)
        ```
## Usage

  - __Navigating the UI__: Use the navbar to search for dishes and view login/signup options. Scroll through featured images and top restaurant chains, or use the filters to find specific cuisines.
  - __Viewing Restaurant Menus__: Click on a restaurant to view its menu, including product details and pricing.
## API Endpoints
  - __GET `/vendor/all-vendors`__: Retrieves all vendors and their associated restaurants.
  - __GET `/product/:firmId/get-products`__: Retrieves all products for a specific restaurant.
## Deployment
  - __Frontend__: Hosted on Vercel at https://swiggy-clone-ui.vercel.app
  - __Backend__: Hosted on Render at https://swiggy-clone-backend-6pav.onrender.com

      
