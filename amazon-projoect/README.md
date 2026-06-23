# Amazon Clone

A simple Amazon-inspired e-commerce website built using HTML, CSS, and JavaScript.

## Features

- Browse products
- Add products to cart
- Update product quantities
- Remove products from cart
- Checkout page
- Order summary page
- Delivery date selection
- Local storage support (cart data persists after page refresh)
- Responsive design

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Local Storage API
- Day.js (for date handling)
- Jasmine (for unit testing)

## Project Structure

```
amazon-clone/
│
├── data/
│   ├── cart.js
│   ├── products.js
│   ├── orders.js
│   └── deliveryOptions.js
│
├── scripts/
│   ├── amazon.js
│   ├── checkout/
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   └── utils/
│       └── money.js
│
├── tests/
│   └── data/
│       └── cartTest.js
│
├── styles/
│
├── images/
│
├── amazon.html
├── checkout.html
├── orders.html
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project folder:

```bash
cd amazon-clone
```

3. Open `amazon.html` in your browser.

## Running Tests

This project uses Jasmine for testing.

Run the test files through the Jasmine test runner and ensure all tests pass.

## Learning Goals

This project was created to practice:

- JavaScript Fundamentals
- DOM Manipulation
- ES6 Modules
- Object-Oriented Programming Concepts
- Testing with Jasmine
- Local Storage
- Responsive Web Design

## Future Improvements

- User Authentication
- Real Payment Integration
- Backend API
- Product Search
- Product Filtering
- Database Integration
- Order Tracking


## Author

Piyush

## License

This project is for educational purposes only and is not affiliated with Amazon.
