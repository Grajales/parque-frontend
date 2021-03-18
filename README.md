# Project Overview
This project provides an app webpage for a park located in Honduras, Central America. The app allows visitors to enter comments regarding the four theme activities available in the park. Each theme has its corresponding page, where the user can enter its comments and can read the comments provided by others. In addition, there is a Contact-us page where the user can submit its name, email address, and a question. Furthermore, there is a park location page with images of google maps and links to it. 
 
## Project Description

For this project, the backend is made with a partial CRUD (Create, Read) app using the Node.js and Postgres. The front end uses React tools 
The tables and data will be sequelize and the project will be deployed in Heroku.

## Project Links

- [https://aurora-park-backend.herokuapp.com/]()
- [https://parque-aurora-frontend.herokuapp.com/]()

## Definitions

Here is a list of the process and tools used



### Code Development Process
This project was developed by Bingcheng Ni and Liliana Grajales receiving leadership and support from the GA instructor Thiago Cavalcante. The team first developed the wireframes and discuss the data structure and data display. The team first developed the backend part of the project and mostly did code pairing. The team divided the frontend (REACT) part of the project working first on the data flow from App.js to the different Theme pages. During the developement ideas emerged on how to reorganize the components, dividing the data flow and display between ThemeDetail.js, Theme1-4.js, and Comment.js (see the Component Flow Diagram below). This component arrangement eased the CSS portion of the project, concentrating most of the css in the ThemeDetail.css file. Hence the ThemeDetail.css file directly controlled the css in all four Theme1-4.js pages. 



  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### Final Table Relations
Home Page Wireframe
- ![Home Page Wireframe](Images/wireFrame1.png) <br>
Theme page Wireframe
- ![Theme Page Wireframe](Images/wireFrame2.png)<br>
Components Flow Diragram
- ![Components Flow Diragram](Images/ComponentsFlowDiagram.png)<br>
Data Sample
- ![Data Sample](Images/dataSample.png)<br>
Components Folder
- ![Components Folder](Images/componentsFolder.png)<br>
Single Folder Example
- ![Single Folder Example](Images/IndividualComponent.png)<br>
Nodemon links (backend):
- [http://localhost:3000/]()
NPM start Links (frontend)
- [http://localhost:3001/]()<br>
Heruko Links:<br>
The following link id=1,2,3,4
- [https://parque-aurora-frontend.herokuapp.com/theme/1]()
- [https://parque-aurora-frontend.herokuapp.com/contact]()
- [https://parque-aurora-frontend.herokuapp.com/location]()


## References
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 
 -[https://github.com/marcwright/deere-project4-express-api-starter]()

## Code Snippet

The following code shows how I had to modify the reference "Trivia" to "Trivias" in the trivia.js file.

```
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trivias extends Model {

    static associate(models) {
      Trivias.belongsTo(models.User, { foreignKey: "userId" });
      Trivias.belongsToMany(models.Language, {
        through: "LanguageTrivia",
        foreignKey: "triviaId",
        otherKey: "languageId",
      });
    }
  };
  Trivias.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    wrong1: DataTypes.STRING,
    wrong2: DataTypes.STRING,
    wrong3: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Trivias',
  });
  return Trivias;
};
```

## Issues and Resolutions
 When creating the models, using "npx sequelize model:generate --name Trivia --attributes question:string,answer:string,wrong1:string,wrong2:string,wrong3:string", the action did not add an "s" to Trivia. So I manually added the "s" to align with the "Fruits" model, this created many problems, so the solution was to modify all "Trivia" references to be "Trivias" in the Trivia.js model file.

#### SAMPLE
**ERROR**: Trivia relation not found                                
**RESOLUTION**: See Issues and Resolutions

## Future additions
1. I would like to change the view of the index.ejs page so it organizes the questions in columns for each language.
2. I would like to add a redirect option in the show.ejs file in the list of available languages, when one clicks on a language, it directs the user to the same question in another language. 