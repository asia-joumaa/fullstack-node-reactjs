# Sample Full Stack Exercise 

This repository contains starter code for a simple full-stack web application exercise. 

This sample web app consists of:
- A simple Express Backend that reads and writes from local JSON files (no database!)
- A simple React Frontend that communicates with the above backend.

## How to run:

### Running the Backend

```bash
cd service && npm install && npm run start
```
n.b. The backend is being watched by nodemon (i.e. this means **you only have to run start once** and it will automatically rebuild if you edit any of the javascript or json files.)

### Running the Frontend
```bash
cd client && npm install &&  npm run start
```
n.b. The frontend is also being watched by the react-script, any changes to any of its sources will also automatically rebuild the frontend so **you only have to run start once**.

### How things should look:
![image](https://github.com/idodin/Simple-Fullstack-Exercise/assets/22532262/88e5239a-3789-436f-b11e-0034822b7538)


## Exercise Instructions:

You can complete the tasks for this exercise in any order you see fit. Be sure to dig around the code a bit to understand how it is working before you begin.

- **Task A:** A backend path to delete a To-Do already exists and works well, but, the button doesn't work in the frontend. Implement the necessary logic so that the frontend can correctly call the backend delete route when the user presses delete and have the deletion immediately reflected in the UI.
- **Task B:** The frontend logic to create a new To-Do is implemented and works well, but, there is no corresponding route for creating a todo in the Backend. Implement the necessary backend route so that the backend can accept the existing call from the frontend and create a new To-Do and save it to the todos.json file. 
- **Bonus Task:** You might have noticed that there is no error reporting or input validation in our frontend or backend. If you have time, try your best to add error reporting / input validation to the application.
