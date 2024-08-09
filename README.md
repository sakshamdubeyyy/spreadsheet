# Spreadsheet Application

## Overview

This project is a React-based spreadsheet application that mimics the functionality of a traditional spreadsheet with advanced features such as cell formatting, data validation, search and filter, pagination, and undo/redo functionality.

## Features

- **Grid Rendering:** Efficiently renders a grid of 1000 blank cells.
- **Cell Editing:** Editable cells with dynamic content updates.
- **Cell Formatting:** Basic formatting options including text alignment and font size adjustments.
- **Data Validation:** Basic data validation for numeric values and specific text formats.
- **Search and Filter:** Find specific data within the grid.
- **Pagination:** Handles large datasets efficiently with pagination or infinite scrolling.
- **Undo/Redo:** Revert changes with undo and redo functionality.

## Setup

### Prerequisites

- **Node.js** (Recommended version: 14.x or later)
- **npm** (Node package manager)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sakshamdubeyyy/spreadsheet

2. Install Dependencies

    npm install

3. Running the Project
    npm start
4. Running Tests
To run the tests for the application, use:
    npm test

This will execute all the test suites and provide results in the console.

Usage
Editing Cells
Click on any cell to start editing.
Enter the desired data and press Enter to save changes.
Cell Formatting
Use the formatting toolbar to align text (left, center, right) and adjust font size.
Data Validation
Some cells are restricted to numeric values or specific text formats. Entering invalid data will show an error.
Search and Filter
Use the search bar to locate specific data within the grid.
Pagination
Scroll or navigate through pages if the dataset exceeds the visible grid size.
Undo/Redo
Use the undo and redo buttons to revert or reapply changes made to cells.
