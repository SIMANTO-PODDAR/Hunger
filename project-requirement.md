# TypeScript Project Requirements

Build a complete, production-ready Full Stack application using TypeScript.

The goal is to build a polished application with clean architecture, reusable components and excellent user experience.

## 1. Technology Stack

### Frontend Stack

* React.js / Next.js
* TypeScript (mandatory)
* Tailwind CSS
* Recharts

### Backend Stack

* Next.js API Routes (server)
* TypeScript (mandatory)
* Firebase

## 2. Global UI & Design Rules

* Use a maximum of 3 primary colors (+ optional neutral color).
* Maintain consistent layout, spacing, and alignment throughout the project.
* All cards and components must have the same size, border radius, and visual style.
* Fully responsive for mobile, tablet, and desktop.

## 3. Home / Landing Page

### Navbar

* Full-width background.
* Minimum 3 routes (logged out).
* Minimum 5 routes (logged in).
* Sticky or fixed position.
* Fully responsive.

### Hero Section

* Height limited to 60–70% of the screen (with Bottom Statistics 90%).
* Interactive elements (CTA).
* Clear visual flow to the next section.

### Minimum 7 meaningful sections (with nav & hero)

* 1 FAQ
* 2 Navbar
* 3 Analytics
* 4 Our Outlets
* 5 Privacy Policy
* 6 Why Choos eHunger
* 7 Hero + Bottom Statistics

### Footer

* Fully functional footer.
* Working links only.
* Contact information and social links included.

## 4. Core Listing / Card Section

Each card must include:

* Image
* Title(name)
* Description
* Meta info (price, rating etc.)
* “View Details” button

Card Rules:

* Same height and width
* Same border radius and layout
* Desktop view: 4 cards per row
* Skeleton loader while data is loading

## 5. Details Page

* Publicly accessible
* Multiple images or media

Separate sections:

* Description / Overview
* Key information / Specifications
* Reviews / Ratings
* Related items

## 6. Listing / Explore Page

* Search bar
* Filtering must be implemented using at least 2 fields (e.g., category, price)
* Sorting options
* Pagination or infinite scroll
* Fully functional filtering

## 7. Authentication System

* Login and Registration pages
* Proper validation and error handling
* Demo login button (auto-fill credentials)
* Clean and professional UI

## 8. Protected Page: Add Items

* Only accessible when logged in; redirect others to /login

Form fields:

* Title
* Description
* Price
* Relevant fields
* Optional image URL
* Buttons: Submit (add)

## 9. Protected Page: Manage Items

* List all products in a table/grid
* Each row/card with actions: View, Delete
* The layout should be clean, readable, and responsive

## 10. Additional Pages

At least 2 additional pages, such as:

* About
* Contact

## 11. UX & Responsiveness

* No lorem ipsum or placeholder content
* Fully responsive across all devices
* Proper spacing and alignment
* All buttons and links must be clickable
