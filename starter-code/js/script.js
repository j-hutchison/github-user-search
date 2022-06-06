const r = document.querySelector(":root");
const themeSelector = document.querySelector(".theme-selector");
const btnSearch = document.querySelector(".search-btn");
const srchbar = document.querySelector(".search-bar");
const errorMessage = document.querySelector(".search-error-message");

/* GITHUB USER FIELDS */
const userProfileImg = document.querySelector(".user-pfp");
const userProfileName = document.querySelector(".username");

const userProfileUrl = document.querySelector(".profile-link");
const userDateJoined = document.querySelector(".date-joined");
const userBio = document.querySelector(".user-bio");

const userRepos = document.querySelector(".repos");
const userFollowers = document.querySelector(".followers");
const userFollowing = document.querySelector(".following");
const userLocation = document.querySelector(".link--user-location");
const userTwitterProfile = document.querySelector(
	".link--user-twitter-profile"
);
const userWebsite = document.querySelector(".link--user-website");
const userAddress = document.querySelector(".link--user-address");

/* LIGHT MODE SETTINGS */
const lightTheme = document.querySelector(".light");
const lightBgColor = "#f2f2f2";
const lightSectionColor = "#fefefe";
const lightTextColor = "#4b6a9b";
const lightHeading1Color = "#222731";
const lightHeading2Color = "#2b3442";

/* DARK MODE SETTINGS */
const darkTheme = document.querySelector(".dark");
const darkBgColor = "#141D2F";
const darkSectionColor = "#1E2A47";
const darkTextColor = "#FFFFFF";

const renderUser = async function (e) {
	try {
		errorMessage.classList.add("hidden");
		errorMessage.innerHTML = "";

		const srchUsername = srchbar.value;
		console.log(srchUsername);

		if (srchUsername.length === 0) throw new Error("Invalid search");

		const user = await fetch(`https://api.github.com/users/${srchUsername}`);

		if (!user.ok) throw new Error("No results");
		const json = await user.json();
		console.log(user);
		console.log(json);

		userProfileImg.src = json.avatar_url;
		userProfileName.innerHTML = json.name;
		userProfileUrl.href = `https://github.com/${json.login}`;
		userProfileUrl.innerHTML = `@${json.login}`;
		// userDateJoined.innerHTML = json.created_at;
		let dateJoined = new Date(json.created_at);
		dateJoined = `Joined ${dateJoined.getDate()}-${dateJoined.getMonth()}-${dateJoined.getFullYear()}`;
		userDateJoined.innerHTML = dateJoined;

		userBio.innerHTML = json.bio ?? "This profile has no bio";

		userRepos.innerHTML = json.public_repos;
		userFollowers.innerHTML = json.followers;
		userFollowing.innerHTML = json.following;
		userLocation.innerHTML = json.location;

		userTwitterProfile.innerHTML = json.twitter_username ?? "Not Available";
		userTwitterProfile.href = `https://twitter.com/${json.twitter_username}`;

		userWebsite.innerHTML = json.blog || "Not Available";
		userWebsite.href = json.blog;

		userAddress.innerHTML = json.company ?? "Not Available";

		// clear search bar
	} catch (e) {
		console.log(e);
		// TODO: ADD/DISPLAY ERROR MESSAGE TO UI
		errorMessage.classList.remove("hidden");
		errorMessage.innerHTML = e.message;
	}
};

const toggleLightDarkMode = function (e) {
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
};

themeSelector.addEventListener("click", toggleLightDarkMode);
btnSearch.addEventListener("click", renderUser);
// themeSelector.addEventListener("keydown", toggleLightDarkMode);
// btnSearch.addEventListener("keydown", renderUser);
