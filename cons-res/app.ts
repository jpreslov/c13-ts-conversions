const myPreviousPositions: {company: string, title: string, description: string}[] = [
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
const mySkills: {skill: string, cool: boolean}[] = [
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
const myInterests: string[] = ["Music", "Games", "Movies", "Art"];

console.log(
    "Name: " + "Josh Hurn".toUpperCase()
    + "\n" +
    "Career: Full Stack Engineer / Instructor"
    + "\n" +
    "Description: I like turtles"
);

console.log("\n");
console.log("My Interests:");
for (const interest of myInterests) {
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
    displaySkill(element.skill, element.cool)
});

function displayPosition(companyName: string, jobTitle: string, jobDescription: string) {
    console.log("* " + jobTitle + " at " + companyName + ". And I " + jobDescription);
}

function displaySkill(skill: string, isCool: boolean) {
    if (isCool) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
}