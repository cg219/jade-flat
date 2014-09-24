exports.description = "Sets up a project that uses JADE templates without a backend";

exports.template = function(grunty, init, complete){
	init.process({}, [
		init.prompt("name"),
		init.prompt("description"),
		init.prompt("version", "0.1.0"),
		init.prompt("author_name"),
		init.prompt("author_url")
	], function(err, props){
		var files = init.filesToCopy(props);

		init.copyAndProcess(files, props);
		init.writePackageJSON("[package.json", {
			name: props.name,
			version: props.version,
			description: props.description,
			author: {
				name: props.author_name,
				url: props.author_url
			},
			devDependencies : {
			    "grunt" : "~0.4.5",
			    "grunt-contrib-clean": "~0.6.0",
			    "grunt-contrib-copy": "~0.5.0",
			    "grunt-contrib-cssmin": "~0.10.0",
			    "grunt-contrib-less": "~0.11.4",
			    "grunt-contrib-uglify": "~0.5.1",
			    "grunt-contrib-watch": "^0.6.1",
			    "grunt-contrib-jade": "^0.12.0",
			    "grunt-focus": "^0.1.1"
			}
		});

		complete();
	})
}