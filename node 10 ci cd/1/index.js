// ci cd

// when you working with team or project have some quality standards it's a good idea to think about some processs to manage the project
// your processs may include which steps you follow while developing your project

// development process
// quality process - which task need to pass before your code releases or which os or node version are supported by your app or it might include how often you update your application


// release process - centain checks run automatically when you change your code and do all quality check automatically

// some times it may happen that you are in hurry and you want to release your code in the middle of the night but if you do that you may leave some bugs or some code which are not working in the middle of the night
//that way these steps are there 
// ci - continuous integration
// cd - continuous dilivery
// cd - continuous deployment

// we will use ci of git 
// ci - continuous integration
// if many people are working on same repo so you want that your posh code should work on other machine so ci visulize this process
// one of the main idea behind ci is frequently commiting code to shared repostory

// see photo 1
// now assume the senario that urvish and jay are woking on same branch how urvish want to make some big feture update so how urvish get setisfied tha  is this code is woking on my branch will work in jay machine or on production machine or ci machine to make sure that source repo code not just only work  for one repo but for every one we need a server this ci server this server detect when the code is updated in the source repo and if it is updated then take that code and build that code run any tests (autometed or api tests) and then take the result and inform to the developement team. and  they get the red light if any thing failed or green light. so urvish got red light so it fixeds that code and push that again and this procress happens again untill this ci prcess git success result but due to that team like jay always get the working code. and we could potentially add more checks to our ci process. e.g we can add code linter to check the style ot our code mean the format of the code or we can have some security automated tests. and finding error sooner improve the quality of our code. and if have this process we can get idea easily whose code get fail and we can fix it at the same time and we will not have to debug our code in future to find any left bug.

// it is made populare due to agail development and soming called extream programming(mean releasing your software many time in day not once in a while or year) nowadays big porjects must follow these rules. this is way there is many tools and services are build to help us create this ci pipeline(mean this check that are require before your code to pass and before your code to be accepted by ci server)

// diffrent tools for ci
// circleci
// travis ci
// one available on githb it self
// jenkins

//what is continous deliivery? - is process that build on continues integration

// continuous integration is first step
// and continuous delivery is further step  it gives you even more cofidence that your code is will work in production and can be release for your users

// our team is chacking code and ci server is builing that code if any build check require then it testing that code and if require any additional check for example linting or any security checkes and let our developer know that is our code is ready to merge or not that shared with everyone else. here continous delevery add extra checks here whatever code we push here it will become ready to release due to continuous delivery.(mein after ci it give garenty that whatever code we work is ready to be deployed in production) 

// how do we add continuous delivery to our project

// cd - here we verify our code in ci server to ensure our code does not break we add as many test as we can and that gives us confidence (ui test if we have frontend and backend we would test a interactions including clicking through the frontend and talking to the backend in same way as your application do as frontend) and then it will be ready to be deployed in production 
// acceptance test - it is done by acceptance testers because test assure that application does the things that it claims to do. 


// ci - when you push code it run all the tests and create build,test (lint and security test) let know our developer that our code ready to be merge or not with main branch which is shared with everyone else
// cd - delivery of that build in production (each time we add code to the main branch it's ready to be delivery )(ui test) addtional acceptance test or user acceptance test)
// it can be done on frontend and backend  

// cd - continuous deployment - it make continuous delivery automatically 


// ci- build -> test -> merge
// cd - automatically release to repository
// cd - automatically deploy to production (do not do in heltcare software)


// ci-cd pipeline

// ci        ci             ci          cd - continuous deplyment
// source    build          test        deploy
// git push  compile        unit         staging (test environment)
//           docker build   integration   -
//                                        QA
//                                        -
//                                        -
//                                     production

// how to create ci pipeline
// but we need git hab actions for this pipeline to run some tests 

// why github actions over something like circle psi?
// with github actions we not only can create pipelines but we can also take advantage of other github fetures

// our pipeline live same place as our code and we can take advantage of github comunity and all of the fetures  like wikis and pull requests and reviews

// also can reuse other's pipelines

// circle psi or travis ci or even jenkins may have different scripts for pipeline

// github actions allows you to create pipelines 

