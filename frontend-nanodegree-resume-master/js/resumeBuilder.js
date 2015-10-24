
/*var name = "Koly Sengupta";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);*/


var bio = {
	"name": "Koly Sengupta",
	"role": "Front End Developer",
	"contact": {
		"email":"koly.sg@gmail.com",
		"phone":"9793087575",
		"github":"https://github.com/kolysg",
		"location": "San Ramon, CA"
	},	 

	"skills": ["Web Design", "Graphic Design","Architectural Design","Data Analysis","Basic Programming"],
	"welcomeMessage": "Thanks fvisiting my site",
	"myPic":"koly.jpg"
}

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#main").append(formattedSkills);


var work = {
	"position": "Design Associate",
	"employer": "EnCodePlus LLC",
	"years": "1 year",
	"place": "SugarLand, TX"
}

var education = {
    "schools": [
        {
            "name": "Texas A&M University",
            "city": "College Station, TX, US",
            "degree": "Masters",
            "major": "Urban & Regional Planning",
            "dates": "2011-2013"
        },
        {
            "name": "Bangladesh University of Engineering and Technology",
            "city": "Dhaka, Bangladesh",
            "degree": "Bachelor's",
            "major": "Architecure",
            "dates": "2001-2008"
        }
    ],
    "onlineCourses": [
        {
            "title": "Introduction to programming in Python (Part 1)",
            "school": "Coursera - Rice University",
            "dates": "2014",
            "url": "https://www.coursera.org/course/interactivepython1"
        },
        {
            "title": "Front End Development Nanodegree",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com"
        }
    ]
}



