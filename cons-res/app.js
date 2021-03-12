"use strict";
var myPreviousPositions = [
    {
        company: "United States Forest Service",
        title: "Wildland Firefighter",
        description: "fought wildfires"
    },
    {
        company: "Red Mountain Park",
        title: "Zipline Guide",
        description: "pushed people out of trees"
    },
    {
        company: "Cracker Barrell",
        title: "Chef de Cuisine",
        description: "washed dishes"
    }
];
var mySkills = [
    {
        skill: "Googling",
        cool: true
    },
    {
        skill: "Bow Staff skills",
        cool: true
    },
    {
        skill: "Writing Bagel Bite fan fiction",
        cool: false
    },
    {
        skill: "Doing math",
        cool: false
    }
];
var myInterests = ["Music", "Games", "Movies", "Art"];
console.log("Name: " + "Josh Hurn".toUpperCase()
    + "\n" +
    "Career: Full Stack Engineer / Instructor"
    + "\n" +
    "Description: I like turtles");
console.log("\n");
console.log("My Interests:");
for (var _i = 0, myInterests_1 = myInterests; _i < myInterests_1.length; _i++) {
    var interest = myInterests_1[_i];
    console.log("* " + interest);
}
console.log("\n");
console.log("My Previous Experience:");
myPreviousPositions.forEach(function (element) {
    displayPosition(element.company, element.title, element.description);
});
console.log("\n");
console.log("My Skills:");
mySkills.forEach(function (element) {
    displaySkill(element.skill, element.cool);
});
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("* " + jobTitle + " at " + companyName + ". And I " + jobDescription);
}
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("* BAM: " + skill);
    }
    else {
        console.log("* " + skill);
    }
}
