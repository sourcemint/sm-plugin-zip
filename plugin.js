
exports.for = function(API, plugin) {

    plugin.extract = function(fromPath, toPath, locator, options) {
    	// TODO: If `unzip` command not found use pure JS implementation.
		return API.OS.exec("unzip '" + fromPath + "' -d '" + toPath + "'").then(function() {
			return 200;
		});
	}
}

