# Weather Forecast App

This React application provides weather data for a specific location. It displays the current temperature, weather conditions, and a 3-day weather forecast. The application is built using modular and reusable components.

## Features

- Fetch weather data using the [http://tinyurl.com/bdeswm7x](http://tinyurl.com/bdeswm7x)
- Display current temperature, weather description, sunrise/sunset times, wind speed, and a weather icon.
- Provide a 3-day weather forecast with daily high/low temperatures, weather conditions, and more.
- Responsive design for different screen sizes.
- Graceful error handling with appropriate messages.

## Folder Structure

```
TEST-APP
├── src
│   ├── api
│   │   └── weatherApi.js     // API call to fetch weather data
│   ├── components
│   │   ├── LocationForm.js   // Form to input latitude and longitude
│   │   ├── WeatherCard.js    // Displays current weather and forecast
│   │   └── WeatherForecast.js // Displays 3-day forecast
│   ├── constants
│   │   └── weatherDescriptions.js // Weather code descriptions
│   ├── styles
│   │   ├── App.css
│   │   ├── LocationForm.css
│   │   ├── WeatherCard.css
│   │   └── WeatherForecast.css
│   ├── utils
│   │   ├── dateUtils.js      // Date formatting utilities
│   │   └── weatherIcons.js   // Utility for weather icons
│   ├── App.js                // Main app component
│   └── index.js              // App entry point
├── public
│   └── index.html
└── README.md                 // Documentation (this file)
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd TEST-APP
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

1. Enter the latitude and longitude of the desired location in the provided input fields.
2. Click "Get Weather" to fetch and display the weather data.
3. View the current weather conditions, including temperature, weather description, and sunrise/sunset times.
4. Check the 3-day weather forecast below the current weather section.

## Components

### 1. LocationForm

- **File:** `src/components/LocationForm.js`
- **Purpose:** Allows users to input latitude and longitude.
- **Props:**
  - `onSubmit`: Callback function to handle form submission.

### 2. WeatherCard

- **File:** `src/components/WeatherCard.js`
- **Purpose:** Displays current weather and forecast data.
- **Props:**
  - `weatherData`: Object containing weather data from the API.

### 3. WeatherForecast

- **File:** `src/components/WeatherForecast.js`
- **Purpose:** Displays a 3-day weather forecast.
- **Props:**
  - `daily`: Daily weather data from the API.

### 4. weatherDescriptions

- **File:** `src/constants/weatherDescriptions.js`
- **Purpose:** Contains mappings of weather codes to descriptive text.

## Utilities

- **dateUtils.js**: Provides date formatting functions.
- **weatherIcons.js**: Maps weather codes to emoji icons for visualization.

## API Integration

- **API URL can be found here:** http\://tinyurl.com/bdeswm7x
- The `weatherApi.js` file handles API calls using `axios`. The following parameters are used:
  - `latitude`
  - `longitude`
  - `current_weather`
  - `daily` (includes `weathercode`, `temperature_2m_max`, `temperature_2m_min`, `sunrise`, `sunset`)
  - `timezone`

## Error Handling

- If the API call fails, an error message is displayed to the user.
- Form input validation ensures that latitude and longitude are required before submission.

## Styling

- The app is styled using CSS for a clean and engaging UI.
- Responsive design ensures usability on various screen sizes.

## Deployment

To deploy the app, build the project using:

```bash
npm run build
```

Then, serve the `build` directory using a static server or deploy it to a platform like Netlify or Vercel.

## Author

Developed by Kavya Chirukuri.
