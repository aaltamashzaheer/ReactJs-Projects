import React from 'react'
import "./faq.css"

export default function faq() {
  return (
    <div>
      
    <body>
        <h1>Frequently Asked Questions</h1>

  <div className="allfaq">
  <div class="faq">
    <h3 class="question">Q: How does the word counter app work?</h3>
    <p class="answer">A: The word counter app counts the number of words in a given text. Simply copy and paste your text into the input area and click the "Count" button to get the result.</p>
  </div>

  <div class="faq">
    <h3 class="question">Q: Can I count words in multiple languages?</h3>
    <p class="answer">A: Yes, the word counter app supports multiple languages. It can accurately count words in various languages and character sets.</p>
  </div>

  <div class="faq">
    <h3 class="question">Q: Is there a limit to the text length I can count?</h3>
    <p class="answer">A: The word counter app can handle texts of virtually any length. However, for very long texts, the counting process may take slightly longer.</p>
  </div>

  <div class="faq">
    <h3 class="question">Q: Can I use the word counter app on my mobile device?</h3>
    <p class="answer">A: Absolutely! The word counter app is fully responsive and can be used on any device with a web browser.</p>
  </div>

  <div class="faq">
    <h3 class="question">Q: Is the word counter app free?</h3>
    <p class="answer">A: Yes, the word counter app is completely free to use. There are no hidden fees or premium features.</p>
    </div>
    <footer>
          <p>&copy; 2023 Altamash's Text Analyzer App. All rights reserved.</p>
        </footer>
  </div>

</body>
    </div>
  )
}
