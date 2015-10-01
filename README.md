# Learning JS - TRINUG Presentation (9/30/2015)

Contains files presented during Learning JS Presentation

You can download this repository. If you want to run locally, you can either use IISExpress or nodejs, basically anything that will host static html/js files. If you want to use nodejs, I installed nodejs 4.X, and then used the following npm command, 'npm install http-server -g', after that I went to the folder with these files and then ran the following command, 'http-server' and the site was then hosted at 'http://localhost:8080/'

Things that were demo'd during presentation:

1. jquery.fittext.js and app.js contain the first set of code that was looked at
2. modernizr-custom.js, specifically lines 802, 3796 is the second set of code that was looked at
3. trinug.runTimers() in app.js and lolex.js was the last set of code that we looked at, specifically we did the following:
   1. c = lolex.install();
   2. c.tick(999);
   3. c.tick(1);
   4. c.tick(4000);
   5. //optionally
   6. c.uninstall();
 
Other stuff you could look at:

1. There is a autosize.js library that is applied to the Your Comment field in the app. This library causes the textarea to automatically expand as more text is entered into the text area. You might read the source code to figure out how it does this. Look in app.js to see how it applies the autosize library to the Comment field.
2. This app has a simple modal dialog library called vex, you could try the following commands in the console while reading the vex source code (vex.js and vex.dialog.js):
    1. vex.dialog.alert("Hello, World");
    2. vex.dialog.prompt({callback: function (value) { console.log('user entered ' + value); } });
    3. vex.dialog.confirm({message: 'Is it Wednesday?', callback: function (value) { console.log('is it wednesday: ' + value); }});
3. The app has a validation library you could look at as well, it is jquery.validate.js. Try putting a breakpoint on line 1186 of jquery.validate.js. Then go enter text into the e-mail field and attempt to submit the form. After that you might try updating the email text. This will show you what kinds of events that the validation library attaches to and how it performs email validation.
4. Lastly, if you are really adventurous I included a simple Angular app and simple Knockout JS app in the angular/ and knockout/ subfolders. You could breakpoints in these libraries to figure out how some of the features of these libraries are implemented.

Other Resources:

1. http://youmightnotneedjquery.com/
2. http://microjs.com/
