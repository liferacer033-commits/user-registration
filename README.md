# User Registration with Validation

## Overview

This project implements user registration and login using Firebase Authentication along with comprehensive form validation on the frontend.

---

## Features

- *Registration*: Users can create an account with name, email, and password.
- *Validation*: Registration and login forms validate input (email format, password strength, required fields).
- *Authentication*: Uses Firebase Authentication (Email/Password).
- *Error Reporting*: Users receive friendly error messages for invalid input or authentication errors.

---

## Registration Process

1. User navigates to the registration page.
2. User enters:
   - Full Name (min 3 characters)
   - Email (must be valid)
   - Password (min 8 characters)
   - Confirm Password (must match)
3. Form validates all fields before submission.
4. If valid, registration uses Firebase Authentication to create the user.
5. On success, the user is redirected to the login page.

---

## Login Process

1. User fills in email and password on the login page.
2. Form validation checks for:
   - Valid email format
   - Password length (min 6 characters)
3. Valid credentials are sent to Firebase Authentication for verification.
4. On success, user is redirected to the protected portfolio page.

---

## Technologies Used

- *HTML/CSS* for responsive and styled forms.
- *JavaScript* for form validation and Firebase integration.
- *Firebase Authentication* for storing user credentials securely.

---

## File Structure

- index.html - Login form and Firebase setup.
- register.html - Registration form and Firebase setup.
- assets/js/script.js - All frontend validation and authentication logic.

---

## Prerequisites

- Firebase project with Email/Password sign-in enabled.
- Your Firebase config added in both index.html and register.html.

---
