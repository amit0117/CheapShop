# CheapShop - An E-Commerce Platform
This eCommerse website built using MERN stack and Redux.<br>
Here are the Snapshot of home page of this application.<br><br>
For more details see **screenshot** folder above.<br>
#### Homepage screenshot
<img width="341" alt="homepagecheapshop" src="https://user-images.githubusercontent.com/123208927/214512172-7512fb3f-7ba7-4a2e-bf41-bbbed899e353.PNG">

## Features
* Full featured shopping cart
* Product reviews and ratings
* Top products carousel
* Product pagination
* Product search feature
* User profile with orders
* Admin product management
* Admin user management
* Admin Order details page
* Mark orders as delivered option
* Checkout process (shipping, payment method, etc)
* **PayPal / credit** card integration
* Database seeder (products & users)

## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

## ENV variables 
> Create a .env file in the root and add the following into this <br>

NODE_ENV=development<br>
PORT=5000<br>
MONGO_URI= your mongo uri<br>
JWT_SECRET=abc123<br>
PAYPAL_CLIENT_ID= your paypal client id<br>
CLOUDINARY_CLOUD_NAME=your cloudinary cloud name<br>
CLOUDINARY_KEY=cloudinary key <br>
CLOUDINARY_SECRET=cloudinary secret<br>

* Note:- I have used cloudinary for storing images url

## Install Dependencies (For frontend and backend)
npm install <br>
cd frontend <br>
npm install <br>

## Run
> Run frontend (:3000) & backend (:5000)<br>
  npm run dev

> Run backend only<br>
  npm run server<br>
  
## Build and Deploy
> Create frontend production build<br>
 cd frontend <br>
 npm run build<br>
 
## Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data<br>

> Import data
npm run data:import<br>

> Destroy data
npm run data:destroy<br>

### Sample user login
> admin@example.com (Admin)
Password ( I can't provide )<br>
> amit@gmail.com
password :amit



