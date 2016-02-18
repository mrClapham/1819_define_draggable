# OpenFin: 1819 define draggable
The purpose of this demonstration is to show how mouse Events are captured by draggable areas and possibly strategies for tackling the issue - particularly mouseLeave.

When a DOM element is nested within a draggable area that area will prevent standard mouseEvents (see [https://developer.chrome.com/apps/app_window](https://developer.chrome.com/apps/app_window) ).
Nesting a DOM element already nested in a '-webkit-app-region: drag' inside a further DOM element set to '-webkit-app-region: no-drag' and creating a buffer via padding will allow the innermost Dom element to once again receive mouseEvents.



This is a vanilla JavaScript app seed for developing OenFin apps. It is Free from frameworks and build systems, though you may add them as you see fit.

It has a simple Node/Express server for local development.

Clone the repo and run

```
$ npm install
```
NB: on a Mac you may need to type 'sudo npm install'

Navigate to the root folder where 'server.js' resides in your command line tool and run:

```
$ node server
```

This should start a simple Node server at [http://localhost:9070](http://localhost:9070), then, click the link below to install as an openFin app.

If you wish to change to localhost port you will need to change the referances in "server.js", "app.json" and in the installer link below.

[installer](https://dl.openfin.co/services/download?fileName=openfin_windowdragging&config=http://localhost:9070/app.json)
