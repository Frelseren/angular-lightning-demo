# Helsinki Salesforce Developer Group
## React & Angular apps as Lightning Components

Run `npm install` to install dependencies.

Run `git checkout _branchname_` to navigate between alternative data communication options.

Run `ng build` to build the Angular project. Archive files in the `dist/` directory and upload them to Salesforce as a static resource.

In order to use Angular in lightning you need to have lightning app, apex class, static resource to store the Angular app, and either visualforce page or lightning component with the lightning container.

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

## Step 4: Lightning Container + Messages

Run `git checkout step/4`.

[Lightning Container Overview](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/container_overview.htm)

Lightning container has own interface for communication with the parent component via the message event.

Run either `npm install lightning-container` or `npm install` to install the required package.

_Note 1_: Depending on your org, you might face CORS issue with the iframe.

## Step 5: Lightning Container + Webservice

Run `git checkout step/5`.

## Step 6: Lightning Container + REST Api

Run `git checkout step/6`.

## Links 

[Native Angular components & directives for Lightning Design System](http://ng-lightning.github.io/ng-lightning/#/)
