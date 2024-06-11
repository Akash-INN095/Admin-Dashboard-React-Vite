# Admin Dashboard(React + Vite)

This project is a simple React dashboard application built with Vite. The dashboard includes a header, a sidebar, and a main content area that displays some charts and cards. It also features a dark mode toggle.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features

- Responsive design with a collapsible sidebar
- Dark mode toggle
- Interactive charts using `recharts`
- Modular and component-based architecture

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/Akash-INN095/Admin-Dashboard-React-Vite
cd react-vite-dashboard
npm install
```

## Development
To run the project in development mode, use the following command:
```bash
npm run dev
```
This will start the Vite development server and open the project in your default browser. Any changes you make to the code will automatically reload the page.

## Build
To build the project for production, use the following command:
```bash
npm run build
```
This will create an optimized production build in the 'dist' directory.

## Project Structure
The project structure is as follows:
```bash
react-vite-dashboard/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js

```
## Components
### App.jsx
The main component that sets up the layout of the application. It manages the state for the sidebar toggle and the dark mode toggle and passes these states down to the Header, Sidebar, and Home components.

### Header.jsx
The header component includes a menu icon to toggle the sidebar, a search bar, and icons for notifications and user profile. It also includes a switch to toggle between dark mode and light mode.

### Sidebar.jsx
The sidebar component contains links to different sections of the dashboard. It can be toggled open and closed using the menu icon in the header.

### Home.jsx
The home component is the main content area of the dashboard. It displays some cards with stats and a couple of charts using recharts. The background color and text color of this component change based on the dark mode state.

### Styling
The styling is managed using CSS. The main CSS file App.css includes styles for the layout and components. The main-container class in Home.jsx is conditionally styled based on the dark mode state.

### Dependencies
- react: The React library
- react-dom: Provides DOM-specific methods for React
- react-icons: Icon library for React
- react-switch: A switch component for React
- recharts: Charting library for React
- vite: A fast build tool for modern web projects

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
