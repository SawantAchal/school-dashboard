# School Management Dashboard

This project is a School Management Dashboard built using Next.js, React, MySQL, and Tailwind CSS. The dashboard allows users to add and view school information. It includes responsive design for both desktop and mobile views.

## Features

- *Add School*: A form to add school details including name, address, city, state, contact, email, and image.
- *Show Schools*: A page to display a list of schools with their details.
- *Responsive Design*: Adapts to both mobile and desktop screens.
- *File Upload*: Upload and store school images.

## Technologies Used

- *Next.js*: A React framework for server-side rendering.
- *React*: A JavaScript library for building user interfaces.
- *MySQL*: A relational database management system.
- *Tailwind CSS*: A utility-first CSS framework.
- *Multer*: Middleware for handling file uploads.

## Installation

1. *Clone the Repository*
    bash
    git clone https://github.com/SawantAchal/internshala-school-project-with-next.git
    cd school-management-dashboard
    

2. *Install Dependencies*
    bash
    npm install
    

3. *Set Up MySQL Database*
    - Create a database named school_db.
    - Create a table named schools with the following schema:
        sql
        CREATE TABLE schools (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name TEXT,
            address TEXT,
            city TEXT,
            state TEXT,
            contact VARCHAR(15),
            image TEXT,
            email_id TEXT
        );
        

4. *Configure Environment Variables*
    - Create a .env.local file in the root directory and add your MySQL database credentials:
        
        DB_HOST=your_mysql_host
        DB_USER=your_mysql_user
        DB_PASSWORD=your_mysql_password
        DB_NAME=school_db
        

5. *Run the Development Server*
    bash
    npm run dev
    

6. *Access the Application*
    Open your browser and go to http://localhost:3000.
## Usage

### Adding a School

1. Navigate to the "Add School" tab.
2. Fill out the form with the school's information.
3. Upload an image of the school.
4. Click the "Add School" button. The form will be cleared upon successful submission.

### Viewing Schools

1. Navigate to the "Show Schools" tab.
2. View the list of schools with their details.

## Deployment

To deploy the project, follow the instructions on [Vercel](https://school-project-jet-ten.vercel.app/) or any other hosting platform of your choice.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
