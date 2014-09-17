Package.describe({
    summary: "Gather and run your functions",
    version: "0.0.1",
    git: "https://github.com/flowkey/functionstack.git"
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.2.1')
	api.use("underscore", "client");
    api.addFiles('functionstack.js', "client");
    api.export('FunctionStack');
});