﻿window.addEventListener("load", () => {
	var a = document.querySelector("a.PostLogoutRedirectUri");
	if (a) window.location = a.href;
});
