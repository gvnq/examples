define(function(require, exports, module) {
	var Engine    = require("famous/core/Engine");
	var Surface   = require("famous/core/Surface");
	var Modifier  = require("famous/core/Modifier");
	var Transform = require("famous/core/Transform");

	var mainCtx = Engine.createContext();

	var transform = new Modifier({
	    transform: Transform.translate(200, 100, 0)
	});

	var surface = new Surface({
	    size: [200, 200],
	    content: "Hello World",
	    classes: ["famousTestSurface"],
	    properties: {
	        color: "white",
	        backgroundColor: "#3cf"
	    }
	});

	mainCtx.add(transform).add(surface);
});
