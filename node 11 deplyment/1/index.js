// how to host our app we do it by deploying on cloud

// cloud mean server server contain of our app and even databases

// to deploy our app there are two main approach we can take 

// lecture 2 (see photo 1 )
// Welcome back.
// When it comes to deploying our backend API to the cloud, there are two main approaches we can take.We have so-called serverless approaches that are rapidly growing in popularity.
// The name serverless is a bit deceiving, though we still have servers, but the cloud manages the configuration
// of these servers, and we don't worry about things like what operating system will be using.
// We only need to worry about when our code will run and what it does.
// Sounds pretty amazing, right?
// You might have heard of IWC Lambda Functions, which is a popular serverless platform from Amazon.
// This is a form of event driven programming where your code runs in response to some event that happened
// outside, like an email being sent or a file being uploaded.
// We can also deploy our Naza code to a lambda function, and we'll talk about this more.
// But there are limitations to this serverless approach.
// Your code might suffer from higher latency, higher response times than server based code.
// If you're not careful about how you set up your serverless architecture.
// This might happen, for example, if you are lambda function, which runs your serverless code, goes
// to sleep and needs to be restarted before it can respond to a request.
// And you can be locked into a single cloud, for example, IWC and their lambda platform.
// You might find yourself stuck without being able to migrate to other clouds like Microsoft Azure platform,
// which has its own serverless offering.
// There will be a costly migration ahead of you, and you might find yourself without the ability to deploy
// your application on premises, which just means on a physical server, on a physical computer that is
// in the same room as you instead of somewhere on the internet.
// There have been some great tools like this serverless framework named after the serverless approach
// that have been built to address most of these issues.
// For example, deploying to IWC, Azure and GCP, all using one tool.
// But one thing holds true, and that is that this second alternative approach using containers is here
// to stay.
// By far, the most widely used approach to modern deployment is to use Docker, which is a tool that
// was released in 2014 that has now exploded in usage and popularity and for good reason.
// Docker provides some really well-made tools.
// And it allows us to build containers that can be used to bundle and share our applications so they can
// run anywhere on any computer and any server.
// This gives us incredible flexibility and we're going to learn all about the how and why of how we use
// Docker in the next videos.
// I'll see you soon.


// lecture 3 (see photo 2)
// Welcome back in the last video, we learned that we want to deploy our application in a container using
// software called Docker that allows us to build these containers.
// But what is a container to understand that?
// Let's first explore a related concept of virtual machines for a minute.
// You might have heard of virtual machines, software like VMware or VirtualBox or Parallels, which we
// have here.
// This allows you to run another operating system alongside your existing operating system at the same
// time.
// So in this case, we have Windows 10 running on top of Mac OS, where Windows 10 is what we call a guest
// operating system running in this sandboxed environment here, completely isolated from the files and
// programs that we have installed on our host unless we choose to create what's called a bridge where
// we give the guest Windows 10, in this case, permission to read and write files from Mac OS.
// Let's think about this for a second.
// How does this work?
// Well, we know that containers and virtual machines can work together, and we're going to find out
// about that in the next video.
// But in our virtual machine setup, we have our infrastructure, which can be your server on a cloud
// or your personal laptop, whatever is running your application.
// And on top of that, we have a hypervisor.
// This is essentially a piece of software or sometimes hardware in the case of mobile phones that allows
// your computer to run multiple operating systems at the same time.
// These are what we call guest operating systems, which we saw previously could be Windows 10, for example.
// So your virtual machine pretends to be another completely independent computer running in a box.
// So, for example, Windows 10 here, as our guest operating system could be running alongside Linux
// and Mac OS in three different virtual machines.
// And the hypervisor ensures that even if we originally installed, say, Mac OS, all three of these
// guest operating systems can run on our computer.
// And inside of each operating system, we can run our applications.
// Our server side code, for example.
// And even though they're all running on the same machine, the same infrastructure, they are all running
// in isolation, which is an important security feature for what I'm about to mention.
// You see, the concept of virtual machines was revolutionary for the internet.
// Amazon Web Services was able to create it's easy to computing environments because of virtual machines.
// We can have these EC2 servers allowing multiple users to share one powerful physical machine.
// One powerful server by having multiple sandboxed virtual machines running on that computer.
// Where applications from one virtual environment can't interfere with the applications in a different
// environment.
// And Amazon has millions of these EC2 servers, which hosts many of the sites you browse, like Netflix
// and Reddit.
// We're in good company by hosting our server on EC2.
// All right.
// In the next video, we'll see how this all relates to containers.
// I'll see you then.


// lecture 4
// Welcome back.
// Wouldn't it be nice to have everything set up so that you could run your application code on your machine
// in exactly the same way that it's going to run in the cloud in production?
// We want to make sure that our project runs not just on our operating system or our specific version
// of our operating system or a specific version of our runtime.
// We want our code to run on any machine that we deploy it to as your environment.
// All these things that your program depends on, like your operating system, your runtime or a specific
// database.
// As this list grows, it becomes an impossibly complex task to make sure that your application or API
// runs on every possible configuration of all of these things.
// This is where Docker containers come in.
// Docker containers are small boxes containing our applications that run anywhere on our desktop, using
// a Linux operating system or a Windows operating system, or on the cloud or in a physical data center
// somewhere.
// see photo 3
// We package our application in a container together with all of our dependencies and deploy them together
// in a well-tested configuration in a well tested combination, and Docker then makes sure that our container
// can run on any machine.
// (see photo 2)
// How does a container work?
// A Docker container is like a virtual machine.
// However, it shares the operating system it's running on, while virtual machines have to create this
// virtual environment on top of your infrastructure on top of your actual computer.
// It needs this hypervisor and this guest operating system to both be running, whereas your container
// is still running on your computer, but it's making use of your existing host operating system.
// For example, in this case, Mac OS is the host operating system and Windows 10 is the guest operating
// system.
// And so we get rid of this guest operating system and this hypervisor requirements that we have in virtual
// machines.
// We replace those with Docker, which has a program that allows us to run our containers by providing
// the minimal set of dependencies that our applications need.
// What this means is that containers have to do a lot less work.
// But your applications are still completely isolated from your operating system.
// Your applications are still in a dedicated environment set up specifically for your application.
// Instead of having a virtual machine that's tens of gigabytes taking up your hard drive, you can have
// a container that takes up tens of megabytes much more efficient.
// And rather than waiting minutes for your virtual machine to start up while your entire guest operating
// system starts up from scratch, your container starts up in seconds.
// Isn't that nice?
// Now there's still reasons to use virtual machines.
// They provide stronger isolation than containers do because of these extra layers.
// So a company like Amazon that is potentially running applications from two separate customers on one
// server on one set of infrastructure would want to make sure that the application from one customer can't
// access the secret files from another customer.
// Virtual machines provide a stronger sandbox than Docker containers do to ensure that data is never leaked
// between customers between applications from one virtual machine to another.
// Often we use containers and virtual machines together, like when we run Docker on Amazon's easy to
// service, which is actually just a very efficient set of millions of virtual machines living on Amazon
// servers somewhere.
// And that's exactly what we're going to do.
// We're going to deploy Docker on Amazon.
// Easy to let's learn how.
// I'll see you in the next one.



