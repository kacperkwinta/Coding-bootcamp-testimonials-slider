"use strict";

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

const opinion = document.querySelector(".graduate-opinion");
const graduateName = document.querySelector(".graduate-name");
const graduateRole = document.querySelector(".graduate-role");
const image = document.querySelector(".graduate-img");

// Dummy content for slides
const opinions = [
	`"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in
	the job of my dreams and so excited about the future."`,

	`"This coding course was a great investment for me. The instructor was knowledgeable, engaging, and made the learning experience enjoyable. I'm now able to build my own websites and apps and have even started freelancing as a web developer."`,

	`"I highly recommend this programming course for anyone who wants to learn how to code. The instructor explains complex concepts in a way that's easy to understand, and the hands-on projects help reinforce the material. Thanks to this course, I was able to land my first programming job."`,

	`"I was skeptical about online coding courses, but this one exceeded my expectations. The curriculum was well-organized, the videos were informative, and the instructor was responsive to questions. I feel confident in my ability to tackle any coding challenge that comes my way."`,

	`"I have taken several programming courses before, but none have been as effective as this one. The instructor's teaching style is engaging and the course content is practical and relevant to real-world programming scenarios. I have already started implementing what I have learned in my job."`,
];
const names = [
	`Tanya Sinclair`,
	`Sarah Patel`,
	`Alex Wong`,
	`Emily Chen,`,
	`Michael Johnson`,
];
const roles = [
	`UX Engineer`,
	`Senior Software Engineer`,
	`Data Scientist`,
	`UX Designer`,
	`Cybersecurity Analyst`,
];

// Default state
opinion.innerHTML = opinions[0];
graduateName.innerHTML = names[0];
graduateRole.innerHTML = roles[0];
image.src = `images/image-0.jpg`;

function changeContent(counter) {
	image.src = `images/image-${counter}.jpg`;
	opinion.innerHTML = opinions[counter];
	graduateName.innerHTML = names[counter];
	graduateRole.innerHTML = roles[counter];
}

let counter = 1;
btnPrev.addEventListener("click", function () {
	counter--;
	if (counter < 0) {
		counter = opinions.length - 1;
	}
	changeContent(counter);
});

btnNext.addEventListener("click", function () {
	counter++;
	if (counter >= opinions.length) {
		counter = 0;
	}
	changeContent(counter);
});
