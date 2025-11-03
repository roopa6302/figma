# Project: Company & Account Dashboard UI  
A simple interactive dashboard using HTML, CSS & JavaScript where you can select a company, then an account, view a generated balance and recent transactions.

## Table of Contents  
- [Description](#description)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [How to Run Locally](#how-to-run-locally)  
- [How to Upload to GitHub](#how-to-upload-to-github)  
- [Screenshots / Preview](#screenshots-preview)  
- [License](#license)  

## Description  
This project is a front-end only application. The user picks a company (fetched from a placeholder API), then an account under that company, after which the app displays a random “Available Balance” and five recent transactions. It demonstrates fetching data, populating UI dropdowns, rendering tables, and using CSS for layout.

## Features  
- Fetches company list from a public API (placeholder).  
- Dynamically populates account dropdown based on selected company.  
- Generates and displays a random balance in Indian Rupees format.  
- Displays a table of recent transactions with date, credit, balance, UTR and UPI fields.  
- Responsive layout with a sidebar and main area using CSS.

## Technologies Used  
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Public placeholder API (for demo data)  

## How to Run Locally  
1. Clone or download the project folder to your local machine.  
2. In the project folder you should see files like:  
   - `index.html` (or your main html file)  
   - `style.css`  
   - `script.js`  
   - `Assets/` folder (for logos, icons)  
3. Open `index.html` in your browser (double-click or right-click → Open With).  
4. Ensure you have an internet connection (since the code fetches data from an online API).  
5. Choose a company in the first dropdown → then choose an account in the second dropdown → the balance and table will update.  
6. To modify: you can edit `script.js`, `style.css`, HTML markup, or extend functionality (e.g., more transactions, real data source).

## How to Upload to GitHub  
Here are the steps you can follow in your terminal/command prompt:

```bash
# Move into your project folder
cd /path/to/your/project

# Initialise git if you haven’t already
git init
git branch -M main

# Create .gitignore (optional but recommended) and ignore things like:
# node_modules/ build/ .env etc (if applicable)
echo "node_modules/" >> .gitignore
echo "build/" >> .gitignore

# Add all project files
git add .

# Commit your changes
git commit -m "Initial commit — add dashboard UI project"

# On GitHub: create a new repository. Get the repo URL, for example:
# https://github.com/YourUsername/YourRepoName.git

# Add the remote origin
git remote add origin https://github.com/YourUsername/YourRepoName.git

# Push your code to GitHub
git push -u origin main
