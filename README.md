# PICHINCHA NODE JS

### Steps for run project
1- Ensure that your are using the correct node version

```bash
nvm use 16.15.1
```

2- Install packages

```bash
npm install
```

3- Run server

```bash
npm run start-dev
```
____
### Endpoints
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
- Params: None
```
/metrics/ID?date=&state=&coverage=
```
IMPORTANT:
____
### Tech Table

| Technology | Versión |
| ---------- | ------- |
| Node js    | 16.15.1 |
| Typescript | 4.7.4   |
___
### Dependencies

| Module             | Description                                                  |
| ------------------ | :----------------------------------------------------------- |
| await-to-js        | Tool for handling in a cleaner way the await for promises managing the try catch. |
| body-parser        | Express middleware. Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property, as well allows control the request body size among other things |
| compression        | Middleware attempt to compress response bodies based on some options |
| express            | Express is a minimal and flexible Node.js web application framework that provides a robust set of features. |
| typescript         | It is a strict syntactical superset of JavaScript and adds optional static typing to the language. |
___