# OrderNow Client

![alt text](src/assets/logo.png)


A modern web application for ordering food at restaurants through QR code scanning. Built with React, TypeScript, and Vite for optimal performance.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Development](#development)

## ✨ Features

- **QR Code Integration**: Scan restaurant QR codes to access the menu
- **Real-time Menu**: Browse dishes with live category filtering
- **Shopping Cart**: Add/remove items with quantity management
- **Order Management**: View and manage your orders
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Type-Safe**: Built with TypeScript for better code reliability

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Next-generation build tool
- **CSS3** - Styling and responsive design
- **Context API** - State management
- **pnpm** - Package manager

## 📋 Prerequisites

Before you start, make sure you have installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **pnpm** (v8 or higher) - Install with: `npm install -g pnpm`

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd OrderNow-Client
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   cp .env.example .env.local
   ```

## 🎯 Getting Started

### Development Server

Start the development server with hot module replacement:

```bash
pnpm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

### Linting

```bash
pnpm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── atoms/          # Basic components (CartBadge, etc.)
│   ├── molecules/      # Composite components (DishCard, etc.)
│   └── organisms/      # Complex components (Menu, Cart, etc.)
├── context/            # React Context for state management
├── hooks/              # Custom React hooks
├── interfaces/         # TypeScript interfaces & types
├── layouts/            # Layout components
├── services/           # API service integration
├── assets/             # Static assets
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## How It Works


### For Customers

1. **Scan QR Code**: Open the app and scan a QR code from a restaurant table
2. **View Menu**: Browse available dishes organized by categories
3. **Add to Cart**: Select items and customize your order
4. **Checkout**: Review your cart and place your order

### Requirements

- Your table must be marked as **OCCUPIED** by the restaurant staff
- You must be within the restaurant network or QR scan range
- An active internet connection is required

## 💻 Development

### Project Commands

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run preview` | Preview production build |
| `pnpm run lint` | Run ESLint |

### Key Services

- **categoryService**: Fetch restaurant categories
- **dishService**: Get dish information and details
- **orderService**: Handle order creation and management
- **baseApiService**: Base API communication layer

### Custom Hooks

- `useCategories()`: Fetch and manage categories
- `useDishes()`: Fetch and manage dishes
- `useOrder()`: Manage order state and operations
- `useQueryParams()`: Parse and manage URL query parameters

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

**CC BY-NC 4.0 (Creative Commons Atribución-NoComercial 4.0 Internacional)**

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. You are free to share and adapt this work under the following terms:

- **Attribution**: You must give appropriate credit and indicate if changes were made
- **Non-Commercial**: You may not use the material for commercial purposes
- **No Additional Restrictions**: You may not apply legal terms or technological measures that restrict others from doing anything the license permits

For more information, visit: https://creativecommons.org/licenses/by-nc/4.0/