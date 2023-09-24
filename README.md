# Text Analyzer
This comprehensive text analysis tool takes an input text file, skillfully computes word frequencies, and presents the user with insightful data. It not only displays the top 5 frequently co-occurring word pairs and the top 5 most frequently occurring individual words but also provides a powerful word search functionality, enabling users to filter and locate specific words within the text effortlessly.

## Key Features

- **Efficient Word Frequency Calculation**: Utilizes an efficient hashing algorithm to calculate word frequencies from the uploaded text, ensuring quick and accurate results. The time complexity of hashing is typically O(1) for average-case operations, making it highly efficient for this task.

- **File Size Limit Check**: Includes a file size limit check to ensure that text files larger than 5 MB are not uploaded, enhancing the user experience and preventing server overload.

- **Null Checks**: Implements robust null checks throughout the application to handle scenarios where no file is uploaded, resulting in a seamless and error-free user experience.

- **Responsive Design**: The application is built using React Bootstrap, providing a responsive and mobile-friendly user interface, ensuring a consistent experience across different devices.

- **Search Functionality**: Offers a built-in search functionality that allows users to filter and find specific words within the displayed results, making it easy to locate relevant information.

- **Interactive Frequency Graph**: The tool has a frequency graph that shows word distribution in uploaded text. The `react-chartjs-2` library makes it easy to analyze and compare word frequencies, leading to a deeper understanding of the data.

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
  
  <img width="960" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/41675213-e409-43d1-866a-f7fd970695ae">
  
  <img width="959" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/35e7a5d5-7557-4eaa-b84e-c59743c5a38c">


  **When a file of size less than 5MB is uploaded, you can view the results.**
  
  **View Results:**
   
  <img width="960" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/59241d56-553e-4845-86e8-7745b525df99">

   **Search Functionality**
   
   <img width="960" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/20ed8529-5d04-40d7-887e-2286b3d50b4f">

   **Word Frequency Table with search functionality and words sorted in descending order according to their frequency**
   
   <img width="959" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/3d19e030-726e-473b-9d89-66bb596ea36a">
   
   <img width="959" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/8ca2febd-f57e-4967-bf96-adcc9319bac7">

   **Frequency Graph**


   <img width="713" alt="image" src="https://github.com/bhanukhetharpal/AdmitKard_Assignment/assets/79537130/b937d4c0-3b31-4b28-a993-26997363541d">

**Acknowledgments**

- This project uses React for the front-end interface.
- It is built with Node.js for the back-end functionality.
- Bootstrap and React-Bootstrap are used for the user interface components. 
- Due to limited time, a straightforward user interface is maintained.


