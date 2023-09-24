# Text Analyzer
This comprehensive text analysis tool takes an input text file, skillfully computes word frequencies, and presents the user with insightful data. It not only displays the top 5 frequently co-occurring word pairs and the top 5 most frequently occurring individual words but also provides a powerful word search functionality, enabling users to filter and locate specific words within the text effortlessly.

## Key Features

- **Efficient Word Frequency Calculation**: Utilizes an efficient hashing algorithm to calculate word frequencies from the uploaded text, ensuring quick and accurate results. The time complexity of hashing is typically O(1) for average-case operations, making it highly efficient for this task.

- **File Size Limit Check**: Includes a file size limit check to ensure that text files larger than 5 MB are not uploaded, enhancing the user experience and preventing server overload.

- **Null Checks**: Implements robust null checks throughout the application to handle scenarios where no file is uploaded, resulting in a seamless and error-free user experience.

- **Responsive Design**: The application is built using React Bootstrap, providing a responsive and mobile-friendly user interface, ensuring a consistent experience across different devices.

- **Search Functionality**: Offers a built-in search functionality that allows users to filter and find specific words within the displayed results, making it easy to locate relevant information.

## Usage

1. **Clone the Repository:**

   ```shell
   https://github.com/bhanukhetharpal/AdmitKard_Assignment.git
   
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

  
Example
Here's an example of how to use the Text Analyzer:

Upload a text file containing text content.
After you upload a file, the tool will analyze it and present you with a range of results. These outcomes will comprise the frequency of each word in the text, together with the top 5 words that frequently occur in close proximity. Furthermore, there will be a separate tab that displays a table of all the word frequencies, which has a filter option to search for particular words.

  <img width="958" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/45cb8b18-160e-4066-b781-dcce2dbf8419">

  **Alert is displayed if the file size exceeds the limit of 5MB or if the file is empty.**
  
  <img width="960" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/15cbc04c-bbed-450f-ab5b-608dd4bd488c">
  
  <img width="960" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/650e50a3-12fd-4e54-9b10-8f71d2b46560">

  **When a file of size less than 5MB is uploaded, you can view the results.**
  
  **View Results:**
   
  <img width="960" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/1db40619-ff56-40ed-b604-826bb241ffa0">

   **Search Functionality**
   
   <img width="959" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/723cc215-c1e0-4f5e-86e8-24f2bda9ed83">

   **Word Frequency Table with search functionality and words sorted in descending order according to their frequency**
   
   <img width="955" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/3f009261-7644-43f1-9f12-13ec71029d88">
   
   <img width="945" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/e3f863ab-3028-4bec-8fa5-9e8f8d32f20e">




**Acknowledgments**

- This project uses React for the front-end interface.
- It is built with Node.js for the back-end functionality.
- Bootstrap and React-Bootstrap are used for the user interface components. 
- Due to limited time, a straightforward user interface is maintained.