//lecture 5
// Welcome back.
// Let's install Docker.
// We can do this by going to Docker dot com.
// And following this getting started link here.
// Where we can see that darker is for everyone.
// And if we scroll down, we can see a few options here.
// Right now, what we're going to be doing is installing Docker.
// So under this Docker desktop option, we have the option to download Docker for our operating system.
// And you'll notice that for Mac and Windows, there's a download option with Docker desktop.
// Now I highly recommend getting Docker desktop, if you can.
// It comes with the command line Docker tool, but also a nice user interface and some other goodies like
// Docker compose.
// So for Mac and Linux, we can click on one of these links here, which will download the Docker installer
// now for Linux.
// Unfortunately, we don't have Docker desktop yet, so we'll need to select which version of the Docker
// engine we want to download.
// Depending on which Linux distribution we're using.
// So say we're on Ubuntu.
// We would click on this link and if we scroll down, we can see some instructions on how to get the Docker
// engine.
// And if we click on this link here, we're taken to exact instructions on how to install Docker for our
// distribution.
// In this case, you're going to.
// Now, in the case of Dr. Rdesktop, our life is a little bit easier.
// Well, download the installer and because I already have Docker installed on my Mac.
// Let's see how this would look on Windows.
// So on Windows 10 here?
// I've already downloaded the darker desktop installer, and I'll double click on this.
// And I can start the installation process for DR.
// Clicking through all of the options here.
// All right, and back on my Mac, once we've gone through the installation process and we've got Docker
// installed for Mac and Windows, we can run it as an application.
// And it'll take a few seconds to load.
// But once it's running, we have access to our her desktop and we can browse through our dashboard.
// Where you can see here, I've already got a couple of containers installed, but we'll get into how
// we set up Docker containers in the next video.
// First, we just want to make sure that we can also access Docker in our command line.
// So in our terminal window.
// We want to make sure that we can run the darker command by typing Dr.
//cm docker
// this above command And here we can see a list of all these different commands that Docker allows us to use.

// Beautiful.
// We're going to get started building some Docker images and running some more Docker commands in the
// next video.
// So get your Docker set up on your machine.
// Verify that you can run it and I'll see you in the next one.

// lecture 6

// Welcome back.
// Let's create our first Docker container for that, let's complete the big picture here.
// In our getting started with Dr Page.
// Remember, we had Dr. Desktop, which we just installed, and we have this play with Docker learning
// environment, which we can play with to get comfortable with Docker.
// But the piece will really be using here is Docker Hub, which we can see they say is a cloud based application
// registry and development team collaboration services.
// What does that mean?

// Really, what Docker hub is is a darker image repository.
// This means that it hosts images, which are snapshots of all the files and applications that we need
// for our container.
// For our application to run, these images are immutable, which just means that the image can never
// change to update an image.
// We just create a new one and stop using the old one.
// If this difference between containers and images is confusing to you, don't worry.
// It takes some time to get used to.
// And over time, you'll get very comfortable with the differences.

// For now, just remember that containers contain your running application, while images are a collection
// of all the files, all the dependencies that we need for our container to run and Docker Hub has a large
// collection of these images, and we can go to Docker hub by going to hub.docker.com
// Here, if we scroll down.

// We can see that there are a series of very popular official images for things like MongoDB and no Node.js
// or post graphs for a relational database.
// Even Ubuntu, the Linux distribution.
// And cooling the programming language.
// Docker hub has more than 100000 images and is used by millions of developers, but it's not the only
// place we can get our images from.
// Docker Hub is a repository.
// Just like with our source code, we can use GitHub versus something like Bitbucket or GitLab.
// There are different Docker repositories, so we could use the official Docker hub, or we could use,
// for example, Amazon's elastic container registry.
// If we really wanted to use Amazon end to end.
// But for this course, Docker hub is really good.
// It's free and easy to use.
// So we're going to use that, and our first container is going to be the Docker version of Hello World.
// Docker provides this official Docker slash getting dash started.
// Image, which we can do a search for here.
// Where we can see some basic information about this image now that we've found our first image, we can
// create a container from it in our terminal.
// We're going to use the Docker Run Command, which allows us to create a container from a specified image

// cm - docker run docker/getting-started` 
// cm - docker run -p docker/getting-started (-p map port) 
// cm - docker run -p 80:80 docker/getting-started (-p map port)

// like Docker Slash Getting Started, which we just found.
// And once this command creates our container, it then runs it.
// Now, before we run this command, we're going to pass in a parameter and that's going to be Dash P
// for publish, which will map a port from our container to my computer here doing something called port
// forwarding.
// For example, we could see that Port 80 on the container maps to Port 80 on my computer.
// So now we can access the server running on Port 80 in our container.
// What happens when we run this command?
// We can see that doctor is unable to find our getting started image locally.
// In the her cash, so it pulls it from dock her up, and we can see once her image was downloaded, our
// container is now running now in the browser.
// We can go to localhost and remember that we mapped our port 80.
// And there we have it, we have this getting started page hosted on our local machine from Docker.
// We can see our network requests in the terminal.
// We've just made our first Docker container.
// Congratulations.
// And I'll see you in the next one.


//lecture 7 

// Welcome back.
// Remember that one of the tools that Docker provided us was Docker hub.
// An image repository, not only can we reuse the very useful images that others have published for us
// on Docker Hub, but we can also publish our own images here for free.
// We'll learn all about this in the coming videos.
// But for now, let's just get set up on Docker hub.
// We can follow this sign up link here and create a darker side.
// So my user ID, whatever we want it to be.
// And we'll fill in our email and set a password, after which point we'll be able to log in as Docker
// hub users.
// We now have the ability to push images to our own repositories and share them with the world, or even
// to push private Docker images, which only we can access when we're logged in.
// And how do we log in?
// cm docker login

// Well, we can use the Docker login command.
// Which will prompt us for our.
// Docker ID username.
// And then our password.
// Great.
// We've verified that we can log in through Docker in the terminal.
// We'll put this to use very soon.
// I'll see you in the next one.


// lecture 8


// Welcome back.
// We've learned how to create a container from our Docker hub image.
// How do we use this to deploy our node applications?

// We start by building a darker image.
// For our application, this will be a Docker image that contains all of our node files and dependencies,
// everything required to run our project.
// All right, but how do we create these Docker images?
// We use something called a Docker file.

// Docker files allow us to take a base image like our getting started image.
// And run a series of instructions, additional steps where we set up our node application, for example.
// On top of that base image.
// Our base images usually contain common environments and applications used for running our program.
// For example, an image with MongoDB or Postgres already installed.
// Or no tags?
// These images are set up to contain the minimum amount of other programs that, for example, Node itself
// needs to run.
// Let's see what this Docker file looks like.

// Back in our NASA project, we're going to create a new file.
// Called the Docker file, this will include all of the instructions to set up our Docker container.
// This is a special file that is recognized by Docker, which includes all of the instructions to set
// up our Docker container.
// And the first of the instructions is going to be to select the base image using the from the statement.
// FROM node:16 // spcific version of node
// FROM node:lts // latest lts version of node
// FROM node:lts-alpine // we want base image have node install on alpine linux

// Which is followed by the name of the base image to use.
// Now, note that these tooltips that you see here and the fact that are Dr. Phil is recognised with this
// Docker icon here.
// This is all coming from the darker V.S. code extension, which I've installed on my machine.
// You can install this by looking for the Docker extension from Microsoft and installing it on your machine.
// Very useful for when you're working with Docker files.
// Remember how we create a container from a base image, we can find these base images on Docker hub.
// And it so happens that there's one for node.
// Let's see what the node image contains.
// If we scroll down, we can see that there are dozens of different variants of R.A. image, depending
// on which version of node and which operating system we want to use.
// We can get a general breakdown of the different variants by scrolling down a little bit further.
// Under the image variant section, which explains how to select which variant to use, we're going to
// be using this.

