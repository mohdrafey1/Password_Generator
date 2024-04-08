# Password Generator

This is a simple password generator application built using React. It allows users to generate passwords with customizable length and character options.

## Technologies Used

This project was created using React and utilizes the following React Hooks:
- **useState**: Used to manage state variables for password length, numbersAllowed, charactersAllowed, and the generated password.
- **useRef**: Used to create a reference for the password input element.
- **useEffect**: Used to generate a new password whenever there's a change in length, numbersAllowed, charactersAllowed, or setPassword.
- **useCallback**: Used to create memoized functions for copying the password to the clipboard and generating the password.
- 
## Features

- Generate passwords with customizable length (from 8 to 40 characters).
- Choose whether to include numbers and special characters in generated passwords.
- Copy generated passwords to the clipboard with a single click.