// and it respond to verious different triggers and the most common one is when you commit or push a new code to your repo. when actions detects that some new code is ready it runs through the workflow (it go through all of the steps of this workflow to automate the all of the different actions that you want to perform in your ci pipeline your work flow might include unittests,linting or deploying your code into different environments) 

// advantage of github actions is assume we are runing some unit tests so we can run our test in any plateform linux, windows, mac etc. and it works with any programming language not only with just javascript. 

// it we are running our test and there is some error in code our pipeline or the workflow that we are talking about fails and it will automatically notify us with the issue that accured when we try to push some new code to our repository and also send us email so that we can fix that issues as soon as posible and we can customize it according to our needs and when it fails we can be notified throw chat server, slack server or even discord server. 

// github.com/features/actions
// workflow we deside inside this ci.yml file. yml is the formate that we use to script our workflows. ci.yml is know as workflow configuration file it contain steps that will be perform by our ci server

// we have list of job that will run whenever we have push to our repository whenever commits some new code we have here one job called test and like any job we can specify few different options on our test. and whatever we put inside this matrix which it self inside strategy whatever we put values here inside platform  mean our job runs in each platform (linux, windows, mac etc.)
// any steps we write bellow will run threes time for each platform
//and instead of platform we can also put different versions of node js and each steps that we specify will run in each node versions we specify

// we define the action in steps that we need to take when new code is pushed 
//to checkout the code from our repository we only need one line -> uses:actions/checkout@v2
// and this checkout action is already build for usand shared so anyone can use and check there code in ci environment and all these action you can find in this bellow slider and you can use these actions by just writing the name of the action 
//like to set up node 
//- uses: actions/setup-node@v1 // @v1 mean we are using version 1 of that actions 
//  with: 
//      versions: 12 
// and putting any option after words like(with) 

// and here with this action we are saying hey github setup node with version 12 so i can run my test on this specific version of node 

// for public repos github actions are free to use

// now we will create our own pipeline and for that we need these github actions for our ci pipeline to run the test and to explore what test we would take

// github actions defines ci pipeline in this workflow ci.yml files which list out certain action that should be performed when some action is triggerd in your repository.

// first to repo and go to action tab to view our actions
// in action tab you can see our pipeline in action

// click on set up workflow by your self

// to create workflow in your project
//see photo 1

// 1 create folder in top level of your project .github
// and inside that create folder workflows 
// and inside that create node.yml yamal file because we are working with node
// so first we create pipeline to create build
// in node.yml file
// first we name our workflow
// name: <NAME OF THE WORK flow> <NASA Project CI> -> this we show up in github website
// we want now control that when this workflow will run using (on) property where we can diffine the diffrent trriggers that will cause this workflow to run 
// but in our case we want to build our project whenever we push new code to our repository and specifically we say that this work flow will be triggered when some code is pushed to one of these branches and that we specify in this array under the branches option. our main branch is the master branch so from there we want to verify that our code is work and we can build our project.
// but if we are using github pull request flow where we ask the main repository to merge in some changes that we made instead of pushing them directly onto the master branch, well, to catch those pull requests, we can add another trigger the pull request trigger that also runs when there's a pull request on the master branch, so branches will be master just like above. Now any workflow that we define will be triggered on either a push or a pull request.

// now this is the fun part, we can define the jobs that are supposed to run when one of those two events is triggered under this jobs property

// what this job property?
// well, a workflow like our Nass project ci workflow that we are defining is made up of one or more of these jobs that we list under this property we'are testing how to install and build our project. so we wil call it build job for now but if we are doing continuous deployment, we might have another job, maybe a deploy job. may be a deploy job. And by default, Github action would run through both og these jobs in parallel side by side. if we wanted deploy to run only if the build jobs succeeded, we could add an option under Deploy to see that it depends on it requirements the build job to succeed first. we can do that by specifying the needs property under a job and seeing that deploy needs built. Now build and deploy would run sequentially, build first and then deploy. 
// but for now, let's remove this deploy step and focus on building first.
// see photo 2
// on each job we can specify which platform this job should run on. which operating system will be building our project on? we specify this with the runs dash on property followed by the operating system we are using the operating system our server will run on. linux os are very common for servers like our nass project,and ubuntu is one of the best supported platforms on Github actions. Ubuntu being a common distribution. so we can say that our build job runs on the latest version of ubuntu, so Ubuntu Dash latest, but this could also be mac Os latest or win latest. for now. let's pick one, let's pick a ubuntu.
// and define the steps of our build job. this is where we define the different actions that are going to be taken on ubuntu whenever our build job is triggered by a push or pull request to the master brach. 