// Alpine version of note that runs on the Alpine distribution of the Linux operating system, Alpine is
// often used as a base image in Docker because the image sizes are so small they don't take up much space
// on your hard drive.
// For example, if we go under.
// Tags.
// We can see that there's a slim version of our image that's around 50 or 60 megabytes.
// There's this regular stretch version that's a few hundred megabytes, but scrolling down.
// Under these Alpine versions.
// These are only 30 to 40 megabytes each.
// In fact, with a node or anything extra.
// Alpine Linux is only around five megabytes, which is way smaller than other distributions of Linux.
// Back in our Docker file, we can set our base image to include an installation of nodes, yes, by writing
// from node, followed by the version of Node, so it could be Node 16 or if we always want to use the

// (see photo 4)
// latest LTAs version of Node, we can specify that by seeing from node alts.
// And finally, we can specify that we want the base image to have node installed on Alpine Linux so that
// it contains as few unnecessary programs as possible, and the resulting Docker image takes up only a
// few megabytes on our machine.
// We specify the version of Linux by adding this Dash Alpine right after the version of note.
// Next up, we'll be doing a little bit of setup.
// I'll hide this extension bar here and on a new line.

// We're going to create a folder for our application.
// We'll set the work directory to slash app.
// This is the name of the folder where our files will live.
// It could be just about anything, but the important thing is that the app folder is now where all subsequent
// commands will be run.

// For example, I can use this Docker copy command to copy some files from my local machine, from the
// Nassar project into the Docker image that we're building here.
// When I say copy from Dot to Dot, we're seeing that the source of our files is going to be our Nassr
// Project folder, and the destination is this app folder that we just created with our files and source
// code in our Docker image.
// We can run some commands to set up our project.
// We'll say run.
// And most importantly, we need to npm install our projects.
// All right.

// But here's the thing we're not happy with just any old npm install.
// We're building this Docker image for when we deploy our Nassr project to the cloud.

// That's going to be our production deployment of our final project so we can make use of this added flag
// that npm install has, where we say only install the dependencies that are needed for production.
// Now, any dependencies that are marked as dev dependencies.
// For example, let's see in our server, we have just and nordmann as dependencies that are only required
// in development and aren't strictly needed when we're just running our application.
// So to save space and avoid installing unnecessary packages that might introduce added issues or security
// problems, we can pass in this only production flag for when we build our production Docker image with
// our client and server dependencies installed.

// We can run a command to do what the next thing we need to do is build our frontend clients.
// That was the npm run build command that we wanted to run in our client folder so we can pass in prefix
// clients just like that.

// Notice how we're building up step by step the environment which is needed to run our Nassr project.
// We're almost there.
// The only major piece missing is what to do when this Docker container starts up.
// That's what the CMD option is for.
// We pass in this array of strings, which starts with the command we want to run in our case will be
// running an npm command, followed by any parameters we want to pass in.
// So we'll be doing npm start and because we've already built our clients, which creates this public
// folder in our server.
// That's then served alongside our API.
// We only need to start our server when we're running our project in production.
// It's going to serve both the API and that front end.
// So we'll see Dash Dash Prefix.
// Followed by, you guessed it, server.
// And there we go.
// When our Docker image is built and we want to start a Docker container using this image, it's going
// to run the command specified in this array, but hold up.

// Let's think about security for a second.
// By default, Docker will run any of these commands as the root user.
// This user inside of our container that has full access to everything in that container, which can be
// a bit of a security issue.
// Remember the principle of least privilege.
// We want to run our application as a user with the minimal amount of permissions needed to run that program
// so that if our application has a security issue, any hacker will only have the privileges for the user
// which is running that application.
// Conveniently, the node images.
// Already contain a node user for exactly this purpose.
// Right before we start our server, we can set the user to use when running this container.
// Do note that has less privileges than the root user, so we're minimizing the harm and the damage a
// hacker can do through this server, which we're going to expose to the internet when we run our application.
// Here we go.
// That's the final step.
// Our Nasser API is running on Port 8000, which means we need to expose that port so that it's accessible
// outside of our container.
// We specify which port to make available outside of our existing container to the internet by saying
// expose.
// Followed by the port, no.
// How are Docker file is now nearly ready to be built and run?
// Starting from this well-tested and optimized node based image, we've added our source code, our Naza
// application, and set it up.
// This is what a typical Docker file looks like, but we're not quite done yet.
// In the next video, let's talk about some optimizations that will improve our resulting Docker images
// and help us make sure that everything works, regardless of which operating system we're using.
// I'll see you in the next one.


// lecture 9

// Welcome back.
// Before we run our application with Docker, there's a couple of really important improvements that we
// need to learn about and add to our Nassr project right now.
// When we copy our application source code to our Docker image, we're copying everything in our client
// and server folders.

// Including the node modules that have been installed on your computer, on your machine.
// And it's those node modules that are then going to be used inside of the Docker image.
// When we tried to npm install npm is going to see those existing node modules, folders and won't do
// much.
// All of our npm packages are already going to be installed in the Node Modules folder.
// But there's a little bit of a problem with this.
// What's the issue when we npm install?
// There might be certain steps when we install our packages that are specific to the operating system
// that we're running.
// That won't necessarily apply to Alpine Linux.
// If you remember back to our previous videos, Alpine Linux is what's running in our Docker container.
// But this will be different than our host operating system, which in my case is Mac OS.
// Or it might be Windows or some other version of Linux, something that works slightly differently than
// Alpine Linux.
// NPM install will do slightly different things, depending on what our host operating system is.
// So why does this matter?
// Long story short, we want to make sure that we're not copying our existing node modules, but that
// we're installing them fresh when we build our Docker image so that they're being installed and set up
// specifically for the current operating system.
// In our case, that's Alpine Linux to do this.
// We can add a file to the roots of our Nassr Project folder, which I'll call.
// (see photo 5)
// Diet doctor, ignore much like this, get ignore file that we've seen the Doctor Ignore file contains
// a list of files and folders that we want to exclude from our Docker image when we use the copy command.
// So in order to exclude the node modules folder from both the client and server, we're going to add

// a line using this wild card symbol, followed by slash node modules.
// This is saying that we're excluding the node modules folder if it exists in any of the folders at the
// root of our Nassr project.

// Now our local dependencies, the ones installed on our machine will not be sent to our Docker image,
// which will make sure that all of our packages and dependencies are installed fresh specifically for
// the operating system used in our Docker image.
// That's Alpine Linux.
// And we can add other entries to our Dr. Iginla file.

// If we're using gets, we can exclude the Dot Jet folder, where it stores all of your local branches
// and commits.

// And it's also a good idea for us to exclude any build artifacts from our local machine that is anything
// that can be derived from the rest of our source code.
// For example, the public folder in our server.
// Is the result of running the npm build command in our clients to make sure that everything is being
// built from scratch in Docker?
// We're going to want to run that npm run build command in Alpine Linux and not rely on anything from
// our local machine.
// So we'll exclude server slash public just like that.
// One last thing?
// Let's take a look in our Docker file.

// We're going to take advantage of a Docker feature called layers.

// Basically, we're going to break our commands down into smaller components so that they can be cached
// more easily.
// Docker will create a new layer each time we run a copy or run command, and it will only perform those

// steps if something in one of the earlier steps has changed to minimize the amount of work that needs

// to be done to create this image.
// We might be making new images hundreds of times as we update our project.
// So it's important for this step to be as efficient as possible.
// That's the beauty of Docker layers.

// (see photo 6)
// Layers minimize the amount of work that needs to be done when building new Docker images.

// We'll see this in action when we build this Docker image very shortly.
// But the way that we take advantage of these layers when we build our Docker file is by breaking down
// our npm install step into two components.
// Remember, our npm install command is going to install the server first, followed by the client.
// We can break these two scripts out.
// The install server and install client scripts and say in our Docker file that before we build our client,
// we only need to npm run, install Dash client, and we're still only going to install the dependencies
// needed for production.
// And then once our build is complete, we can do the same for our server.
// So we'll do.

