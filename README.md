# Text Analyzer
This comprehensive text analysis tool takes an input text file, skillfully computes word frequencies, and presents the user with insightful data. It not only displays the top 5 frequently co-occurring word pairs and the top 5 most frequently occurring individual words but also provides a powerful word search functionality, enabling users to filter and locate specific words within the text effortlessly.

## Key Features

- **Efficient Word Frequency Calculation**: Utilizes an efficient hashing algorithm to calculate word frequencies from the uploaded text, ensuring quick and accurate results.

- **File Size Limit Check**: Includes a file size limit check to ensure that text files larger than 5 MB are not uploaded, enhancing the user experience and preventing server overload.

- **Null Checks**: Implements robust null checks throughout the application to handle scenarios where no file is uploaded, resulting in a seamless and error-free user experience.

- **Search Functionality**: Offers a built-in search functionality that allows users to filter and find specific words within the displayed results, making it easy to locate relevant information.

## Usage

1. **Clone the Repository:**

   ```shell
   git clone https://github.com/yourusername/text-analyzer.git
   
2. Install Dependencies:
   Navigate to the project directory and install any necessary dependencies:

    ```shell
   npm install

3. Run the Text Analyzer:
   Start the text analyzer tool by running the following command:

   ```shell
   npm start
   
4. Navigate to the Client Directory:
   Open your terminal or command prompt and navigate to the client-side directory within your project:

   ```shell
   cd client
   
5. Install Client Dependencies:
   Inside the client directory, install the client-side dependencies:

   ```shell
   npm install
   
6. Start the Client Application:
   Start the client-side application using the following command:

   ```shell
   npm start
   
This will start the application, and you can access it in your web browser at http://localhost:3000.

7. Upload a Text File:

  Click the "Choose File" button to select a text file (.txt) for analysis.
  Click the "Upload" button to analyze the selected file.
  <img width="958" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/45cb8b18-160e-4066-b781-dcce2dbf8419">

  Alert is displayed if the file size exceeds the limit of 5MB.
  <img width="960" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/15cbc04c-bbed-450f-ab5b-608dd4bd488c">

  View Results:

The application will display the top 5 co-occurring words and the top 5 occurring words from the uploaded text. It will also display a word frequency table with a filter option to search words, in a separate tab.

Example
Here's an example of how to use the Text Analyzer:

Upload a text file containing text content.
The tool will process the file and display the results, including word frequencies and the top 5 co-occurring and occurring words.


Acknowledgments
This project uses React for the front-end interface.
It is built with Node.js for the back-end functionality.
Bootstrap and React-Bootstrap are used for the user interface components. Due to limited time, we have maintained a straightforward user interface.


