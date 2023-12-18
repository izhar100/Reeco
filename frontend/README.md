
# Reeco Frontend Assignment

This project is an implementation of the given screen describing an order system where users can update the status of each product, approve orders, and optionally edit product details.

## Assignment Overview

The assignment aimed to create a React application with Redux that replicates the provided screen. Here are the main functionalities implemented:

- **Main Page**: Displays an order with product details and CTAs for updating statuses.
- **Product Status Updates**: Users can mark products as approved or missing/missing-urgent.
- **Edit Popup (Optional)**: Allows users to modify product price, quantity, and select a reason.

### Deployed link:[live](https://reeco-silk.vercel.app/).

## Project Structure

The project structure includes the following key directories and files:

- `/src`: Contains all the React components, Redux logic, and styles.
- `/public`: Holds static assets like images.
- `redux`: Contains Redux logic with actions, reducers, and store configuration.

## Getting Started

To run this project locally:

1. Clone this repository: `git clone https://github.com/izhar100/Reeco.git`.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

## Technologies Used

- React.js
- Redux
- Chakra UI
- Mock JSON data
- Vercel for deployment

## Additional Notes

- The project emphasizes functionality over text content.
- Optional 'Edit' functionality is implemented as an additional flow.
- Styling is focused on maintaining the provided design.
- Data is dynamically fetched from a mock JSON file, simulating a backend call.