// NPM run, install Dash server, each of these commands is going to create a layer that saves the state
// of the image after that command is run right now.

// This won't be very useful any time any of the files in our projects change.
// This copy command will change and all of the commands after it will need to be run again.
// Building those layers from scratch because of this one pattern that you'll often see is copying over
// just the package.
// Jason, for our project.
// After all, it's only the package JSON that npm needs in order to install any dependencies.
// We don't actually need the source code for our project at this point.
// And this part's important.
// We need to make sure that we add a slash after the dot here so that Docker knows that we're copying
// package JSON into the app folder that we've set as the work directory.
// Otherwise, Docker might think that slash up here in the folder, but is instead just the package that
// JSON file now with our project.
// We broke down the client and server into two separate directories.
// So before we install clients, we need to copy client slash package.
// Jason.
// To the client folder with the slash.

// Now this install client step, this layer will only be updated when either the Roots package Jason or
// the client's package JSON have changed.

// If we changed anything in the server or in any of the client source code that doesn't add any new dependencies.
// The cached version of this layer will be used, cutting down on the amount of work that needs to be

// done to build this Docker file.
// We can do the same for our server.
// We'll rearrange things a little bit, just moving the install server a step before we build the client,
// because the install server is that only relies on the server's package JSON, whereas the build step
// relies on the entire client source code and not just the package JSON.
// This will be clearer if we can visualize it.
// So let's move this install server step right here after install client.
// And add a copy this time for the server slash package, Jason.
// Moving that into the destination folder, which is server slash, and we can group these together.
// So the clients and the clients package JSON as well as the server and the servers package JSON, we
// can clean up this empty space here looking good, which means the last thing that we need before we
// build the client and run the server is the corresponding source code.
// So for the clients to build, we need to copy over this time the entire client folder onto the client
// path, which means now the npm run a build command will only run if the contents of the client folder
// or any of the layers before that have changed.
// And finally, before we run our server, we need that last copy command to copy over the server folder.
// So server into server just like that.
// Now, if we're running in production, it's a good idea to have the extra guarantee that we're installing
// exactly the packages for the client and server that we've previously tested, the ones that are captured
// in our package locked JSON for both the client and server.
// We can update our copy commands to include both the Package Jason and Package locked out Jason by just
// adding an asterisk after package, both for our roots package Jason, the client, as well as that server.
// Now, our copy command will copy any file that starts with package and ends in JSON.
// This is best practice.
// So that's what we're going to do in this project.
// However, just a little warning.
// There are sometimes issues with using a package like Jason that's been set up on a different operating
// system than the one that you are running on. or using a different version of node 
// So if I've set up my package, locked out, Jason, in my host operating system, maybe that's Windows
// or Mac OS, but I'm running Docker inside of Alpine Linux.
// There's a chance that you might run into some issues, just a little heads up.
// And if you do run into issues, give it a try without these asterisk symbols.
// Which will just mean that you're installing the latest available versions of all of the packages in
// each of your package JSON files.
// All right.
// And that's it, we're following good practices and our Docker file is ready to be built and run.
// Let's keep it going in the next video.
// I'll see you there.


// lecture 10

// Welcome back.
// This is a quick one in this section, we're going to be running our Nassau project in the cloud, which
// means we need to update all of our you URLs that point to local hosts to make sure that they work regardless
// of where we're running our server.
// Let me show you what I mean in our clients code under source hooks and requests that guess we set this	
// API you URL to local host on port eight thousand slash V1 for version one of our API.
// This is that you URL that are front and client code will make requests do when getting the various data
// required by our Nassr dashboard, like the planets or the launches.
// Now that our API might be hosted in the cloud on some other domain or IP address that's not local host.
// We want to change this episode URL to be relative to where the client is hosted by removing this part
// here with local host and port eight thousand.
// And just leaving the V1 path for version one of our API.
// Now our client will know that it should make requests to the API that's living on the same address at
// the same origin as the front end.
// Remember, we're serving both the front end client here, as well as the server using the same node
// application.
// The API and our front end are both hosted on the same server, regardless of whether it's local host
// or some other domain.
// That's it.
// All right.
// Back to Docker.
// I'll see you in the next one.


// lecture 11 (see photo 7)

// Welcome back.
// Previously, we set up our Docker file with a node installation and our Nasser Project source code.
// How do we use our Docker file to get our node application up and running inside of Docker?
// There's going to be two steps to this.
// We first need to build our Docker image and then run that image to create a Docker container.
// Let's get started.
// First, we'll need to build an image from our Docker file.
// We do this using the Docker Build Command, which we see here in the Docker docks.
// docker build [Options] PATH | URL | -

// Take some options and either a path on our local machine.
// Or a URL that points to the Docker file.
// We want to build.
// Let's see this in action.
// In our terminal, we can do Docker build and for our path pass in the current directory.
// cm - docker build .
// cm - docker build . <-t - all as to assign a name to the image that we're about to build> 
// cm - docker build . -t <user name i signup in <docker hub username>/<project or repo> 
// cm - docker build . -t <user name i signup in urvish/reponame 
// The Nassr Project's directory, which contains all our source code and the Docker file we just built.
// Now this command alone is enough to build our image.
// Docker will know to look for a file called Docker file and the path that we specify, and it will build
// the Docker image based on the instructions contained within that file.
// But we're going to do one more thing.
// We'll pass in this dashti flag to tag our build, which is going to allow us to assign a name to the
// image that we're about to build the tag.
// I'm going to use is going to be the user I.D. that I signed up with on Docker hub.
// Whatever username you signed up with, mine is right here.
// And I'm going to name the project, the repository, which is owned by my user, that's going to be
// this Naza Dash project piece.
// Now your tag here can be anything but we're following a specific convention because we're going to want
// to save this image on Docker Hub, where it can be referenced by the tag name that we chose.
// All right, but let's not get ahead of ourselves.
// First thing's first, we want to see our build in action.
// Our Docker file is being built.
// This may take a couple of minutes.
// So let's give the build a chance to complete and then go through the steps from the top.
// It looks like our build succeeded.
// But what exactly just happened, let's look from the top.
// The first thing that happened.
// Was our Docker file was loaded alongside our Docker Ignore file, Docker looked at our base image that
// node image using Alpine Linux and it downloaded that image.
// Piece by piece from the Docker image repository available at the official Docker site.
// And let's see here.
// Once the image was ready, Docker followed through the steps in our Docker file one by one.
// First, setting our working directory.
// Copying the required packaged JSON files, installing them and then copying over the client source code.
// Building that.
// And finally copying over the server source code.
// Each of these steps created a layer 10 layers total that make up our final Docker image.
// The one that we tagged as Naza Dash project under our username.
// This image was saved to our hard drive.
// Remember, our Docker images are just static files, kind of like a video on our hard drive.
// Our application isn't running until we run our image using the Docker run command.
// We saw earlier in this section.
// When we do Doctor Run, a container starts up based on our Docker image.
// This runs step is what makes the video in our analogy.
// Start playing.

// The Docker image is the static file that lives on our hard drive.
// While the container is the result of a running that image of starting it up, we now have our Docker
// image built.
// So let's get that container up and running.
// We're getting to the good part.
// I'll see you there.


// lecture 12


