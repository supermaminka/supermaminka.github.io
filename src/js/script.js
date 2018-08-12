var menu = document.getElementById("menu");
var toggle = document.getElementById("toggle");

toggle.addEventListener(
	"click",
	function() {
		if (menu.classList.contains("show-menu")) {
			menu.classList.remove("show-menu");
		} else {
			menu.classList.add("show-menu");
		}
	},
	false
);

(function() {
	var youtube = document.querySelectorAll(".youtube");

	for (var i = 0; i < youtube.length; i++) {
		var source =
			"https://img.youtube.com/vi/" +
			youtube[i].dataset.embed +
			"/hqdefault.jpg";

		var image = new Image();
		image.src = source;
		image.addEventListener(
			"load",
			(function() {
				youtube[i].appendChild(image);
			})(i)
		);

		youtube[i].addEventListener("click", function() {
			var iframe = document.createElement("iframe");

			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute("allowfullscreen", "");
			iframe.setAttribute(
				"src",
				"https://www.youtube.com/embed/" +
					this.dataset.embed +
					"?rel=0&showinfo=0&autoplay=1"
			);

			this.innerHTML = "";
			this.appendChild(iframe);
		});
	}
})();