// The actions that we list under steps are these reuseable scripts that help us to automate the different things we might want to do in our jobs. For example, we can see that our first step uses a checkout action to check out the latest version of our code from master. so we can write dash uses: followed by the name of the action, so we have this actions slash checkout action that's built in to github actions.
//steps:
//  -uses: actions/checkout
// one of the great things about github actions is that it has all of these pre-made actions for us to use, either created by the github team themselves or by third parties that have decided to share these scripts that we can reuse now because these are just references to scripts that run.
// it always a good idea to pass in the version fo the script so that fi the owner publishes an update, it's not breaking our workflow that we have here, so we specify a version of the checkout action by saying ads and then version one or version two. let's use version one and define our second step.
//  -uses: actions/checkout@v2

// so this second step will be to setup node, it will be to make sure that we have node installed on the machine that's running this build. we can use again, this is an action that's been made available to use already. that called actions slash setup dash node And this one is at version two as well, but this time we want to be more specific with our action. we want to pass in an option that says that we are setting up node with a specific version of node( with (with: ) option). so we are still on this same step, the same bullet points. but we are saying that we are using set up node with a configration parameter called node dash version.
// Followed by the version of node, we want to use as string
// so let's say as a starting point we want our build to run with node version 16. to be clear to anyone trying to follow through what our job is doing, we can also name this step. so passing in name and saying that in this case our step is telling the build to use node version 16. 

// those are setup steps which re-use these existing actions, but we can also run our own commands by passing in dash run as a step, followed by some command line program which will use our operating systems terminal to run, for example, npm install. 
// our pipeline is now going to use Node 16 on the latest code and install our dependencies. running the install command in our route package.json  

//see photo 4 and five

// but we also wants to run build on the frontend code. So we can pass another step saying we want to run npm run build dash dash prefix clients. this is going to run or create React app build script inside of our client folder.

// now we will run this work flow and trigger our first build. to do so we need to push our workflow file here to our repository. this will let github actions know about our pipeline and also it will trigger that pipeline.
// After all, we are pushing some new code, this workflow file, which means that this push trigger this push event that kicks off our build job(see 5 photo here to understand more better) will be detected as long as we push our code to this master.
// i commited code and push 'node.yml' yamal file. 

// and it will remember this workflow as long as this node yaml file exists in the repo.

// now go to the actions tab and you will find 1 workflow that currently been run. that take little time to complete but we can see that github recognize or workflow file. now when you push code to master branch that workflow get triggered. and once work flow get completed click on work flow and see things inside and detailed picture once it get completed.

// it also shows which commit triggered that workflow and and currently we had one job so use can see all the breackdown by clicking on job. and it shows entire details.

//like os, enviroment for os, and git action downloaded 2 reuseable actions that will be going to use in next steps. it downloaded corrousponding scripts which tell Github actions what to do when we checkout and when we setup node  

// let's see  what happened when we checkedout. github actions use git to sync with our current repo and we could drill down into exactly what each of these setup steps did. what matters though is  

// sum up in 9 video 
// and any developer workin on our project get this feed back that there code is passing these steps to build our project so here we have simple pipeline that install our  project and builds our forntend code. 

// Any time we push new code github action let us know that code can be installed and build not just on our machine, but with any configuration that matches what we have specified in our workflow file. if the code we push causes things to fail in our build pipeline will even get an email notifying us of that failure.  

// actions marketplace 
// github.com/marketplace 
// we have seen the set up node action that was created by someone else to help us install a specific version of node runtime. where do these actions come from and how do we explore which ones are available to us. On Github we can find actions under the marketplace where spcifically in this search bar we can search for actions for our workflow. 
// for e.g i can search for setup-node and the first result here is the action that's built into GitHub actions, which helps us set up a Node.js environment and add it to the path for whatever operating system we have specified in our workflow file(this is written in desc in that searched action) and we can explore this action by clicking on it. where we have some example of how this perticular action might be used but this action we have used so far like the setup node action that are some busic actoin are available. and you can explore more actions in this marketplace tab


