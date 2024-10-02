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



