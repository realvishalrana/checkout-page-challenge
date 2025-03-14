# Checkout Page with React.js & Tailwind CSS 

## Project Description


- **Product List:** Displays the items in the checkout. Each product shows details like name, price, type, category, and an image.
- **Order Summary:** Provides a calculation of the total price and applicable discounts.
- **Apply Coupon Section:** Features a textbox for entering a coupon code with an "Apply" button.
- **Filter:** Filter based on the type and category .

### Sample Product Data

```js
const products = [
  {
    "id": 1,
    "name": "iPhone 15",
    "category": "Electronics",
    "price": 999,
    "type": "high",
    "maxQuantity": 25,
    "image": "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop"
  },
  {
    "id": 2,
    "name": "Galaxy S23",
    "category": "Electronics",
    "price": 899,
    "type": "medium",
    "maxQuantity": 40,
    "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop"
  }
];

```


### Project Structure

```
├── src
│   ├── components
│   │   ├── ProductList.jsx
│   │   ├── OrderSummary.jsx
│   │   ├── PaymentMethodSelection.jsx
│   │   ├── ShippingDetailsForm.jsx
│   │   ├── ApplyCouponSection.jsx
│   │   └── PlaceOrderButton.jsx
│   ├── hooks
│   │   └── useProductList.js
│   ├── types
│   │   └── index.d.ts
│   ├── App.jsx
│   └── index.jsx
├── public
│   └── index.html
├── tailwind.config.js
├── package.json
└── README.md

```

### Technologies Used
* React.js: For building the user interface.
* Tailwind CSS: For styling and responsive design.
* JSON Server: For simulating a backend API during development.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---




## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Run the JSON Server

```bash
npm run json-server
```


Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```
