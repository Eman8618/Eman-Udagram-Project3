# Udagram

I used This application that is provided as an alternative starter project from Udacity .The udagram application is a fairly simple application that includes all the major components of a Full-Stack web application. so I only updated the README with needed new information 

This Application has frontend which created by Angular ,backend has database created by postgres .The main function , the user accesses the client URL so he can register or login to database after registeration the user will login directly and access home page so he can creat a post with attached image.
## Application link
`http://udagramemanbucket.s3-website-us-east-1.amazonaws.com/index.html`
## Udagram Architecture 
![image info](./Documentation/Udagram-Architecture.jpg)
Read udagram-infrastructure for more details
## Overview-pipeline-process
![image info](./Documentation/Overview-pipeline-process.jpg)
Read pipeline for details

## Getting Started

1. Clone this repo from github: `https://github.com/Eman8618/Eman-Udagram-Project3`.
2. Open a terminal and navigate to the root of the repo 
3. follow the instructions in the installation step


### Dependencies

```
- Node v14.15.1 (LTS) or more recent. 

- npm 6.14.8 (LTS) or more recent.

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

```

### Installation rules as it given from the original README from the starter project

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres. 
2. In AWS, provision a s3 bucket for hosting the uploaded files. 
3. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
4. From the root of the repo, navigate udagram-api folder `cd Eman-Udagram-Project3/udagram-api` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
5. Without closing the terminal in step 1, navigate to the udagram-frontend `cd Eman-Udagram-Project3/udagram-frontend` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run start`.

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd Em-Udagram-Project3/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end

### Unit Tests:

Unit tests are using the Jasmine Framework.

### End to End Tests:

The e2e tests are using Protractor and Jasmine.

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework

## License

[License](LICENSE.txt)