// for example, if i wanted help deploying my application to a US, the Amazon Web services cloud.(search keyword (aws)) i can search for that. i will get some apps by default, but i can filter in this menu to only find actions. and we can see, there is actually hundrends of actions that help us deploy to the many different services that Amazon provides. 

// we have this aws action that help us, in this case, deploy using this cloud formation service. And we can keep scrolling through the diffrent ways that we can interact with AWS using actions that have already  been made for us by other users. 

// run further test on same workflow

// we are going to test our code in many different enviroments all at once. let's do it.

// all we really want to do is add a new step to our build job over here, where after installing our packages and building the client and server. we run another command which test both our client and server.
// - run: npm test
// so is that if we are done? not quite.
// when we run our tests in our clients. so i can cd into client and do npm test. our test script form create react app will be run in watch mode here which mean it won't quit unless i type in (q) into the terminal with my keybord but there's no one to quite watch mode on the ci server in github actions.

// so there's a few ways we can disable watch mode when we are running our tests in github actions. when we define our job, we can specify the environment in which that job will run. that is the list of environmental variables that are set and available in all of the actions that are run in all of our steps. if i said specifically this, CI variable to true the Create React app test script will know that we are running in a continuous integration environment and will disable watch mode. this is a built in feature of the create react app test script. the one that we use to test our clients project(see photo 6).

//but we could put any different kind of variable here. we could set the port number that we want run on and set that to 9000 
// bellow CI :true
// PORT: 9000

// we can run our tests and in fact, the entire build job in different environments by setting this strategy option.
// strategy:        (see photo 7)
//    matrix: 
//       node-version:[14.x,16.x]
// And specifically by setting different variables on this matrix option inside of strategy. so say we wanted to make sure that our code works not just on version 16 of node, but also on version 14. we could set property inside of this strategy matrix to say that our commands should be run on node dash version, passing in a few diffrent version of node. so we can sya we want things to work on version 16.x. as well as version 14.x this will take the latest available version of node 14 and node 16 and create to build jobs that run in parallel, which each run trough all of these steps in our workflow. 
// Only For this to apply we need to actually specify that we are setting up node with the version from  our matrix configuration here, so we can pass in the node version as a variable by using this template like syntax with a dollar sign and two curly braces and say we are setting up node with matrix dot node dash version.
// and we can now show the corresponding node version inside  the github action log. so we will say use node js version just like below dollar sing curly braces. matrix  dash version.
// now we have to push this file so that github get aware of these changes. 
// now we can see under the actions tab, we can see a new workflow run has been started with with the message from our commits add npm test to workflow go into that.
// and how we have jobs running, both running the build commands with our npm test added,but one is running on node 14 dot X and the other on 16. now it take while to complete  

// see photo 8
// we can see that if one of them fails, that's this read X symbol here, the other one, even though it's running in paraller will be cancelled automatically to prevent some extra work from being done.Oh, and in my e-mail, i'have gotten this notification form GitHub that some of my jobs for my most recent commit failed and other jobs were cancelled as result. it's enough  for us to know that something went wrong in just one of the jobs.

// so let's look in our node 16 job to see what exactly our problem is.
// and here we have brackdown of our diffrent steps
//  and we are taken to the bottom of this npm test where we can see that the process completed with exit code one where exit conde one on mac and linux system usually means someting went wrong. where as exit code zero would mean that things complete successfully and scrolling up. we can see there was an unhandled promise rejection. but what caused it. our launch's post endpoint failed with mongoose error. mongoose is unhappy that the you are a parameter when we did Mongoose Connect was not a string, but was instead undefined.(see photo 9). if you remember when we called Mongo Connect, we passed in this Mongo URL that we needed to set up somewhere.
// And let's look inside of our code it is comming form our .env file. that's not art of our great repository that was on purpose. we don't want our project secrets to be shared with everyone who has access to our soruce code. so it makes sense that our tests are failing inside of github actions.
// there is no .env file and in fact, there is no mongo database set up for these tests. we would not really want to use or main application database because we will be running these tests every time we make any change to our code  and our tests changes the data in our database by adding new launches and maybe even potentially removing launches. we do not want our tests messing around with our live nasa mission control data with all of the launches that we have worked so hard to populate will find our how to work with databases in continuous integration in next video


