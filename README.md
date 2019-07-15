
# template-core

A template core for React project

## Folders tree

### "Root"
Contain the core of the project configuration files

### config
Contain the data for a more detailed project configuration

### public
Contain the public resources as favicon or pdf documents

### server
Contain the node server implementation to run on localhost

### src
#### "Root"
Contain the project root files
* index.hmtl
* index.js

#### api
Contain all functions to handle the api calls

#### components
Contain all the common React components of the project

#### containers
Contain the core of the app and the handlers of routes and authentication

#### generators
Contain all reusable code used to create other functions or classes

#### routes
Contain all the project async routes (only the "Home" component should be sync) and the relative store controllers

#### store
Contain all the store configuration and the global store controllers

#### style
Contain the common styles settings and the scss global variables

#### template
Contain the components to set the common routes layout

#### tools
Contain generic and reusable code to set variables or objects

#### utils
Contain specific and reusable code to set variables or objects

## Files organization
### Component
* [name]
	* index.js
	* [name].container.js
	* [name].style.js
	* [name].view.jsx


### Route
* [name]
	* index.js
	* component
		* index.js
		* [name].container.js
		* [name].style.js
		* [name].view.jsx
	* controllers
		* actions.js
		* reducers.js
		* sagas.js
	* modules
		* api.js
		* ...

### store
* store
	* index.js
	* actions
		* ...
	* reducers
		* ...
	* sagas
		* ...
