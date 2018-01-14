# Helsinki Salesforce Developer Group
## React & Angular apps as Lightning Components

Run `git checkout _branchname_` to navigate between alternative data communication options.

Run `ng build` to build the Angular project. Archive files in the `dist/` directory and upload them to Salesforce as a static resource.

Find all required files in the `src/` directory. Copy file contents from `src/aura/`, `src/apex/`, `src/pages/` to Salesforce whenever needed.

When using Visualforce page, don't forget to check `Available for Lightning Experience, Lightning Communities, and the mobile app`;

## Step 1: Visualforce + Remote Actions

Run `git checkout step/1`.

In order to communicate with Apex via Visualforce and Remote Action you need to reference a controller in `apex:page`.

## Step 2: Visualforce + Webservice

Run `git checkout step/2`.

In order to communicate with Apex via Visualforce and Webservice you need to load `connection.js` and `apex.js` libraries and set the `sforce.connection.sessionId = {!$Api.Session_Id}`.

_Note_: Web services are synchronous.

## Step 3: Visualforce + REST Api

Run `git checkout step/3`.

In order to communicate with Apex via Visualforce and REST Api you need to pass a session Id to Angular, e.g. by assigning a global variable `var sessionId = {!$Api.Session_Id}`.

_Note 1_: There might be a CORS issue, then you'd have to allow the domain in `Salesforce > Settings > CORS > New`.

_Note 2_: Salesforce 302 redirect automatically changes request method from `POST` to `GET`. In these cases `@HttpPost` won't work. That's why in example there is only a `@HttpGet` method.

_Note 3_: You can have only one method of each type in the `@RestResource` controller.

