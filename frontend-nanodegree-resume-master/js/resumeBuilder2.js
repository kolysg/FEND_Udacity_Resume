//This resumeBuilder includes resume-sections of bio, work, projects and education. At the end, this also includes googlemap links of locations lived and worked.

//bio
var bio = {
	"name": "Koly Sengupta",
	"role": "Front End Developer",
	"contacts": {
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

bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	$("#topContacts").append(formattedEmail);

	var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
	$("#topContacts").append(formattedPhone);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwit);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
	$("#topContacts").append(formattedPic);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#topContacts").append(formattedWelcomeMsg);

//var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
//$("#topContacts").append(formattedPic);


//SkillSet for-in method
	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
		
	}

}
bio.display();


//Work Experience
var work = {
	"jobs" : [
	{
		"title": "Design Associate",
		"employer": "EnCodePlus LLC",
		"dates": "February 2014 - November 2014",
		"location": "SugarLand, TX",
		"description": "Provided technical supports to the planning, development and maintenance of the company’s unique code publishing software 'enCodePlus'. Provided codification support for the municipal codes of client-cities. Created branding graphics, marketing materials and site designs for the client-cities. Provided website management support through HTML coding. Managed project worksheets and salesforce databases."
	},
	{
		"title": "Planning Intern",
		"employer": "City of Bryan",
		"dates": "August 2012 - December 2012",
		"location": "Bryan, TX",
		"description": "Developed the City’s first GIS database for the city’s Tax Increment Reinvestment Zones (TIRZ). Recorded minutes, prepared presentations, organized offical documents for regular ‘Planning Commission’ and ‘Historic Landmark Commission’ meetings. Attended Site Review meetings, assisted in occasional site visits."
	},
	{
		"title": "Associate Architect",
		"employer": "Alpha Real Estate",
		"dates": "January 2010 - September 2011",
		"location": "Chittagong, Bangladesh",
		"description": "Developed architectural designs for two residential apartment projects in Dhaka, Bangladesh. Attended regular site visits, client meetings, managed site developers. Prepared and managed official drawings and documents."
	}

	]
}
work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedEmploymentDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedEmploymentDates);
		var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedJobLocation);
		var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedJobDescription);
	}

}
work.display();

//Education
var education = {
    "schools": [
        {
            "name": "Texas A&M University",
            "location": "College Station, TX, US",
            "degree": "Master's",
            "major": ["Urban & Regional Planning"],
            "dates": "2013"
        },
        {
            "name": "Bangladesh University of Engineering and Technology",
            "location": "Dhaka, Bangladesh",
            "degree": "Bachelor's",
            "major": ["Architecure"],
            "dates": "2008"
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
education.display = function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	    var formattedSchool = formattedName + formattedDegree;
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedschoolLocation);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolMajor);
	}
	//online courses
	$("#education").append(HTMLonlineClasses);
	for(course in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedonlineCourse = formattedonlineTitle + formattedonlineSchool
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedonlineCourse);
		$(".education-entry:last").append(formattedonlineDates);
		$(".education-entry:last").append(formattedonlineUrl);
	}

}
education.display();

//Projects
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
projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedProjectDate);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
//Why if statement in here??
		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}

	}
}
projects.display();


//Loc



//Locationizer
function locationizer(work){
	var locationArray = [];
	for (job in work.jobs){
		var newLocation = work.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;	
}

//Internationalize
function inName(name){
	var name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice[0,1].toUpperCase() + name[0].slice[1].toLowerCase();
	name[1] = name[1].toUpperCase;
	return name[0] + "" + name[1];
}

$("#main").append(internationalizeButton);	
$("#mapDiv").append(googleMap);



