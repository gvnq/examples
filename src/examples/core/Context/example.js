define(function(require, exports, module) {
	var Engine = require("famous/core/Engine");
	var Surface = require("famous/core/Surface");

	var mainCtx = Engine.createContext();

	mainCtx.add(new Surface({
	    size: [undefined, undefined],
	    content: "I am a surface",
	    properties: {
	        backgroundColor: "#3cf"
	    }
	}));
});
