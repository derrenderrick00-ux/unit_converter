# Unit Converter

A multi-language unit conversion project featuring a browser-based application built with **HTML, CSS, and JavaScript**, alongside an experimental **Python command-line implementation**.

I started this project to strengthen my programming skills through practical implementation. My goal is to build different implementations of the same application while keeping them organized in one repository.

## Implementations

### 1. JavaScript — Primary Implementation

The main implementation is a browser-based unit converter.

**Supported categories:**

- **Length:** Metric and imperial length conversions.
- **Weight:** Grams, kilograms, tonnes, and pounds.
- **Temperature:** Celsius, Fahrenheit, and Kelvin.
- **Volume:** Litres, millilitres, and gallons.
- **Area:** Square metres, square feet, and square yards.
- **Speed:** Metres per second, kilometres per hour, and miles per hour.
- **Force:** Newtons, pounds-force, and kilogram-force.

**Features:**

- Separate JavaScript modules for conversion categories.
- Input validation.
- Error handling using `try...catch`.
- Dynamic result display.
- Conversion results formatted to four decimal places.
- JavaScript ES module imports and exports.

### 2. Python — Experimental Implementation

The Python implementation is an early-stage command-line version.

**Currently supported conversions:**

- Centimetres to metres.
- Metres to kilometres.
- Kilometres to metres.
- Kilometres to miles.

It currently uses terminal input and output.

**Development status:** Experimental. It does not yet support all conversion categories available in the JavaScript implementation.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Browser application structure |
| CSS3 | Browser application styling |
| JavaScript | Main conversion logic and browser interaction |
| Python | Experimental command-line implementation |
| Git | Version control |
| GitHub | Source code hosting |

## Getting Started

### Prerequisites

- Git.
- A modern web browser.
- Python 3 for the experimental Python implementation and optional local web server.

### Clone the repository

```bash
git clone https://github.com/derrenderrick00-ux/unit_converter.git
cd unit_converter
```

## Running the JavaScript Version

The browser implementation uses JavaScript ES modules, so it should be served through a local HTTP server.

From the project root, run:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## Running the Python Version

From the project root, execute:

```bash
python pythonVersion/unitconverter.py
```

Follow the terminal prompts to enter a value and select a conversion.

Note: The Python implementation is still under development and currently supports only a limited set of length conversions.

## Project Structure

```text
unit_converter/
│
├── index.html
│
├── css/
│   └── style.css
│
├── javascript/
│   ├── script.js
│   ├── length.js
│   ├── weight.js
│   ├── temperature.js
│   ├── volume.js
│   ├── area.js
│   ├── speed.js
│   └── force.js
│
├── pythonVersion/
│   └── unitconverter.py
│
├── assets/
│   └── uConverter.png
│
└── README.md
```

## How to Use

### JavaScript Version

1. Start the local development server.
2. Open the application in your browser.
3. Navigate to the desired measurement category.
4. Enter a value.
5. Select the conversion direction.
6. Click **Convert**.
7. View the result.

### Python Version

1. Run the Python script.
2. Enter the numerical value.
3. Enter one of the supported conversion types.
4. View the result in the terminal.

## Learning Objectives

This project has given me practical experience with:

- HTML document structure.
- CSS styling.
- JavaScript functions and switch statements.
- DOM selection and event handling.
- JavaScript ES modules.
- Input validation and error handling.
- Python input/output and conditional statements.
- Organizing multiple implementations in one repository.
- Git and GitHub version control.

## Planned Improvements

### JavaScript

- Improve navigation and responsive styling.
- Improve accessibility and keyboard interaction.
- Add automated conversion tests.
- Improve error messages and user feedback.

### Python

- Support decimal input.
- Improve input validation.
- Add more length conversions.
- Implement the remaining six measurement categories.
- Organize conversion logic into reusable functions.
- Add automated tests.

## Version

JavaScript implementation: **1.0.1 — pending release verification**

Python implementation: **Experimental — early development**

## Author

**Derrick Barasa**

GitHub: [@derrenderrick00-ux](https://github.com/derrenderrick00-ux)

---

I am developing this project as a practical way to strengthen my software engineering skills through building, testing, and improving real applications.