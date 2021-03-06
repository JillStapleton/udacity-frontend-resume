
// Define bio object
 var bio = {
	"name":"Jill Stapleton",
	"role":"Current - Product Owner, Future - front end developer, After that - full stack developer",
	"contacts":
		{
		"mobile":"510-499-xxxx",
		"email":"JillStapleton@yahoo.com",
		"github":"I have it, but I don't really get how to use it yet",
		"location":"Hayward, CA",
		},
	"biopic":"images/fry.jpg",
	"welcomeMSG":"Hi, thanks for looking at my resume.",
	"skills":["programming"," systems thinking", " learning new things"," playing well with others"]
	//display()
}

//Replace data in helper.js file with data from the bio object
var bio_name=HTMLheaderName.replace("%data%",bio.name);
var bio_role=HTMLheaderRole.replace("%data%",bio.role);
var bio_mobile=HTMLmobile.replace("%data%",bio.mobile);
var bio_email=HTMLemail.replace("%data%",bio.email);
var bio_twitter=HTMLtwitter.replace("%data%",bio.twitter);
var bio_github=HTMLgithub.replace("%data%",bio.github);
var bio_blog=HTMLblog.replace("%data%",bio.blog);
var bio_location=HTMLlocation.replace("%data%",bio.location);
var bio_pic=HTMLbioPic.replace("%data%",bio.biopic);
var bio_welcomMSG=HTMLblog.replace("%data%",bio.welcomeMSG);
var bio_lower_all=bio_pic+bio_mobile+bio_email+bio_twitter+bio_github+bio_blog+bio_location+bio_welcomMSG;


//Place data on the page: prepend for info that goes above the line
$("#header").prepend(bio_role);
$("#header").prepend(bio_name);

//Place data on the page: append for info that goes below the line
$("#header").append(bio_lower_all);


//look for skills in the bio object, and if present put them under the Skills header
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for(var i=0;i<4;i++){
		var bio_skills=HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(bio_skills);
	}
}

var work = {
	//Define work object
	"jobs": [
	{
	"employer":"Kaiser",
	"title":"Product Owner",
	"dates":"January 2016-Present",
	"location":"Oakland, CA",
	"description":"Scaled Agile Product Owner for Core HR module configuration of Oracle "+
		"HCM Cloud. Lead a cross funcitonal team of nine diverse scrum team members. "+
		"Manage Core HR three year project build time line, requirements, user stories, "+
		"and product backlog."
	},
	{
	"employer":"Kaiser",
	"title":"Business Process Consultant",
	"dates":"January 2015 - December 2015",
	"location":"Alameda, CA",
	"description":"Co-lead year long cross functional effort to define business processes "+
		"and business requirements for implementation of Oracle HCM cloud. "
	}
	]
}
//work.display = 

	$("#workExperience").append(HTMLworkStart); 
	//Place header - all of the headers are outside the for loop because I like it better with one header, and multiple entries
	for(var job in work.jobs) {
		//Replace data in helper.js variables with data from the work object
		var work_employer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var work_title=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var work_dates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var work_location=HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var work_description=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		var work_all=work_employer+work_title+work_dates+work_location+work_description;
		//Place data on the page
		$(".work-entry:last").append(work_all);
	}

var projects={
	//Define project object
	"project":[
	{
	"title":"Bobbin Lace",
	"dates":"1997-2000",
	"description":"I had a brief obsession with bobbin lace. It seems that the more detailed"+
		" a craft is, the more I like it. I believe this bodes well for programming and it's"+
		" blasted semicolons and commas.",
	"image":["images/bobbin.jpg"]
	}
	]
	//display()
}

$("#projects").append(HTMLprojectStart);
//Place header
for(var item in projects.project) {
	//Replace data in helper.js variables with data from the projects object
	var projects_title=HTMLprojectTitle.replace("%data%",projects.project[item].title);
	var projects_dates=HTMLprojectDates.replace("%data%",projects.project[item].dates);
	var projects_description=HTMLprojectDescription.replace("%data%",projects.project[item].description);
	var projects_image=HTMLprojectImage.replace("%data%",projects.project[item].image);
	var projects_all=projects_title+projects_dates+projects_description+projects_image;
	//Place data on the page: append for info that goes below the line
	$(".project-entry:last").append(projects_all);
}

//Define education object
var education={
	"schools":[
		{
		"name":"University of San Francisco",
		"location":"San Francisco, CA",
		"degree":"BA",
		"majors":"Urban Studies",
		"dates":"2000",
		"url":"http://www.sfsu.edu/"
		}
	],
	"onlineCourses":[
		{
		"onlineTitle":"Intro to Programming",
		"onlineSchool":"Udacity",
		"onlineDates":"2016",
		"onlineURL":"www.udacity.com"
		},
		{
		"onlineTitle":"Front-End Web Developer ",
		"onlineSchool":"Udacity",
		"onlineDates":"Expected completion: 2016",
		"onlineURL":"www.udacity.com"
		},
		{
		"onlineTitle":"Full Stack Web Developer",
		"onlineSchool":"Udacity",
		"onlineDates":"Expected completion: 2017",
		"onlineURL":"www.udacity.com"
		}
	]
	//dislplay()
};

$("#education").append(HTMLschoolStart);
//Place header
for(var schooled in education.schools) {
	//Replace data in helper.js variables with data from the education object
	var education_name=HTMLschoolName.replace("%data%",education.schools[schooled].name);
	var education_degree=HTMLschoolDegree.replace("%data%",education.schools[schooled].degree);
	var education_dates=HTMLschoolDates.replace("%data%",education.schools[schooled].dates);
	var education_location=HTMLschoolLocation.replace("%data%",education.schools[schooled].location);
	var education_major=HTMLschoolMajor.replace("%data%",education.schools[schooled].majors);
	var education_all=education_name+education_degree+education_dates+education_location+education_major;
	//Place data on the page: append for info that goes below the line
	$(".education-entry").append(education_all);
}


$(".education-entry").append(HTMLonlineClasses);
//Place header
for(var onLine in education.onlineCourses) {	
	console.log("hi");
	//Replace data in helper.js variables with data from the onLineEd object
	var onLineEd_title=HTMLonlineTitle.replace("%data%",education.onlineCourses[onLine].onlineTitle);
	var onLineEd_school=HTMLonlineSchool.replace("%data%",education.onlineCourses[onLine].onlineSchool);
	var onLineEd_dates=HTMLonlineDates.replace("%data%",education.onlineCourses[onLine].onlineDates);
	var onLineEd_url=HTMLonlineURL.replace("%data%",education.onlineCourses[onLine].onlineURL);
	var onLineEd_all=onLineEd_title+onLineEd_school+onLineEd_dates+onLineEd_url;
	//Place data on the page: append for info that goes below the line
	$(".education-entry").append(onLineEd_all);

};

//Place internationalized button on page
$("#main").append(internationalizeButton);
//Place map on the page
$("#mapDiv").append(googleMap);


