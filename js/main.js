
(function() {
	var timer = 1000,
		times = 10,
		el = document.querySelector(".secs");
	el.textContent = times;
	setInterval(function() {
		if (times === 0) {
			window.location = "http://drdk.github.io/docs-ux/layouts/";
		} else {
			times--;
			el.textContent = times;
		} 
	}, timer);
})(window);
