# PICHINCHA NODE JS

### STEPS FOR RUN THE PROJECT
Ensure that your are using the correct node version

```bash
nvm use 16.15.1
```

Install packages

```bash
npm install
```
Set ``env`` vars locally. ***This step is very important for run the server***

```bash
. ./src/utils/environment.sh
```

Run server

```bash
npm run start-dev
```
____
### ENDPOINTS
**1- Mock Service**
- Method: <span style="color:green"><b>GET</b></span>.
- Params: None
```
/mockservice
```

**2- Organizations**
- ***Get All Organizations***
- Method: <span style="color:green"><b>GET</b></span>.
- Params: None
```
/organizations
```
- ***Get One Organization***
- Method: <span style="color:green"><b>GET</b></span>.
- Params: ID of the organization
```
/organizations/ID
```
- ***Post Organizations***
- Method: <span style="color:orange"><b>POST</b></span>.
- Params: In the body must send *name* and *state* for the new organization
```
/organizations
```
- ***Put One Organization***
- Method: <span style="color:blue"><b>PUT</b></span>.
- Params: In the body must set *name* and *state* for the organization
```
/organizations
```
- ***Delete One Organization***
- Method: <span style="color:red"><b>DELETE</b></span>.
- Params: ID of the organization

```
/organizations
```
**3- Get Repositories Metrics by Tribu ID**
- ***Get All Organizations***
- Method: <span style="color:green"><b>GET</b></span>.
- Params: ***ID*** of the Tribe, ***date*** of repository creation, ***state*** of the repository and ***coverage*** metric
```
/metrics/ID?date=&state=&coverage=
```
**NOTE:** The params date, status and coverage are optional, if you don't send it into the URL, we'll filter with default data. Example:`(date>='2022-01-01', state = 'E', coverage >= '0.75')`. If you want, you can consume the following additional endpoint, in order to get the existing tribes:
```
/tribes
```

**3.1- Download CSV report with Metrics by Tribu ID**
Using the same endpoint above for get the metrics, we can download the report, just adding one param called ``report`` with value ``true``

```
/metrics/ID?report=true
```
____
### DATABASE INFORMATION
As requested in the exercise, the cocroachlabs page was used for the database. The main info for connection was placed into the ``environment.sh`` file in the next route `/src/utils`. 
___
### TECH TABLE

| Technology | Versión |
| ---------- | ------- |
| Node js    | 16.15.1 |
| Typescript | 4.7.4   |
___
### DEPENDENCIES

| Module             | Description                                                  |
| ------------------ | :----------------------------------------------------------- |
| await-to-js        | Tool for handling in a cleaner way the await for promises managing the try catch. |
| body-parser        | Express middleware. Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property, as well allows control the request body size among other things |
| compression        | Middleware attempt to compress response bodies based on some options |
| express            | Express is a minimal and flexible Node.js web application framework that provides a robust set of features. |
| typescript         | It is a strict syntactical superset of JavaScript and adds optional static typing to the language. |
___