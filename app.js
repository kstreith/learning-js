trinug = {};
(function () {
    trinug.runTimers = function() { 
		setTimeout(function () {
			$("#commentForm").css({"backgroundColor": "blue"});
		}, 1000);
		setTimeout(function () {
			$("#commentForm").css({"backgroundColor": "white"});
		}, 3000);
	};
	$("#commentForm").validate();
	autosize($("#ccomment"));
	$("#title").fitText();
    vex.defaultOptions.className = 'vex-theme-os';		
}());