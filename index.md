<img src="doc/Digits-HomePage.JPG">

## Installation

First, [install Meteor](https://www.meteor.com/install).

Second, go to [https://github.com/tliam1/digits/tree/cleanup](https://github.com/tliam1/digits/tree/cleanup), and click the "Use this template" button. Complete the dialog box to create a new repository that you own that is initialized with this template's files.

Third, go to your newly created repository, and click the "Clone or download" button to download your new GitHub repo to your local file system.  Using [GitHub Desktop](https://desktop.github.com/) is a great choice if you use MacOS or Windows.

Fourth, cd into the app/ directory of your local copy of the repo, and install third party libraries with:

```
$ meteor npm install
```

## Running the system

Once the libraries are installed, you can run the application by invoking the "start" script

```
$ meteor npm run start
```

The first time you run the app, it will create some default users and data. Here is the output:

```
 meteor npm run start 

> meteor-application-template-react@ start /Users/carletonmoore/GitHub/ICS314/meteor-application-template-react/app
> meteor --no-release-check --exclude-archs web.browser.legacy,web.cordova --settings ../config/settings.development.json

[[[[[ ~/GitHub/ICS314/meteor-application-template-react/app ]]]]]

=> Started proxy.
=> Started HMR server.                        
=> Started MongoDB.
I20231107-20:27:18.106(-6)? Creating the default user(s)
I20231107-20:27:18.119(-6)?   Creating user admin@foo.com.
I20231107-20:27:18.481(-6)?   Creating user john@foo.com.
I20231107-20:27:18.616(-6)? Creating default data.
I20231107-20:27:18.617(-6)?   Adding: Johnson (john@foo.com)
I20231107-20:27:18.639(-6)?   Adding: Casanova (john@foo.com)
I20231107-20:27:18.641(-6)?   Adding: Binsted (admin@foo.com)
=> Started your app.

=> App running at: http://localhost:3000/
```

Periodically, you might see `Error starting Mongo (2 tries left): Cannot run replSetReconfig because the node is currently updating its configuration` after the `=> Started HMR server.`. It doesn't seem to be a problem since the MongoDB does start.

### Viewing the running app

If all goes well, the template application will appear at [http://localhost:3000](http://localhost:3000).  You can login using the credentials in [settings.development.json](https://github.com/tliam1/digits/blob/main/config/settings.development.json), or else register a new account.

### ESLint

You can verify that the code obeys our coding standards by running ESLint over the code in the imports/ directory with:

```
meteor npm run lint
```

## Walkthrough

The following sections describe the major features of this template.

### Directory structure

The top-level directory structure is:

```
.github     # holds the GitHub Continuous Integration action and Issue template.
app/        # holds the Meteor application sources
config/     # holds configuration files, such as settings.development.json
doc/        # holds developer documentation, user guides, etc.
.gitignore  # don't commit IntelliJ project files, node_modules, and settings.production.json
```

This structure separates documentation files (such as screenshots) and configuration files (such as the settings files) from the actual Meteor application.

The app/ directory has this structure:

```
.deploy/
  .gitignore     # don't commit mup.js or settings.json
  mup.sample.js  # sample mup.js file used for deploying the application
  settings.sample.json # sample settings file
  
client/
  main.html      # The boilerplate HTML with a "root" div to be manipulated by React.
  main.js        # import startup files.

imports/
  api/           # Define collections
    contact/     # The Contacts collection definition
  startup/       # Define code to run when system starts up (client-only, server-only, both)
    client/
    server/
  ui/
    components/  # Contains page elements, some of which could appear on multiple pages.
    layouts/     # Contains top-level layout (<App> component).
    pages/       # Contains components for each page.

node_modules/    # managed by npm

public/          # static assets (like images) can go here.

server/
   main.js       # import the server-side js files.
   
tests/           # testcafe acceptance tests.
```

### Import conventions

This system adheres to the Meteor guideline of putting all application code in the imports/ directory, and using client/main.js and server/main.js to import the code appropriate for the client and server in an appropriate order.

### Application functionality

The application implements a simple CRUD application for managing "contacts", which is a Mongo Collection consisting of a first name, last name, address, image, description, and an owner (all strings).

#### Landing page

When you retrieve the app at http://localhost:3000, this is what should be displayed if you are signed in, otherwise, the only available option is to sign in:

![](https://github.com/tliam1/digits/blob/cleanup/doc/Digits-HomePage.JPG)

#### Login page

Clicking on the Login link, then on the Sign In menu leads you to a page prompting the user for an email and password, as well as a small submit button.

#### Register page

Alternatively, clicking on the Login link, then on the Sign-Up menu item displays a page identical to the login page, but instead will register your email and password into the database.

#### Add Contact page

After logging in, here is the page that allows you to add a new Contact:

![](https://github.com/tliam1/digits/blob/cleanup/doc/Add-Contact-Page.JPG)

#### List Contacts page

After logging in, here is the page that allows you to list all the contacts you have created:

![](https://github.com/tliam1/digits/blob/cleanup/doc/List-Contacts-Page.JPG)

You click the "Edit" link to go to the Edit Contacts page.

#### Edit Contact page

After clicking on the "Edit" link associated with an item, the displayed page is identical to the Add Contact page, but with each box filled in and can be edited.

#### Admin page (list all users contacts)

To provide a simple example of a "super power" for Admin users, the Admin page lists all of the Contacts by all of the users:

![](https://github.com/tliam1/digits/blob/cleanup/doc/Admin-List-Contacts.JPG)

Note that non-admin users cannot get to this page, even if they type in the URL by hand.
