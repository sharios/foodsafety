# Kareem’s Kitchen

A visual food safety training PWA with eight lesson areas, three games, trainer-confirmed workplace practice, optional read-aloud, and device-local progress.

## Run locally

Install Node.js, then run from this folder:

```powershell
node server.cjs
```

Open http://127.0.0.1:4173 in your browser.

## Files

The app uses plain HTML, CSS and JavaScript. No package installation or build step is required. `sw.js` provides offline caching after a successful first visit. Progress is stored in the browser on the current device.

`kareem.jpg` is a personal photograph. Check repository visibility before uploading or sharing. Lesson illustrations currently use a generic adult worker.

This is a training and practice aid. Content and workplace procedures should be reviewed by Kareem’s trainer; the app does not provide official food-handler certification.

## Expanded question practice

Open Play > Question practice. Choose simple two-choice or three-choice test practice, then a topic or mixed round. Rounds have up to ten questions, immediate feedback, sound rewards, and device-local first-try progress. Questions answered incorrectly or not yet seen are prioritised in future rounds. No timer or official pass mark is used.

The 96 original questions are in question-bank.js; the full readable list and answers are in QUESTION_BANK.md. In-app Questions and sources also shows the bank and references. Trainer review is recommended. These are not official exam questions.

## Question illustrations

All 96 bank questions have a distinct scene in six 4-by-4 image sheets. Stable question-to-tile mappings are in illustrations.js. Use the Illustrations checkbox in Question practice, during a question, or in Questions and sources to switch to text-only mode. The preference is saved on this device, independently from speech and reward sounds. Toggling preserves the current question and scoring. Generated scenes are generic adult workplace illustrations, not photographs of Kareem. Text and thermometer values in the questions remain authoritative.

## Supplied mock test

35 adapted questions from Basic Food Safety Mock Test.docx are integrated under Your mock test and included in mixed practice. Its 13 embedded illustrations are preserved. Mock questions retain four choices in test practice. See MOCK_TEST_IMPORT.md for answer-key clarifications and the imported question list. The bank now has 131 questions.
