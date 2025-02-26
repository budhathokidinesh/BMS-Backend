# React Fullstack Books Management System(Back End)

Welcome to BackEnd of (MERN) React Fullstack Books Management System. This project showcases how the users, admins and books are managed in online library system using. Back End of this website uses nodejs, express.js and database is mongoDB. This BackEnd gives smooth APIs to communicate with Front End.

## Table of Contents

- [Introduction](#introduction)
- [Features](#Features)
- [Technologies Used](#Technologies-Used)
- [How to use](#How-to-use)
- [Project Structure](#project-Structure)
- [Contributing](#Contributing)
- [License](#License)
- [Contact](#contact)
- [Thank you Message](#Thank-you-Message)

## Introduction

This (MERN) Fullstack Books Management System shows the users and admins can easily borrow books from the library.
This helps users for authenticating the account and can login in the system and authorizing admins for CRUD operation .Users can create their account by submitting first name, last name, email, phone number and password. After signup, they can activate account from activation link that comes in valid email account. After that users and admins can log in by email and password. When they logged in, they will see own dashboard. Users and admin can borrow books available in store and should retrn in allocated time slut. After returning books, users can leave their review and thay can rate books depending on how much they like. However, admins can perform CRUD operation like add new books, update books, delete books as well as can control all user.

[Visit my Live Website](http://www.dineshbudhathoki.com)

## Features

- **User Roles**: Admin and Users
  - Admin: Full CRUD permisons on books and users, the ability to view all borrowing history. Also the ability to borrow as members.
  - Members: Members can borrow/return books, view their borrowing history, can give rating on books upon return.
- **Book Management**:

  - Admins can add, edit, delete and update books in the book store.
  - Both members and admins can view book details such as book title, author, ISBN, genre, availiability, average raring and reviews.

- **Borrowing system**:
  - Both members and admins can borrow availabe books.
  - Members will recieve due dates, and they can rate book upon return.
  - Admins can view the borrowing history of all members, while members can only view their own.
- **Review Features**:
  - Members can review and rate books after returning them.
  - Rating will be on a 1-5 star scale
  - Book rating will be averaged and displayed alongside book details
- **Reports and History**:
  - Admins can view reports and analytics, including book popularity and overall borrowing activity
  - History logs for each user's borrowing and rating activities.

## Technologies Used

### **Back End**:

- npm: It is Node Package Manager and is used to manage and install reusable code packages for JavaScript projects, specially Node.js.
- Express.js: It is a backend framework for creating web applications in Node.js.
- jsonwebtoken: It is an open standard for securely transmitting information between two parties as a compact, self-contained JSON object, typically used for authentication and authorization in web applications, where it carries user claims and is digitally signed to ensure data integrity.
- Java Script: Very popular programming language.
- Bycript: It is a widely used cryptographic hashing function specifically designed for securely storing passwords.
- CORS:It is Cross-Origin Resource Sharing," which is a security mechanism that allows a web browser to make requests to a server on a different domain (origin) than the one the browser is currently on.
- Morgan: It is a popular Node.js middleware specifically designed to log HTTP requests within a web application.
- Joi: It is a popular JavaScript library used for data validation.
- Nodemailer: It is a Node.js module that allows developers to easily send emails from their applications by providing a simple interface to interact with SMTP servers.
- UUID:(Universally Unique Identifier) It is a 128-bit number used to uniquely identify objects across different systems.
- Multer: It is a Node.js middleware specifically designed to handle multipart/form-data.

### **Back End**:

- MongoDB: It is an open-source, document-oriented NoSQL database management system that stores data in flexible JSON-like documents instead of traditional relational tables.

### **Deployment**:

- Cyclic

## How to use

To set of this project in your device locally, please follow the steps:

1. **Clone the repository**:
   Run the following command in your terminal

```
git clone https://github.com/budhathokidinesh/BMS-Backend.git
```

2. **Navigate to the project repository**:
   Run the following command in your terminal

```
cd BE_BMS
```

3. **Install the Dependencies**:

```
yarn add express mongoose jsonwebtoken bcryptjs cors morgan joi nodemailer, uuid multar
```

4. **Run the development server**:

```
yarn dev
```

Note: If you are not using `yarn`, you must install it globally. To install `yarn` globally, run the following command `npm i yarn -g`

## Project Structure

```
BE_BMS
|-- public
| |--imgs
|-- src
| |--config
| | |--dbConfig.js
| |--controllers
| | |--authController.js
| | |--booksController.js
| |--middlewares
| | |--validation
| | | |--authDataValidation.js
| | | |--bookDataValidation.js
| | | |--joiConst.js
| | | |--joiValidation.js
| | |--authMiddlewares.js
| | |--errorHandler.js.js
| | |--responseClient.js
| |--models
| | |--book
| | | |--bookModel.js
| | | |--bookSchema.js
| | |--session
| | | |--SessionModel.js
| | | |--SessionSchema.js
| | |--user
| | | |--UserModel.js
| | | |--UserSchema.js
| |--routes
| | |--authRoute.js
| | |--booksRoute.js
| | |--userRoute.js
| |--services
| | |--email
| | | |--emailService.js
| | | |--emailTempletes.js
| | | |--transport.js
| |--utils
| | |--bcrypt.js
| | |--jwt.js
| | |--multer.js
| | |--randomGenerator.js
```

## Contributing

There are many different ways to contribute. If you are interested, check out our contributing guidlines to learn how you an get involved.

## License

This project is licensed under the MIT License. See the [LICENSE] (https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) file for more details.

## Contact

If you have any questions or want to get in touch, feel free to reach out:

- Email: physmarika1@gmail.com
- Linkedin: https://github.com/budhathokidinesh

## Thank you Message

---

Thank you for visiting my BackEnd of (MERN) React Fullstack Books Management System. I hope you find it useful to build online books management systema with enhanced functionalities. Your feedback ad contributions are highly appreciated.
