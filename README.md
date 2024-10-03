# E-Commerce Store

## Project Overview

This is an eCommerce store built with **React**.
The application allows users to browse products, search for specific items, view individual product details, add items to a cart, and complete a checkout process. It also includes a contact form with validation.

The project demonstrates skills in **React**, **Redux**, **React Router**, **Tailwind**, and **API integration**.

## Features

- **Homepage** with a list of products fetched from the API.
- **Product Search**: A look-ahead search bar that filters products by name.
- **Individual Product Page**: Displays product details, reviews, price, and an "Add to Cart" button.
- **Cart Management**: Add, update, or remove products in the cart with a real-time cart item count.
- **Checkout Page**: Displays all cart items with the total price and a checkout button.
- **Checkout Success Page**: Displays an order confirmation and clears the cart after successful checkout.
- **Contact Page**: Includes a form with validation for Full Name, Subject, Email, and Body fields.

## Tech Stack

- **React**: Frontend framework
- **Redux**: For managing cart state
- **React Router**: For page routing
- **Tailwind**: For component-specific styling
- **Fetch API**: To retrieve product data from the API

## Pages

1. **Homepage**:

   - Displays a grid of products fetched from the API.
   - Includes a search bar for filtering products by title.
   - Clicking on a product takes the user to the product's details page.

2. **Product Page**:

   - Displays a single product's information (title, description, image, price, reviews).
   - "Add to Cart" button allows adding the product to the shopping cart.
   - If there's a discount, the discount percentage is displayed.

3. **Cart Page**:

   - Lists all products added to the cart.
   - Allows quantity updates or removal of products.
   - Displays the total price and a "Checkout" button.

4. **Checkout Success Page**:

   - Confirms successful checkout.
   - Clears the cart and provides a link back to the homepage.

5. **Contact Page**:
   - A form with validation for the following fields:
     - Full Name (minimum 3 characters)
     - Subject (minimum 3 characters)
     - Email (must be a valid email format)
     - Body (minimum 3 characters)

## How to Run the Project

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone git@github.com:WeronikaMartinsen/eCom.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd eCom_react
   ```
3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the app**:

   ```bash
   npm run dev
   ```

5. **Build and deploy**:

   ```bash
   npm run build
   ```