// we have discovered a problem when our tests run in our continuous integration pipeline server, the database that our application depends on to persist data is not available from github actions. the question is how do we work with databases in continuous integration? 
// there is a few different approaches we might take. one that you will commonly see is doing what's called marking out the database. what this would mean, for example, is that if our tests make a request to save a new launch, we would change our code so that new launch is not actually saved in mongodb and when launches are read they are not actually read from MongoDb. Instead, we could do what's called stubbing out our Mongo database, where we check if our code is begin run from a test an if so, we make it so all of our mongoose functions, like connecting ot reading and writing all of these oprations would do nothing and always succeed. it's almost like completely removing all of the mongoose code from our server. or maybe we are little bit more clever.
// when our tests try to save a new launch instead  of using Mongo,we update our code so that the launch is actually saved in a in-memory database which does not required mongo to be set up for our test to run.
// these are just some of the approaches you might see on projects. and we could spend an hour just talking about different ways of making functionality out. but there is a problem when you make a database, you are testing less of your actual code. you do not know if the database spcific aspects of your code like the connection do what they are supposed to do when a database is actually connected. this means that your tests lose some of their value. they are covering less of the code that your actual users will be interacting with. in our case form the nasa mission control dashbord and oh boy, there's another problem making our fuctionality out adds complexity. it means that you have to write additional code, which treats your tests differently form the code that's going to be running on the server.
// the code that your users will actually be interacting with not only are your tests less valueable, but you have also made your entire code more complex, which means there is a higher chance you have introduced a new bug in trying to test your code and improve its quality. there is a change you have actually made it worse now.
// mocking functionality is not always bad, but often there is a better way and if we can figure out better approach we should probably take it. the approach i am talking about is actually setting up a real life mongo database for us to connect to, seperate form the database that you user will be interacting with a databse this is available that is created specifically for this job, for this workflow. and a database that is completely shut down and removed when your tests pass or fail. one, where your data is always in a fresh state for your tests to run though all your different read and write oprations. it's not too much work we have to do.

// let's see how to set up mongo for continuous integration
// see photo 10
// how do we set up our pipeline specifically for our database? how would we set up a mongo database that will be created fresh whenever one of our jobs is triggered? A database that will be removed after our tests completed, there is a github action action for exactly that. just like we  used existing actions to check out our source code and to set up different versions of node, we can use one of these shared actions to add a step that we will set up and install mongoDB so that it is available to our tests.

// we will name this step first, calling it use Mongo Db from github actions. 
// github.com/marketplace/actions/mongodb-in-github-actions
// - name : Use MongoDB from GitHub Actions
// - uses : supercharge/mongodb-github-action@1.6.0

// what exactly does this action do? it start a mongoDb server specifically for the current job. this database is available on localhost inside of our continuous integration server with the default ports that mongodb uses.

// we want to set up mongoDb using the action we just found. Before we run our tests so that our serve, which our tests talk to, has a database to connect you.

// ok, but how does our node server know to talk with the verion of mongodb that we just set up when we are running our tests as part of our pipeline here? well, remember, our mongo url came in from this dot env file, which points our server to our database, regardless of whether it lives somewhere on the cloud, on our local machine or in the continuous integration server that github actions is hosting what this means for us is that we can set the mongo url as part of the environment in this workflow file.

