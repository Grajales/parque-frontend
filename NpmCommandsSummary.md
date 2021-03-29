# Back-End
PERN: Postgress Express (routes) React Nodemon
## Creating Express App
npm init -creates package.json file. Specify entry point to be server.js
npm install express- installs Express
touch server.js -creates server file so you can nodemon
npm install nodemon -g -optional, you probably installed this globally already
touch .gitignore -creates local gitignore file, off that bat add node_modules, .env
create models, views, controllers folders npm install ejs -installs EJS
npm install method-override --save -installs method override which you'll need for your forms for PUT & DELETE
## Installing + Running Sequelize
npm install sequelize-cli sequelize pg -installs Sequelize
npx sequelize init -instantiates Sequelize in your app. Creates config,models, migrations, seeders
npx sequelize model:generate --name NameOfYourModel --attributes column1Name:whatDataType,column2Name:whatDataType,etc. -generates model and migrations, don't forget to update defaultValue
npx sequelize db:migrate -runs migrations
npx sequelize seed:generate --name whatever-name-you-want -creates new, empty seed file
npx sequelize db:seed:all -runs all the seed files to populate data in your table(s)
## Sequelize workflow
If you've made changes to your DB and want to reset:
npx sequelize db:migrate:undo:all undos all migrations
npx sequelize db:migrate runs all migrations
npx sequelize db:seed:all seeds your DB from scratch
## Notes:
Remember when you run some type of npm install, you'll need to require the dependency at the top of your JS file (e.g. require('express) at top of server.js). Also, all these commands should all be run at the root level of your app directory. Be sure to set up your config.json file to be for your credentials and database name (the database can be created in pgAdmin, but create all your tables in the command line).
Repos with the above commands:
Express - https://git.generalassemb.ly/john-deere-sei-7/express-intro
EJS - https://git.generalassemb.ly/john-deere-sei-7/MVC
Delete/Update - https://git.generalassemb.ly/john-deere-sei-7/delete-express
Sequelize- https://git.generalassemb.ly/john-deere-sei-7/sequelize-intro

## Fork & clone
Postgress opened
$npm install
$touch .env
In .env PORT = 3000
JWT_SECRET=pancakes
Lets test it out:
$nodemon
$npx sequelize db:create (creates database)
$npx sequelize db:migrate
$npx sequelize db:seed:all
$nodemon

In the webpage this will take you to the json file
Modified the config file the database name
  
Then run the item below
 
Then you can see the server in pg admin
Then you will see in the migration file
  
Then run migrate
## Creating the tables
•	Install the NPM packages npm install
•	Make sure to update the config/config.json file with your database information
•	Setup the database clean and seed it with data: 
•	npx sequelize db:drop (removes server)
•	npx sequelize db:create (creates server)
•	npx sequelize db:migrate (creates table and it can be seen in pgadmin)
•	npx sequelize db:seed:all
•	Start the app nodemon

Seeder file:

module.exports = {
up: async (queryInterface, Sequelize) => {
let comments = await queryInterface.bulkInsert("Comments", [
{ id:0, feedback: "My kids love the playground, it is wide open and safe for them" , themeId:0},
{ id:1, feedback: "We used the picnic table near the pond, the grill had a missing wire " , themeId:0},
{ id:2, feedback: "The swimming pool is my favorite, I would like it if they add more sun chairs " , themeId:1},
{ id:3, feedback: "We go to the park mostly to hike towards the bell tower, it is good exercise" , themeId:2},
{ id:4, feedback: "I always feel sorry for the lyon, but I know he used to be a circus lion and it cannot go back to the wild " , themeId:3},
]);
{ id:0, feedback: "My kids love the playground, it is wide open and safe for them" , themeId:5, name: email address:},

# FRONT END
## Steps to create a react app
$ npm i -g npx (only needed to be done once for a specific laptop)
$ npx create-react-app blog-app (this replaces npm install)
$ cd blog-app
$ code .
$ npm run start
$ npm i axios (only if using axios)
$npm run start
 
## Every time the app is started need to run:
$ cd blog-app
$ npm install
$ npm i axios
$ code .
$npm run start

NOTE: ALL The npm installation needs to be done at the folder “app” that contains the package.json file

## If react version has changed:
npm uninstall -g create-react-app
npx create-react-app@latest the-name-of-your-app --use-npm


## Router:
npm install react-router react-router-dom

// index.js
import { BrowserRouter as Router } from "react-router-dom";

//...

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);


// src/components/App/App.js

import { Route, Link } from "react-router-dom";

// src/components/App/App.js

render() {
  return (
    <div>
      <nav>
      // the link component produces an a element
        <Link to=""></Link>
        <Link to=""></Link>
      </nav>
     
      <main>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/currencies" component={Currencies} />
    <Route path="/price/:currency" render={(routerProps) => <Price setPrice={this.setPrice} {...routerProps} {...this.state} /> }
          />
	<Route path="/currency" render={() => <Redirect to="/currencies" />} />

        </Switch>
      </main>
    </div>
  )
}

How to display an image:
        <Link to="/">
          <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt=""/>
          <h1>Bitcoin prices</h1>
        </Link>

In CountryList the name of the variables inside 
this.props.countries.map(country,index) can be named anything, and then those variables will be the ones referenced inside CountryList. Like
list.push(<Country name={country.name} key={index}
The .name relates to key name in the data file It is good to have key={index} in react


For the park lab
https://github.com/Grajales/react-router-d1-d2/tree/master/src
See App.js and Show.js 

https://github.com/Grajales/react-router-d1-d2/blob/master/src/App.js

$ npm install react-router react-router-dom
$ npm i axios (only if using axios)

It is good to have key={index} in react

There was an issue when refreshing code below using maps
 It was solved below
We uncommented 29-31 below to clean the state, it is not cleaning the state

The goal is to create the comment in the database.
