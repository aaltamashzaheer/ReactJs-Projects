import React from "react";
import "./About.css"
export default function About(props) {

  return (
    <>
      <body >
        <h1>About Text Analyzer App</h1>
        <p>
          Welcome to Text Analyzer App, a powerful tool designed to analyze and
          manipulate text in various ways. Whether you need to count words,
          convert text to uppercase or lowercase, or perform other text-related
          operations, our app has got you covered.
        </p>

        <h2 className="heading">Features</h2>
        <ol className="features">
          <li>Word Count: Get the total number of words in your text.</li>
          <li>
            Character Count: Calculate the total number of characters in your
            text.
          </li>
          <li>Remove Extra Spaces: Remove all extra spaces from text</li>
          <li>Clear Panel: Clear all text from panel.</li>
          <li>Copy to Clipboard: Copy all text to clipboard.</li>
          <li>Uppercase Conversion: Convert all text to uppercase.</li>
          <li>Lowercase Conversion: Convert all text to lowercase.</li>
        </ol>

        <h2>How to Use</h2>
        <ol>
          <li>Enter or paste your text into the input field.</li>
          <li>Select the desired operation from the available options.</li>
          <li>Click respective button to perform the chosen operation.</li>
          <li>View the results and explore additional functionalities.</li>
        </ol>

        <h2>Contact Us</h2>
        <p>
          If you have any questions, suggestions, or feedback, please don't
          hesitate to reach out to us. We value your input and strive to
          continuously improve our app to meet your needs.
        </p>
        <p>Email: aaltamashzaheer@gmail.com</p>
        <p>Phone: +92 3174138764</p>

        <footer>
          <p>&copy; 2023 Altamash's Text Analyzer App. All rights reserved.</p>
        </footer>
      </body>
    </>
  );
}