// MONGO_URL: mongodb://localhost/nasa
// we will set mongo underscore url just like we do in our env file to the location of the mongodb database that is setup in our set right here (in our workflow). whenever we have a mongo Url, we always start it with mongodb colon slash slash and our database lives on localhost on the maching that's running our our pipeline right here(steps:) and specifically, we are going to be reading and writing from a database on localhost that we call nasa. this is the name of the database inside of Mongo that stores all of the collections for our application. if this database doesn't exist, one will be created for us when we connect to mongo and we start reading and writing a documents.
// now we could leave things here, but it a good idea to specify the version of mongoDb that we are using in case a newer version of Mongo has some changes that break our application. just like we had these array of node versions inside of our matrix configuration. we can specify different version of mongodb that we want out code to work with. so i can create a variable here, a Mongo Db Dash version that specifies that we want to run everything and make sure it all works on Mongo 4.2 as well as 4.4.(see photo 11) this would run  4 jobs side by side. 
// One with Node 14 and mongo 4.2, One with Node 16 and Mongo four point two. and the same thing with mongo 4.4.
// You can see how as we add more versions of things the amount of jobs that we create explodes very quickly. so we want to be very focused in what we are testing on. In our case i am just happy to use version 4.4 of MongoDb(so i am removing 4.2). so what i will do now is just like when we set up node, i will say that for the long action, we are using it with mongoDb dash version and then passing in this variable just like before
// uses: supercharge/mon.......
//  with:
//      mongodb-version:${{matrix.mongodb-version}} 

// matrix dot mongodb dash version, we know that our workflow here will always be run with version 4.4 of mongodb. it tha if? does this work? How we are already created an entire database just with few lines of configuration? let's find out.

// just like before we are going to add our new github workflow file by doing git, and dot github on the entire folder and then making a new commit with a message that says, and mongo mongoDB for github actions will create that commit and push our changes to the master branch on the origin. let's trigger our continuous integration pipeline now using its own mongo database. let's go. 

// still looks like there wan an error in our ad. new lunch controller, we have an error being thrown telling us that no matching planets was found when we tried this schedule a new launch. the good news is that we are no longer getting a mongo connection error. we have successfully connected to a fresh Mongo database. what about this error though. To save ourselves some time, we can scroll up to the top of the page here and cancel the workflow now that we see there is an error. both of our jobs have been cancelled, which means it's time for us to get to the bottom of what is happening. 

// why is not matching planet being found? will find out in next last video. but now we are setting up a mongo database to be used in every run of our github actions pipeline. and we are not polluting the data in our production database, and we had no need to mark any of our database functionality.

// we are getting an error that telling us that no matching planets are found when we try to schedule a new launch, Where is that error being thrown? let's find our.
// In our server source code, we should be able to find our launches model looking for where we add new launches to our database. and specifically, this schedule new launch function, which takes in a launch that is targeting one of the exo planets in our kepler list. and if the planet that we are targeting in the launch can not found in our planet's collection, the one that stores valid potentially habitable targets. Well, if we are trying to target someting that is not going to be habitable, we throw this error that says that the target planet is not one og the valid targets. it not in our planets collections. So why are we getting this error in our continuous integration pipeline? 
// this planent's collections is only populated and our server dot js here, when we start the server, we connect to mongo then we load that plant's data filtering out the potentially habitable kepler exoplanets. and then we load the launch data from our space x data api. so when we call start serer, we are goin to load that planent's data. but this start server function is never actually called. when we run our tests for our launches inside our rotes folder under launches dot test.js remember, here we are using the app object from our app.js file directly. so none of the code inside of server.js is run for our test. That's why we have to call this Mongo Connect function(inside server.js) manually in our tests.  (--continue here to)
// (here before this last video want test)
// (--continue here) before our launches, tests run and then disconnect after they are all complete, just like we connect to mongo in our setup, step here to make sure that our app object has a database that it is connected to . we also call that loadPlanetsData() function before we start testing our launches Api will await the results of that function, we are going to create a constant taking this load planents data function from require and where does this load planet's data functions live? well, it's in our planent's model under models. so we going to import or reqire one level up out of launches. and then one level up out of routes into models, slash planets, dot model,just like that. 
//Now, when our tests connect to our fresh mongo database, they will also load in the planents data so that when we create a new lauch wiht some valid targets, that target will match one of the loaded planets. and no error will be triggered. let see we are wright or wrong and let's push thsi code.

// still our tests fails, this time, our client tests are failing because we did not create any front end tests. and our test commad is expecting at leat one test for that step to succed. what we can do is follow the instructions right here. we will pass this flag passed with no tests into our npm test command in our client folder in the package.json we say
// "test":"react-scripts test --passWithNoTests" let's see if this fixes our tests for a good. and now it got succesfull.  