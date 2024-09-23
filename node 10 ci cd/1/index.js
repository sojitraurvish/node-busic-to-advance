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
