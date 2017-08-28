# wz-react-starter

Maintaining a react/redux/saga/bootstrap/webpack starter project with a structure that makes sense to me and may make sense to others. Borrowed from a variety of other starter projects, stack exchange articles, and made my own tweaks.

# How to use
Before using, you must clone this, initialize the project, and then rebase the configured starter projet as a local git project.

The following clones the starter repos and disconnects it from the source project

```
cd <projects_directory>
git clone --depth 1 https://github.com/webzeppelin/wz-react-starter.git <your_project_name>
cd <your_project_name>
rm -rf .git

```

Now you need to tell the starter project things about your project by editing the "project_model.json" file.

```json
{
  "global": {
    "projectName": "your-react-app",
    "initialVersion": "1.0.0",
    "projectDescription": "Replace this with your project's description.",
    "homePageTitle": "Your React-Redux App",
    "gitSiteUrl": "https://github.com/webzeppelin/wz-react-starter",
    "gitCloneUrl": "https://github.com/webzeppelin/wz-react-starter.git",
    "devServerHost": "localhost",
    "devServerPort": "8080",
    "author": "The Unknown Developer",
    "license": "MIT"
  },
  "manifest": [
    {
      "out": "package.json",
      "in": "package.template.json"
    },
    {
      "out": "webpack.config.js",
      "in": "webpack.config.template.js"
    },
    {
      "out": "public/index.html",
      "in": "public/index.template.html"
    },
    {
      "out": "src/components/common/Header.js",
      "in": "src/components/common/Header.template.js"
    },
     {
      "out": "src/components/common/Footer.js",
      "in": "src/components/common/Footer.template.js"
    }
  ]
}
```

Just edit the globals values to match your new project.  Once you are done with editing the starter project model you need to initialize the project before beginning development.  From the top level directory of the project, run the following:

```
node init_project.js
```

This will use the embedded project file templates to create critical project files for your project.
