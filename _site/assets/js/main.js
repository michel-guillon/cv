"use strict";


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    GitHubCalendar("#github-graph", "michel-guillon", { responsive: true });
    
    
    GitHubActivity.feed({ username: "michel-guillon", selector: "#ghfeed" });

function goBack() {
	if (document.referrer == "") {
		window.location.href = "/"
	} else {
		history.back()
	}
}