Note:
- Open the deployed link of this web app https://lawlens-frontend.vercel.app/
- Sign up with your credentials
- For now, the user can only log in as an admin (so kindly select admin from the dropdown in the SignIn page)

# Law Lens

Law Lens is an Online Platform that minimizes the gap between Police and Citizens by allowing citizens to
- File a FIR online
- Tracking of your filed FIR
- Connecting with police officials in a single click by booking advance appointments
- During an emergency, find the nearest police station/policeman around you
- It allows citizens to provide feedback of a particular police station

## Frontend

![Screenshot 2024-01-11 142321](https://github.com/venom-2/RJPOLICE_HACK_383_AlgoPirates_1/assets/103876428/e1647839-0d06-4cc5-a15a-40f02371054a)

### Overview

![Screenshot 2023-12-30 200458](https://github.com/venom-2/RJPOLICE_HACK_383_AlgoPirates_1/assets/103876428/6dba94cd-77ec-4c3f-b0fd-be80b2ba8cd2)

The front end of Law Lens is built using modern web technologies to provide an intuitive and user-friendly interface. It offers document search, case management, and interactive tools to enhance user-friendliness and transparency.

### Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **React Router**: A routing library for React applications, enabling navigation between different components.
- **BootStrap**: A framework for styling responsive and consistent user interfaces.

![Screenshot 2023-12-30 200917](https://github.com/venom-2/RJPOLICE_HACK_383_AlgoPirates_1/assets/103876428/4ebdda9d-2cf9-4cd4-887c-47dbb6d0e35b)


### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/RJPOLICE_HACK_383_AlgoPirates_1.git
cd LawLens
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000` to view the Law Lens frontend.

### Features

- **Document Search**: Efficiently search and retrieve legal documents based on keywords and filters.
- **Case Management**: Organize and manage legal cases with detailed information and document attachments.
- **Interactive Tools**: Auto Chatbot and Bulk SMS Tool.

### Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/new-feature`.
3. Make your changes and test thoroughly.
4. Commit your changes: `git commit -m "Add new feature"`.
5. Push to the branch: `git push origin feature/new-feature`.
6. Submit a pull request to the main repository.

## Backend

![WhatsApp Image 2023-12-28 at 17 27 47_4aa42cbe](https://github.com/venom-2/RJPOLICE_HACK_383_AlgoPirates_1/assets/103876428/e7dabc86-7225-460f-b8c1-300f1c5897c9)

### Overview

The backend of Law Lens serves as the core engine handling data storage, retrieval, and business logic. It provides a RESTful API that the front end communicates with to perform document retrieval, case management, and user authentication operations.

### Technologies Used

- **Node.js**: A JavaScript runtime for building scalable server-side applications.
- **Express.js**: A web application framework for Node.js, simplifying the creation of robust APIs.
- **MongoDB**: A NoSQL database for storing and retrieving legal documents and case information.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: Used for secure authentication and authorization.

### Getting Started

1. Change directory:

```bash
cd Lawlens-Backend
```

2. Install dependencies:

```bash
npm install express
npm install mongoose
npm install -D nodemon
npm install bcrypt
npm install express-validator
npm install jsonwebtoken
```

3. Set up environment variables by creating a `.env` file:

```env
PORT=3001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the server:

```bash
npm start
```

5. The backend server will be running at `http://localhost:3001`.

### API Endpoints

- **POST /api/auth/login**:
  ```
  {
  "Email" : "user@gmail.com",
  "password" : "xxxxxxxx"
  }
  ```
- **GET /api/auth/createuser**:
  ```
  {
  "Username" : "Name of user",
  "Email" : "user@gmail.com",
  "password" : "xxxxxxxx",
  "Adhar Number" : "XXXX1131331",
  "mobile Number" : "73787786xxx"
  }
  ```


### Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/new-feature`.
3. Make your changes and test thoroughly.
4. Commit your changes: `git commit -m "Add new feature"`.
5. Push to the branch: `git push origin feature/new-feature`.
6. Submit a pull request to the main repository.

---
