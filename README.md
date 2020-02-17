# Protractor Automation
Automated testing of several pages created in angular. 
The tests are created in JavaScript. They are executed using Protractor. The tested pages can be found at -> [Protractor and AngularJS](http://www.way2automation.com/protractor-angularjs-practice-website.html)


## Setup
## Node.JS
The first step is the installation of the node.js framework. Node.js also has the ability to embed external functionalities or extend a functionality by making use of custom modules. These modules have to be installed separately.

Go to [node.js](https://nodejs.org/en/download/) and download the necessary binary files.

## Protractor
From a command line or terminal window, change directory to your local repository folder and run the package.json with:
***npm install***

This will install the needed dependencies and also two command line tools, protractor and webdriver-manager. Try running **protractor -version** to make sure it's working.
The webdriver-manager is a helper tool, used to easily get an instance of a Selenium Server running.

You will need [Java](https://java.com/en/download/manual.jsp) installed to run the standalone Selenium Server. Check this by running **java -version** from the command line.

***Webdriver Setup***

In a dedicated terminal use the following command, to download the necessary binaries:
***webdriver-manager update***

Now start up a server with:
***webdriver-manager start***

This will start a Selenium Server. Your Protractor tests will send requests to this server to control a local browser. Leave this server running throughout the tutorial. You can see information about the status of the server at http://localhost:4444/wd/hub

## Run tests in chrome
First of all make sure you got google chrome installed, and check the installed version. Download the matching chrome driver from the following link: [chrome driver](https://chromedriver.chromium.org/downloads).

Also make sure that the *hosts* file from the following location, *C:\Windows\System32\drivers\etc*, has a **localhost** defined at **127.0.0.1**

Open a new command line or a terminal window and change the directory to your local repository folder, containig the conf.js file, for testing.
Protractor needs two files to run, a spec file and a configuration file.

Now run the tests with:
***protractor conf.js***