// And the last video we built our Nasser project Docker image, we're now going to use the Docker run
// command to create and run a container from the image that we just built.
// Let's go.
// We're going to do Dr. Arun Dash P. Just like we did before with the getting started image to set the
// portrait mapping from our Docker container, which, if we remember, was exposing Port 8000.
// That's where our API was running.
// So what we're going to do is map port 8000 from our container to port eight thousand on my computer
// here, and instead of passing in that Docker slash getting dash started image, we're going to use our
// own custom image, the one that we just built.
// We tagged that image ourselves as our username slash Nassar Dash project.
// Let me just make this a little more visible for you so we can see the entire command where we'll add
// just three or four more characters.

// docker run -p 8000:8000 username/projectname 
// docker run -it -p 8000:8000 username/projectname

// One thing you'll often see is this Dash it flag.
// This is used because it gives us a terminal into our Docker container.
// It lets us type into our terminal here as if we were in the operating system that's being run in the
// Docker file.
// Let's see what this looks like.
// So we can get a better picture.
// Oops, and we need to pass in the white flag.
// Not at the end, but instead right after our run command, so Docker Ryan, Dash, Dash and so on.
// Let's give that a go.
// Check it out inside of our Docker container node is running our server source code.
// We've connected to MongoDB, found our habitable planets and downloaded our launch data.
// The server is listening on Port eight thousand, just as if we were running node directly on our machine,
// but our application is now running any completely self-contained instance of our application isolated
// from if you remember back to their previous videos.
// The operating system that's currently running on our computer.
// The one that's running this code right now.
// And the great thing is we now have our Naza application running.
// I can access Port 8000, which is being exposed from the Docker container in my browser.
// We're able to access our API through local host on Port eight thousand.
// Just like before we can browse to our launches, for example.
// And we should be able to navigate to our front end as well.
// Check it out.
// Our Docker container is fully operational.
// To summarize, how do we run our applications as Docker containers?
// First, darker bundles are application into an image with the darker build comment based on the instructions
// in our Docker file.
// And it then executes this image in a container using the Docker Orion command, our running container0
// is a completely self-contained instance of our application, isolated from our computer and our host
// operating system.
// Not too complicated, right?
// OK.
// We're almost ready to deploy our application.
// I'll see you in the next video.

// lecture 13

// Welcome back in the last few videos we did what is commonly known as Dhaka raising our Nasser API.
// We used our Docker file here to build an image which we tagged and which we finally ran as a darker
// container.
// The only problem is that this was all on our local machine.
// So how would we publish our image so that we can load it in a server somewhere on the cloud?
// Well, after we've done the Docker build command and we've made sure that we're logged in using our
// Docker login command.

// cm - docker login

// Just like that.
// We can now use this new, darker push command that takes an image and pushes it to our darker image
// cm - docker push username/projectname

// repository, the way to push our images is to pass in our tagged image name.
// So NASCAR Dash project.
// With our username.
// And when we do this, we can see that we're pushing to the official darker sites.
// And darker pushes the chunks of the image one by one to darker hub's image repository.
// When this is done, we get this confirmation in the form of a SHA hash.
// And with our image pushed, we can go to Docker hub.
// And if we refresh, we can see.
// Check it out.
// Our Nassr project repository, which has been defaulted to a private repository.
// And let's see if we click into our Nassar project.
// We have one tagged version of this image.
// The latest, which is running a Linux based image.
// That's our Alpine Linux, and we're ready to go.
// Our project is now available in a darker image hosted in the official Docker repository on Docker Hub.
// This image can be downloaded and even potentially extended from.
// For example, from another Docker file, we could use this from a command and use our image as the base
// image.
// FROM username/projectname:latest 

// So passing in the tag we used when we built this project, we could even point it to the latest version
// tag that we saw on Docker hub that was automatically created when we ran Docker built.
// But the thing that's most important to us.
// We can download our image from Docker hub and run it from any server on the cloud.
// That's what we're going to do.
// It's time to set up our cloud deployments.
// I'll see you in the next one.




// lecture 14

// Welcome back.
// We've talked a lot about the cloud and specifically about Amazon's web services cloud IWC and their
// dominant position.
// Why is Amazon so important to know?
// Why is it used by so many large and small companies back in the earlier days of the internet?
// Amazon started out as a bookstore before growing into retail and then the massive global organization
// that they are today.
// Over the years, as their amount of customers grew and they needed to scale up to support more products,
// more geographical locations, more requests per second.
// As they grew, Amazon got really good at managing their servers that were supporting their giant retail
// platform.
// And they decided to offer their servers as a service that we can essentially rent out.
// Through us, we get access to Amazon's professionally managed servers and now all the additional products
// that they offer on top of those servers.
// Now, you don't have to worry about buying a server somewhere and managing it.
// Replacing parts, making sure that the server doesn't overheat, doing all of the maintenance.
// Amazon owns all of that.
// You, as a customer, pay only for the products and servers that you use, in fact, to encourage new
// users.
// Amazon offers a very competitive free tier, which we can go to by adding slash free to our list that
// Amazon.com you are all.
// The Amazon free tier means that we get access to a bunch of professional grade services for free.
// Remember, sites like Netflix use these same services.
// I recommend that you create an account on IWC and take advantage of this free tier, which offers all
// of these services for free, sometimes for 12 months and sometimes always.
// Once we've created an account on IWC, we can log into what Amazon calls their management console,
// which is our dashboard for all of these services.
// If we go to this list.
// We can see that there are many, many services that Amazon offers now, the most common ones are here
// near the top.
// We'll have EC2 for Amazon's virtualized cloud servers, which use similar virtualization technology
// to what our virtual machines that we talked about earlier use.
// And we have other services like Lambda for serverless computing and running event driven functions.
// And there's also Storage S3, which is the simple storage service that allows us to upload files and
// stores them in a key value store where we can query for what S3 calls objects by their key and fetch
// a file that lives on Amazon's hard drives somewhere in their cloud.
// And we also have our databases.
// So we have our IDs for the relational database service.
// If we wanted to use something like my sequel or Postgres.
// And Dynamo DB, which is Amazon's no sequel database comparable in some ways to a lightweight MongoDB.
// If you've heard of that database.
// I encourage you to click around and explore what each of these services looks like.
// IWC is a very powerful tool with countless options, which is one of the reasons why it's used by all
// these big organizations.
// One of the consequences of this, though, is that with all of these options, you can work with IWC
// for years and only have touched a handful of these different services.
// I know I've never used IWC at mesh or the detective service.
// It's very easy and normal to get overwhelmed by all of these services, but try not to let yourself
// be intimidated.
// No one uses everything in this list.
// In fact, once we start playing around with EC2 and the virtual servers that it provides us, you'll
// be well on your way to understanding IWC and using that knowledge to pick up on any other service here
// that you might be interested in.
// Now, as you're exploring these services, you'll notice that there's this region here at the top right.
// And here you can select from different data centers that Amazon uses.
// Each of these data centers in these regions is accessible from the entire world.
// If that's how you can figure it, but a server hosted in.
// Mumbai will have a lower response time when used by someone in Hong Kong than someone in California,
// for example.
// And it's important to note that when you set up a service in one of these regions, depending on the
// service, sometimes it won't be available in the other regions unless you configure it.
// So try to stay on one region, at least for the start here.
// All right.
// Sign up to us and we're now ready to get started deploying our API.
// Let's get rolling.


// lecture 15


