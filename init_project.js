const fs = require("fs");
const fs_options = { encoding: "utf8" };
const exec = require("child_process").execSync;
const mustache = require("mustache");

function main() {
  if (mustacheNotInstalled()) {
    console.log("Mustache not found. Installing...");
    installMustacheAndExit();
  }
  
  console.log("Loading project_model.json file...");
  const projectModel = JSON.parse(fs.readFileSync("project_model.json", fs_options.encoding));

  // loop through the manifest and create project files based on the project model
  projectModel.manifest.forEach(function (element) {
    initProjectFile(element, projectModel);
  });
}

function initProjectFile(manifestEntry, projectModel) {
  console.log("Initializing project file: " + manifestEntry.out);
  let templateContents = fs.readFileSync(manifestEntry.in, fs_options.encoding);
  let fileContents = mustache.render(templateContents, projectModel.global);
  fs.writeFileSync(manifestEntry.out, fileContents, fs_options);
}

function mustacheNotInstalled() {
  try {
    require.resolve("mustache");
    return false;
  } catch (e) {
    return true;
  }
}

function installMustacheAndExit() {
  const cmd = "npm install mustache";
  console.log(exec(cmd, options));
  console.log("Mustache install completed. Rerun project init script to complete init.");
  process.exit();
}

main();