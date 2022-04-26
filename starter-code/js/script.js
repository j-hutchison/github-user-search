const r = document.querySelector(":root");
const themeSelector = document.querySelector(".theme-selector");
const lightTheme = document.querySelector(".light");
const darkTheme = document.querySelector(".dark");

const darkBgColor = "#141D2F";
const darkSectionColor = "#1E2A47";
const darkTextColor = "#FFFFFF";

const lightBgColor = "#f2f2f2";
const lightSectionColor = "#fefefe";
const lightTextColor = "#4b6a9b";
const lightHeading1Color = "#222731";
const lightHeading2Color = "#2b3442";

themeSelector.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(e.target);
	const hasDark = e.target.closest(".dark");
	const hasLight = e.target.closest(".light");

	console.log(hasDark);
	console.log(hasLight);

	if (hasDark) {
		r.style.setProperty("--bg-color", darkBgColor);
		r.style.setProperty("--heading-1-color", darkTextColor);
		r.style.setProperty("--heading-2-color", darkTextColor);
		r.style.setProperty("--main-bg-color", darkSectionColor);
		r.style.setProperty("--user-activity-bg-color", darkBgColor);
		r.style.setProperty("--txt-theme-color", darkTextColor);

		lightTheme.classList.remove("hidden");
		darkTheme.classList.add("hidden");
	}
	// get current theme
	if (hasLight) {
		r.style.setProperty("--bg-color", lightBgColor);
		r.style.setProperty("--heading-1-color", lightHeading1Color);
		r.style.setProperty("--heading-2-color", lightHeading2Color);
		r.style.setProperty("--main-bg-color", lightSectionColor);
		r.style.setProperty("--user-activity-bg-color", lightSectionColor);
		r.style.setProperty("--txt-theme-color", lightTextColor);

		darkTheme.classList.remove("hidden");
		lightTheme.classList.add("hidden");
	}

	// toggle light / dark mode div
});