// Welcome back.
// I'm excited.
// This is a really important video.
// We mentioned that Amazon revolutionized the world with easy to.
// MWC was announced in this super low key blog post in 2004, and by 2006, IWC was the first to market
// with a high quality service to create cloud infrastructure.
// They allowed developers to create and manage these virtual EC2 servers more quickly and easily, then
// managing a physical machine, a physical server somewhere easy to made running your servers on the cloud.
// A new best practice, and we're going to launch our own EC2 server and experience the benefits of Amazon's
// hard work.
// Over the past two decades and see why it's still so powerful today, starting from our easy to dashboard
// here, where if we scroll down, we have the ability to get started and launch an Amazon EC2 instance,
// which we now know is a virtual server in the cloud.
// Now, before we get going with this, I just want to point out that you might see a slightly different
// UI easy to has been updating their UI, so you might have seen something.
// Like this with these blue buttons.
// Don't worry.
// Apart from the high level they hear, everything else is exactly the same.
// When we create an easy to instance, we're creating a new virtual machine using Amazon's custom hypervisor,
// which has been heavily optimized and is more performant than the virtual machines that we run on our
// personal computer.
// And as we discussed previously, running in a virtual machine allows Amazon to share resources on their
// servers with different customers while providing privacy and security guarantees for those customers.
// So that one customer's application doesn't interfere with the other customer.
// Let's see this in action.
// If we do this launch instance and kick off this process.
// We see that the first step in launching our easy to server is to choose an Amazon machine image and
// am-I, which we can see is a template that contains the software configuration, including operating
// system and other applications that are required to launch are easy to instance.
// And we see that we have a list of these images with different configurations, different versions of
// Linux and potentially different hardware, some with solid state drives and some potentially without.
// The key here for us is that we want to choose an army that is eligible for the free tier so we can select
// this option here, and we're happy with the first option here.
// Amazon Linux on an SSD and we're going to make sure that it's running in this x86 hardware, where x86
// and arm are two different instruction sets, essentially two different, very low level programming
// languages for a CPU.
// OK, so we're going to select 64 bit x86.
// And the next step is to choose an instance type, and we can see that these different instance types
// have different combinations of CPU for processing power and memory storage and network performance.
// And we have these different instance sizes going from nano all the way up to extra-large and beyond.
// Normally we pay for our EC2 instances by the hour based on the size of the instance that we launch for
// the free tier.
// We always use this micro size, which provides plenty of power for our API, up to the point where we
// get a sudden surge in users and we can always upgrade our instant state.
// Now that we've selected the instance tape, we have the option to launch our instance, but let's see
// what other configuration options we have.
// If we wanted to do some very specific configuration of our instance, we could do this step three,
// where we have various advanced options for configuring the network and the shutdown behavior.
// So for example, do we want to stop or terminate on shut down?
// In most cases, we're OK with a default behavior here.
// So let's go to the next step.
// Add storage.
// If we wanted to persist data on our machine, we could add storage to our EC2 instance, for example,
// if we wanted to save profile photos on our server or even run our database on that server directly.
// But normally we won't need to do this, as will be using other services on Amazon or elsewhere on the
// internet to create our application when we use services that are spread across different computers across
// a network like the internet.
// We call our application a distributed application.
// Each service does part of a task asynchronously and communicates the results with other services.
// So, for example, we would have a dedicated service, a dedicated database for our data rather than
// keeping it on our general purpose EC2 instance.
// So for now, we're going to pass on adding storage to our easy to server.
// There's also an option to add tags to our instance if we have dozens of two instances running.
// And let's say we're part of a large organization.
// Tags make it easier to tell what the roles of each instance are.
// Right now, we're probably going to have only one or two instances running at a time.
// So we're going to move on to the next step.
// Finally, what we're going to do here is configure a security group for our easy to instance only this
// video is getting a bit long.
// So let's take a short break and finish setting up our instance in the next video.
// I'll see you in a bit.


// lecture 16


// Welcome back.
// Let's put our security hats on and finish setting up our easy to instance in a way that allows us to
// use it while also preventing unauthorized hackers from gaining access to it.
// What we're going to do is configure a security group for our two instance, and we can see that a security
// group is a set of firewall rules that control the network traffic to our instance.
// We add rules which specify whether a traffic using certain protocols.
// Like.
// HDP or SMTP or POP3, both of which are email protocols we can control, whether these protocols can
// access our server, we can specify a ports to allow traffic on as well as IP addresses.
// And the example that Amazon gives us is that if we want to set up a web server and allow internet traffic
// to reach our easy to instance, we add rules that allow unrestricted access to HTP and the database
// for encrypted 8TB ports.
// You see, by default, all incoming ports are blocked.
// So when we add a rule, we're adding an exception that allows us to access our server.
// For example, from port eight thousand, which we can remember is the port our Docker file is exposing.
// So we're going to add a rule.
// For our API server on Port eight thousand and our server is responding to and making HTTP requests,
// so we want to select the HDP.
// But wait, we can't change the port here.
// It's stuck at 80.
// Technically, Port 80 is the default port for CDP because we're using a custom port for our API.
// We're going to need to use.
// A different protocol.
// We're going to use the TCP protocol.
// You see, the internet is made up of layers of protocols.
// Which are organized in this Osai model, which breaks down these layers.
// And in fact, it goes beyond just the internet.
// This Osai model, in fact, covers all telecommunications from your phone to the communication inside
// your car, which uses what we call can bus at the physical layer at the lowest layer here to send messages
// to your car's engine, for example.
// Anyway, that's a bit off topic.
// The important bit is that we have a CDP, which is built on top of the TCP, the transmission control
// protocol, which is at a lower level of this model.
// FTP is at the application layer.
// Whereas TCP is at the lower transport layer and TCP is used for protocols that are connection based
// where you need to connect to something before you can communicate with it.
// And also for reliable communication like in HTP, where we send an invalid request or a request that
// times out and we get an error response from the server.
// And just like FTP uses the TCP protocol, if you're familiar with Web sockets, which are used more
// for two way real time communication like in games or chat applications, web sockets are another application
// layer protocol on top of TCP.
// All right, now that we've done a little bit of theory, let's add a rule, a custom TCP rule.
// And set the port.
// That we allow to port eight thousand.
// And we're going to allow connections from every IP address.
// What you see here is an IP address using this C.I.D r notation, which basically allows us to talk about
// ranges of IP addresses, but we're not going to use that.
// We're just seeing that anywhere on the internet that's trying to communicate to us on port, eight thousand
// will be allowed to talk to our server and we're going to do the same for S-H.
// We want to be able to get a secure shell or S.H. into our EC2 instance so we can set up Docker and run
// our API.
// And Sage will allow us to use our terminal to communicate with this remote server on Port 22.
// And just like before, we're going to allow IP addresses from anywhere to use speech.
// If we were working on a high risk application, we could lock down these rules further.
// For example, only allowing associate access from a white list of IP addresses.
// So I would put in my personal IP address here, which would add an extra layer of security.
// But Sage is still secure, even though we've opened it up to anyone to try to assess each in.
// We still need a specific key for that connection to be accepted.
// We'll see that in a moment.
// For now, let's just give our security group a name.
// So let's say Nassau Project Stash SG for Security Group, and we've talked about this warning here.
// We want anyone to be able to access our poor eight thousand to load our Nasser dashboard, and we're
// OK with taking some additional risk by allowing anyone to try to stay in because we still have the protection
// from needing that specific S.H. key for that connection to be allowed.
// And we're going to see that right now.
// So let's review and launch our easy to instance.
// And Amazon is being really cautious about warning us about our security, which is a good thing.
// If we scroll down, we can see the details about our army, our Amazon Linux and our instant state.
// Which was a free tier micro instance.
// As well as the security groups, which we just configured.
// S.H. on Port 22 and our API on Port eight thousand.
// Scrolling down further, if we use some of these additional configuration options, we would see that
// here.
// So our network settings.
// And any storage that we set up.
// We can see here that easy to set up this storage for us by default, for our application and any tags
// if we wanted to set those.
// I'm pretty happy with these settings.
// So let's launch are easy to instance.
// The final step now is to create a key here, which we can use to get a secure shell, a secure terminal
// into our EC2 instance so that we can install Docker and configure it.
// And it's called a key pair because it places one key called a public key on the easy to server.
// And another key, the private key is saved onto your computer.
// For when you try to connect to your easy to instance, this is using what's called public key encryption,
// which is used everywhere on the internet.
// Any time you connect to a site over HTTPS using a secure connection, you're using public key encryption
// where you take this public key and private key combination and use those keys to encrypt your communication
// with the server.
// Very important to ensure that hackers can't get unauthorized access to your easy to server and steal
// your data, potentially or use your API for other malicious purposes.
// So we're going to create a new key here.
// Call it Nassr project key pair.
// And we're going to get this dot p.m. file, which is our private key.
// And when we click download, it's going to be saved onto our machine.
// So we need to keep this file that we just downloaded in a known location and safe because as Amazon
// tells us here, you will not be able to download the file again after it's created to get a new key
// pair, you'll need to create a new EC2 instance and do all of your setup from scratch.
// So let's not lose that.
// It's time to launch.
// Amazon is setting up our instance, and it's telling us that it's launching.
// In a few moments, we'll see that the line succeeded.
// And we'll be able to see our instance in our easy to dashboard.
// Scrolling down and seeing view instances.
// And you can see that I have a few instances here.
// But the one that we just created is currently initializing.
// And if I wanted to name this, I could do that here and say, this is the Nassar project.
// Now we can monitor the status of our instance and see that it's running in, for example, U.S. East
// region.
// With.
// This public IP address.
// And we can see when it was launched.
// As well as a few.
// Status checks, which will be able to see once the instance finishes.
// Starting up.
// Over here.
// Our instance is ready.
// We can see our checks, our passing.
// And we can access it using this public IP.
// So I can browse there in my browser.
// And see what happens if I try to access Port eight thousand.
// Well, it's not connecting.
// There's nothing actually running on our server, even though of our port is exposed.
// We need to deploy our application and we're going to do that next.
// Deployment can be pretty fun.
// And we've learned that easy to a super stable platform for deploying our Docker containers, our code
// or anything that requires a server which we don't want to physically manage.
// We'll see that in action in the next video.
// I'll see you then.



