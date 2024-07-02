# Artifex

### Live Link

```
https://artifex-27893.web.app
```

## Introduction

Artifex is a website built to showcase and sell handcrafted creations, from intricate sculptures to unique crafts. This repository holds the source code for the Artifex site.

## Top Features

- Allow users to upload high-quality photos of their crafts and descriptions of their work to showcase their work in front of the world.
- View specifics about each crafts and sculptures, such as the category, material, and other infos.
- Users can securely log in using their email and password or through their Google or GitHub accounts, powered by Firebase authentication.
- New users can easily register by providing their name, email, photo, and password, enabling them to access all features of the website. Powered by Firebase authentication and user management.
- Logged-in users can conveniently update their uploaded craft information, ensuring craft's information is always up-to-date. Powered by Firebase user management.

## Used packages

- React-simple-typewriter to show typing effects on the texts in the home page.
- React Hook Form to handle forms with ease.
- Swiper Slider to show beautiful sliders with controls.
- React-tooltip to show user name in the navigation bar.

## Running Locally

### Prerequisites:

This project uses Vite for development and build processes. To clone and run the Compass project locally, follow these steps:

- Node.js (version 18 or above) installed on your system. You can check your version by running `node -v` in your terminal.
- Git version control installed.

### Steps:

1. Clone the Repository: Open your terminal and navigate to your desired directory. Then, clone the Compass repository using the following command.
    ```
    git clone https://github.com/ShawonECE/artifex-client.git
    ```
2. Install Dependencies: Navigate to the cloned project directory.
    ```
    cd compass-client
    ```
    Install all project dependencies using npm or yarn:
    ```
    npm install  # or yarn install
    ```
3. Set Up Firebase Configuration (Important): This project relies on Firebase for authentication features. To use Firebase functionalities, you'll need to configure it with your own project's credentials. Here's how: 
    - Create `.env.local`: In your project directory (where you cloned the repository), create a new file named `.env.local`.
    -  Define Firebase Configurations: Inside the `.env.local` file, define each Firebase configuration property with its corresponding value. Here's an example:
        ```
        VITE_API_KEY=your_api_key
        VITE_AUTH_DOMAIN=your_auth_domain
        VITE_PROJECT_ID=your_project_id
        VITE_STORAGE_BUCKET=your_storage_bucket
        VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
        VITE_APP_ID=your_app_id
        ```
    #### Important Note
    - Replace `your_api_key`, `your_auth_domain`, etc. with your actual Firebase project configuration values.
    - Never commit the `.env.local` file to your version control system (e.g., Git) as it contains sensitive information.

5. Development Server: With the `.env.local` file in place, you can start the development server as usual:
    ```
    npm run dev  # or yarn dev
    ```
