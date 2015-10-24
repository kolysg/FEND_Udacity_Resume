var bio = {
	"name": "Koly Sengupta",
	"role": "Front End Developer",
	"contactInfo": {
		"email": "koly.sg@gmail.com",
		"phone": "979----7575",
		"twitter":"KolySG",
		"github":"kolysg",
		"location": "East Bay, California"

	},
	"pic": "Me.png",
	//"pic": "https://scontent-ord1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/11390120_10207208987806072_75049282207992131_n.jpg?oh=d2f2e7b4e70a341e6a14c3cad9943ab0&oe=568D812F",
	"welcomeMessage": "Thanks for visitng my page. If you like my work and think I can be a good fit, please contact me in the address provided.",
	//"skills": ["Inquisitive", "Persistent", "Agile", "Pixel-perfectionist"]
	"skills": ["HTML5", "CSS3", "Javascript", "Python", "Adobe CreativeSuit", "CorelDraw", "Sketchup", "AutoCAD", "GIS"]
	
}


var work = {
	"jobs" : [
	{
		"title": "Design Associate",
		"employer": "EnCodePlus LLC",
		"dates": "February 2014 - November 2014",
		"place": "SugarLand, TX",
		"description": "Provided technical supports to the planning, development and maintenance of the company’s unique code publishing software 'enCodePlus'. Provided codification support for the municipal codes of client-cities. Created branding graphics, marketing materials and site designs for the client-cities. Provided website management support through HTML coding. Managed project worksheets and salesforce databases."
	},
	{
		"title": "Planning Intern",
		"employer": "City of Bryan",
		"dates": "August 2012 - December 2012",
		"place": "Bryan, TX",
		"description": "Developed the City’s first GIS database for the city’s Tax Increment Reinvestment Zones (TIRZ). Recorded minutes, prepared presentations, organized offical documents for regular ‘Planning Commission’ and ‘Historic Landmark Commission’ meetings. Attended Site Review meetings, assisted in occasional site visits."
	},
	{
		"title": "Associate Architect",
		"employer": "Alpha Real Estate",
		"dates": "January 2010 - September 2011",
		"place": "Chittagong, Bangladesh",
		"description": "Developed architectural designs for two residential apartment projects in Dhaka, Bangladesh. Attended regular site visits, client meetings, managed site developers. Prepared and managed official drawings and documents."
	}

	]
}

var education = {
    "schools": [
        {
            "name": "Texas A&M University",
            "city": "College Station, TX, US",
            "degree": "Masters",
            "major": ["Urban & Regional Planning"],
            "dates": "2011-2013"
        },
        {
            "name": "Bangladesh University of Engineering and Technology",
            "city": "Dhaka, Bangladesh",
            "degree": "Bachelor's",
            "major": ["Architecure"],
            "dates": "2001-2008"
        }
    ],
    "onlineCourses": [
        
        {
            "title": "Front End Development Nanodegree",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com"
        }, 

        {
            "title": "Introduction to Computer Science",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com"
        },

        {
            "title": "Introduction to programming in Python (Part 1)",
            "school": "Coursera - Rice University",
            "dates": "2014",
            "url": "https://www.coursera.org/course/interactivepython1"
        },

        {
            "title": "Programming Foundations with Python",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com"
        },

        {
            "title": "How to use Git and Github",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com"
        }
    ]
}

var projects = {

	"projects" : [
		{
		"title" : "Online Portfolio",
		"date" : "August - Sept 2015",
		"description" : "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework.The page is fully responsive and works on mobile, tablet, and desktop browsers.",
		"images" : [
		"github link"
		]
	},

	{
		"title" : "Online Resume",
		"date" :"Sept - Oct 2015",
		"description" :"Developed a personal resume page using Javascript and Jquery.",
		"images" : [
		"github link"
		]
	}

	]
}
	

var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
$("#header").prepend(formattedName);

var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo["email"]);
$("#topContacts").append(formattedEmail);

var formattedPhone = HTMLmobile.replace("%data%", bio.contactInfo.phone);
$("#topContacts").append(formattedPhone);

var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
$("#topContacts").append(formattedGithub);

var formattedTwit = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
$("#topContacts").append(formattedTwit);

var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
$("#topContacts").append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
$("#topContacts").append(formattedPic);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#topContacts").append(formattedWelcomeMsg);

//var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
//$("#topContacts").append(formattedPic);


// Skillset
if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
	$("#skills").append(formattedSkill);
}

//Work Experience

function displayWork(){
	for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedEmploymentDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedEmploymentDates);
	var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].place);
	$(".work-entry:last").append(formattedJobLocation);
	var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedJobDescription);
}

}

displayWork();