// lecture 17


// Welcome back.
// Before we move on, there's an important concept that as developers, we see all the time we've been
// referring to S.H. or secure shell.
// What exactly does this mean?
// Well, we can see that S.H. is a cryptographic network protocol for operating network services securely
// over an unsecured network.
// Hmm.
// Say is a protocol like HTP.
// And TCP.
// Which is built on.
// We can use the SAGE protocol to communicate between two computers over the internet.
// We can use it to control and configure remote computers using what we can see is a remote command line,
// log in and remote command execution.
// It gives us a secure way of communicating with other computers that encrypts all of the data that we
// send so bad actors can't snoop on or modify our commands.
// If you're using Linux or Mac OS, using Sage is very simple.
// We can use it in our terminal using this as h command.
// If you're on windows, you'll need an SMS client.
// The most popular one for Windows is Putty, which I'll link to in the resources for this lesson with
// Sage.
// We can now connect from our terminal.
// To other computers that have an associates server running, and we do this by using this S.H. command,
// which we've seen and logging in as a user of some sort at a host.
// Where my user might be, for example, Adam and my host is going to be some server somewhere.
// So maybe my server?
// Dot com or an IP address.
// So one one one one one one one one.
// Whatever it is, we know that HTTPS, for example, gives us secure, encrypted communication in the
// browser.
// Well, S.H. is a comparable secure protocol for communicating between two devices, not just a browser
// and an HDTV server, but instead two terminals, two shells.
// That's why it's the secure shell protocol.
// All right, so make sure you have S.H. installed on your computer and we'll connect to a server in the
// next video.
// I'll see you then.




// lecture 18



// Welcome back.
// Previously, we set up our easy to server and created a keep here, which I have copied here to this
// key pairs folder.
// We now know that S.H. allows us to securely connect between two terminals, and we're set up with Sage
// on our machine.
// What we really want to do is connect to our new EC2 server.
// If we go to our easy to dashboard.
// And go to this instances section, we recently created this Nasser project instance, which we can verify
// is running on this IP address.
// If we select this server we see here we have this connect option, which gives us some instructions
// on how to access our instance using an SSA client.
// And if we're on windows, we can use putty.
// So let's connect to our instance.
// We have to locate our private key file, which we remember is this dot pm file that we downloaded,
// and this is going to give us access from our computer to access Amazon's easy to server that we set
// up.
// And we can see that we're going to need to run some commands in our terminal, Amazon even gives us
// the exact command that we'll need.
// So I'm going to copy that and in our terminal, I'm going to go to the folder where I have that private
// key file.
// So for me, that's in this key pairs folder
// So I'm going to cede to my key peers folder with my PM file.
// And if I check which files I have, I only have that PM file.
// It's important that we don't include this private key in our repository with our source code.
// This should live in a separate location, which we never share with anyone else on the internet.
// Because with this file, they'll be able to access our servers and do whatever they want, which we
// don't want.
// So make sure that you don't check this file into your repository by mistake.
// Trust me, this happens a lot.
// OK, and now let's paste this command that we got from Amazon.
// So let's see exactly what we're doing here.
// We're using the search command to open a secure shell connection, and we're passing in this Dash II
// flag for an identity file, which is going to be our private key here.
// The name of the file that we copied.
// This will ensure that S.H. uses this key to try to connect to our server.
// Now the next piece here is the user account that we want to access on our host.
// And we can see that Amazon created this easy to user for us on their machine.
// Whenever we connect to an easy to instance, we're going to be using this user.
// And finally, we have this address here, which if we go back to our Amazon instances, we can see is
// the public DNS of our instance.
// This is basically just the full address of our server.
// And this piece here we can see, is actually exactly the same as our IP.
// So in fact, if we want it to be a little bit more concise, we could copy this IP for public IP and
// use that.
// As our host instead, so we're using this stage.
// And our identity, our private key to connect to the easy to user at our IP address.
// Let's see what happens.
// Assange is asking us to verify that we want to connect to the server, and it's doing this because we've
// never connected to this server before.
// So the first time we do this, we're going to say yes.
// And we can see that now S.H. has permanently added this server to a list of known hosts.
// So now if we try to connect to this server in the future, we should never be asked this question again.
// Associates is making sure that the server behind this address hasn't changed to make sure that we're
// sending our commands to the right server and on Mac OS or Linux, we'll get this warning, which tells
// us that the permissions for our PM file are too open and it refuses the connection.
// So we're going to want to use back in our Connect command.
// Amazon gives us the exact command we need.
// To lock down the permissions for our file.
// Now we could talk about Linux and Mac OS permissions for a whole series of videos, but essentially
// what this command is doing is it's making this private key file only accessible to my user and not to
// other users on my computer.
// And it's also setting this file as read only so that this file is never modified again.
// Amazon is making sure that we're being as secure as possible when interacting with its platform.
// Amazon makes sure that we're secure by default, and that's yet another reason why it's used in large
// organizations that have a lot to protect.
// So we're going to run this command and now try to S.H. into our server again.
// We've logged into our Amazon Linux server.
// We now have a terminal which we can type commands into.
// I can write Ellis or Echo Hello.
// Just like I do into any Linux terminal.
// Now, if we go back to the issue to dashboard, we can see that there's another option here to connect
// to our AC to instance from the browser.
// This will use a browser based S.H. client and we can see this by pressing connect here.
// Amazon is staged in to our EC2 instance, and we can type commands in through our browser.
// Echo, hello.
// Even though we can do this in general, I recommend using an S-H client on your machine because safety
// is something you'll be doing a lot as a developer.
// So it's good to be set up and familiar with how it works on your computer.
// And also, if you get set up with SAGE on your terminal, you won't need to be logged in to us to connect
// to your server.
// Instead, you'll be using your private key file here.
// All right, now that we're connected, let's set up our breakthrough server.
// I'll see you in the next one.


