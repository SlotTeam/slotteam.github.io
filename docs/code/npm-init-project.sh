$ mkdir /your-project-path/mySlotProject
$ cd /your-project-path/mySlotProject

$ npm init

It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (nodeModule) mySlotProject
version: (0.0.0)
description: Description for your project
entry point: (index.js)
test command:
git repository:
keywords:
author: Carlos Echeverria
license: (ISC) MIT
About to write to /your-project-path/mySlotProject/nodeModule/package.json:

{
  "name": "mySlotProject",
  "version": "0.0.0",
  "description": "Description for your project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Carlos Echeverria",
  "license": "MIT"
}

Is this ok? (yes)


{
  "name": "myFirstModule",
  "version": "0.0.0",
  "description": "Description for your project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Carlos Echeverria",
  "license": "MIT",
  "dependencies":{
    "slot-framework": "1.0.0"
  }
}
