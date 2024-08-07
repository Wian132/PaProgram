JavaScript Data Processing Application
Overview
This JavaScript application was developed in 2021 to assist my parents, who are accountants, in processing purchase notes for a Chicken Licken franchise. The application reads a .txt file containing purchase notes, interprets the data, and generates a .csv file. This output can then be imported into Pastel, significantly reducing manual data entry and streamlining their accounting processes.

Features
File Upload: Allows users to upload .txt files containing purchase notes.
Data Interpretation: Parses and interprets the text data, extracting relevant information.
CSV Generation: Converts the interpreted data into a .csv format compatible with Pastel.
Error Handling: Includes basic error handling to manage incorrect file formats and data inconsistencies.
Technologies Used
JavaScript: The core language used for developing the application.
HTML: For the user interface.
CSS: For styling the application.
XLSX.js: A library to handle the creation and manipulation of .csv files.
PDF.js: A library for reading PDF files if needed in future enhancements.
Usage
Prepare the .txt File: Ensure the purchase notes are saved in a .txt format with consistent structure.
Open the Application: Use a web browser to open the application HTML file.
Upload the File: Click on the file input button to upload the .txt file.
Preview Data: The application will display a preview of the interpreted data.
Generate CSV: Click the button to generate and download the .csv file.
Installation
To run this application locally, follow these steps:

Clone the Repository:
bash
Copy code
git clone https://github.com/yourusername/yourrepository.git
Navigate to the Project Directory:
bash
Copy code
cd yourrepository
Open the HTML File:
Open index.html in your preferred web browser.