// lecture 19


// Welcome back.
// Now that we can connect to our server using S-H.
// We need to install Docker so that we can run our Docker container inside of Amazon Linux here.
// We have a shell which allows us to run Linux commands.
// One command that we can use on Amazon Linux is the Yammer command.
// Yum is a package manager similar to npm for note.
// It allows us to install and update the applications and packages that we have on Amazon Linux.
// We are going to use this young tool to install Docker.
// We'll start by using Yum!
// To update the existing packages that are installed on our EC2 instance to make sure that we are using

// cm - sudo yum update -y <sudo mean admistrator user>
// cm - sudo yum install docker

// the latest versions with all the latest security updates.
// We'll use the Yum Update command passing in the Dash Y flag, which will just confirm that yes, we
// do want to update everything that can be updated and will run our command as an administrative user
// with full privileges to update our machine.
// So that's the pseudo command which we add to the start of our command.
// Let's update our packages.
// Looks like we're all up to date to install Docker.
// We're going to use Yum install.
// Passing in the name of the package, just like with 9pm.
// In this case, we have this darker package and we're going to install as a administrative user again
// because we're making changes to our machine.
// Let's go.
// Yama is telling us that the darker download is going to require 59 megabytes, which will be two hundred 
// and forty three megabytes when installed.
// I'm going to say yes.
// And continue with the installation.
// Docker has been installed.
// Now we need to start Docker inside of our easy to incidents right here, which we can do using pseudo
// and Docker is a service that runs in the background of our server.

// cm - sudo service docker start
// cm - sudo docker info

// So we're going to use this service command to Docker start, which will start the Docker service in
// the background.
// Now, if we try to do darker.
// Well, we can do that getting a list of all of our Docker commands.
// But if we do say Docker info, let's see what happens.
// Docker info.
// We get this permission denied ever to run any of our darker commands.
// We need to do pseudo.
// Dr.
// And then the command we want to run so we can get information about Docker when we use the pseudo command.

// cm - sudo usermod -a -G docker ec2-user

// Now, if we want to run commands without doing this pseudo to run the command as an administrative user
// with full administrative privileges on our server, we first need to do this pseudo user mod command.
// What we'll do is add this easy to user to the Docker group, so the easy user has access to use Docker,
// so we'll add the easy to user using the Dash a flag to the group.
// So that's Dash G.
// That's called Docker.
// And the name of the user, we're adding, is easy to dash user.
// Just like that.
// Now, in order for this change to be picked up inside this, shall we first need to exit to log out
// of our EC2 instance?
// And let me just clear the console and log right back in.
// Hopefully now we can do darker info without running, it has the administrative user with the pseudo
// command.
// Very nice.
// We're now following the principle of least privilege when running Docker commands.
// Now we can run all of our commands using the easy to user.
// Best of all, we're ready to deploy our Nassr project.
// I'll see you in the next video.


//lecture 20 


// Welcome back.
// We're set up with darker and easy to.
// Now we can finally deploy our Docker image to a W.

// There are dozens of different ways of deploying Docker containers.
// You might read about or see tutorials deploying Docker containers using Docker compose.
// This is a tool for setting up Docker applications with multiple containers.
// Or you might see X.

// The Elastic Container Service, which is the Amazon special build service for deploying Docker containers,
// but X costs money and has a little bit more of a complicated setup for our node project, with just

// one Docker container deploying.
// Using Docker directly on our easy to instance is more than good enough, and it allows us to use that
// IWC free tier.
// So let's get into it now that we can log in to our easy to instance by using S-H and we can run Docker
// commands.
// On our easy to instance.
// Our final step is to get our Docker container running with our production set up for our Naza project.
// Remember when we pushed our Docker image to Docker hub?
// Our repository could be either public or private.
// For private images, we need to log in to our Docker hub accounts in our server.
// We can do that like before using Docker log in.
// Where we used our darker ID, the name of our Docker hub accounts.
// And our password to gain access to our private repositories, if our repository was public, we wouldn't
// need to do this now.
// Using our pre-built Docker image that now lives on Docker hub, the one that we built and tagged earlier,
// we can run a Docker container using that image with the Docker run command.
// If you remember how we ran our container, we passed in the Dash P flag to expose our Port 8000 from
// inside of the container to port eight thousand on the outside.
// We then passed in the name of our repository.
// So in this case, the name of our Docker hub username, and then I called the repository Nassar Dash
// project.
// Because we're running this command in production now.
// I'm going to make just a couple of improvements.
// I'm not going to pass in this Dash eight flag to create a terminal into our Docker container because
// it's not strictly required.

// But what I will pass in is this dash dash restart equals always flag.
// Let's see what this does.
// In the darker documentation, we can see that the Dash Dash Restart flag sets a restart policy so that
// if our application or our container exits or stops, it will be restarted.
// There's a few different options, a few different policies that we can apply.
// One of them being this always restart policy.
// Which says that regardless of how the container exits.
// We definitely want to restart to make sure that our application is running.
// We could also use this on failure restart policy to limit the amount of times that our application or
// our container tries to restart if something is causing it to crash.
// Setting a restart policy is a good idea in production, because if there's an on court error in our
// node application, there's a good chance that our node process will exit.
// This might sound worrying, but if you think about it, if you're not able to handle an error, your
// program could now be in a corrupt state.
// You don't know what the cause of that era was or what effects it's had.
// It could have changed a flag from false to true or done something even more dangerous, so it's safer
// to restart your application and start from the very beginning from a clean state.
// If we go to the joint production practices for error handling and no, yes, where joint is one of the
// long term sponsors behind no tags, they're a company that's contributed a lot to node's development.
// We can see that they say that error handling is a pain, and it's easy to get by for a long time in
// node without dealing with errors correctly.
// But if we scroll down, we can also see that they recommend the best way to recover from programmer
// errors.
// Is do crash immediately?
// Our programs should run using a restart her that will automatically restart the program in the event
// of a crash.
// Something like our Docker restart policy and we can scroll even further.
// And see that while we can use this process thought on event handler to catch on court exceptions in
// our note applications, this is strongly discouraged.
// Again, because we don't know what state the application is in.
// All right.
// So back to deployment in order to keep our container running in a clean, well known state.
// We always restart it when it dies.
// When there's an unknown court error in node, our node process exits, the container stops and our restarts
// policy restarts it.
// So our server is always available.
// These Docker restart policies take the place of other tools, like the Forever Package or PM to.
// Which are often used to restart node processes when they crash.
// We can use this built in Docker feature instead.
// So let's run our container.
// We're going live.
// Docker is pulling our image from a Docker hub.
// Is starting our server, connecting to Mongo, finding the habitable planets and downloading the launch
// data.
// And finally, our server is listening on Port 8000 now.
// Any computer on the internet can go to our server.
// Our Nassar project that's currently running at our public IP address here.
// So I'll copy that and we can browse to our server on Port eight thousand to view our NASCAR dashboard.
// Check it out.
// And in our associates terminal, we have our requests being logged.
// We can now exit our entire S.H. terminal just to make sure that it's not running, so I'll quit that
// and we can still use our server, we can still access each of our pages, even if I refresh our dashboard
// is still available.
// We could even shut down our entire computer and the project will still be available from our EC2 server.
// This means we're now live with the very same code that we started with.
// But some very, very different things happening behind the scenes on the back end.
// How cool is that?
// Congratulations.

