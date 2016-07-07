//-----------------------------------------------the bio section-----------------------------------
// Define bio object
var bio = {
    "name": "<a href=https://www.linkedin.com/in/jillstapleton>Jill Stapleton</a>",
    "role": "Current - Product Owner, Future - front end developer, After that - full stack developer",
    "contacts": {
        "mobile": "510-499-xxxx",
        "email": "JillStapleton@yahoo.com",
        "github": "https://github.com/JillStapleton/",
        "location": "Hayward, CA",
    },
    "welcomeMessage": "Hi, thanks for looking at my resume.",
    "biopic": "images/me.jpg",
    "skills": ["systems thinking", " learning new things", " playing well with others"]
};

bio.display = function() {
    //Replace data in helper.js file with data from the bio object
    var bio_name = HTMLheaderName.replace("%data%", bio.name);
    var bio_role = HTMLheaderRole.replace("%data%", bio.role);
    var bio_welcomMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var bio_mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var bio_email = HTMLemail.replace("%data%", bio.contacts.email);
    var bio_github = HTMLgithub.replace("%data%", bio.contacts.github);
    var bio_location = HTMLlocation.replace("%data%", bio.contacts.location);
    var bio_pic = HTMLbioPic.replace("%data%", bio.biopic);

    //Place data on the page: prepend for info that goes above the line
    $("#header").prepend(bio_role);
    $("#header").prepend(bio_name);

    //Place data on the page: append for info that goes below the line
    $("#header").append(bio_pic);
    $("#header").append(bio_welcomMessage);
    $("#topContacts, #footerContacts").append(bio_mobile);
    $("#topContacts, #footerContacts").append(bio_email);
    $("#topContacts, #footerContacts").append(bio_github);
    $("#topContacts, #footerContacts").append(bio_location);

    //look for skills in the bio object, and if present put them under the Skills header
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var bio_skills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(bio_skills);
        }
    }
};
bio.display();

//-----------------------------------------------the work section-----------------------------------
//Define work object
var work = {
    "jobs": [{
        "employer": "Kaiser",
        "title": "Product Owner",
        "dates": "January 2016-Present",
        "location": "Oakland, CA",
        "description": "Scaled Agile Product Owner for Core HR module configuration of Oracle " +
            "HCM Cloud. Lead a cross funcitonal team of nine diverse scrum team members. " +
            "Manage Core HR three year project build time line, requirements, user stories, " +
            "and product backlog."
    }, {
        "employer": "Kaiser",
        "title": "Business Process Consultant",
        "dates": "January 2015 - December 2015",
        "location": "Alameda, CA",
        "description": "Co-lead year long cross functional effort to define business processes " +
            "and business requirements for implementation of Oracle HCM cloud. "
    }]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        //Place header
        $("#workExperience").append(HTMLworkStart);
        //Replace data in helper.js variables with data from the work object
        var work_employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var work_title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var work_dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var work_location = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var work_description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var work_all = work_employer + work_title + work_dates + work_location + work_description;
        //Place data on the page
        $(".work-entry:last").append(work_all);
    }
};
work.display();

//-----------------------------------------------the projects section-----------------------------------
var projects = {
    //Define project object
    "projects": [{
        "title": "Bobbin Lace",
        "dates": "1997-2000",
        "description": "I had a brief obsession with bobbin lace. It seems that the more detailed" +
            " a craft is, the more I like it. I believe this bodes well for programming and it's" +
            " blasted semicolons and commas.",
        "images": ["images/bobbin.jpg", "images/bobbin2.jpg"]
    }, {
        "title": "Tatting",
        "dates": "1997-2010",
        "description": "I had a longer period of working with tatting (it takes way less room).",
        "images": ["images/tatting.jpg", "images/tatting2.jpg"]
    }, {
        "title": "Parenting",
        "dates": "2011 and beyond",
        "description": "Just in case you're wondering why I stopped my ultra cool hobbies... Well, there were babies.",
        "images": ["images/baby.jpg", "images/kids.jpg"]
    }]
};

projects.display = function() {
    for (var item = 0; item < projects.projects.length; item++) {
        //Place header
        $("#projects").append(HTMLprojectStart);
        //Replace data in helper.js variables with data from the projects object
        var projects_title = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
        var projects_dates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
        var projects_description = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
        var projects_all = projects_title + projects_dates + projects_description;
        // place project info on the page
        $(".project-entry:last").append(projects_all);
        //replace data in HTMLprojectImage with each appropriate image, place them on the page
        for (var pic = 0; pic < projects.projects[item].images.length; pic++) {
            var projects_images = HTMLprojectImage.replace("%data%", projects.projects[item].images[pic]);
            $(".project-entry:last").append(projects_images);
        }
    }

};
projects.display();

//-----------------------------------------------the education section-----------------------------------
//Define education object
var education = {
    "schools": [{
        "name": "University of San Francisco",
        "location": "San Francisco, CA",
        "degree": "BA",
        "majors": ["Urban Studies"],
        "dates": "2000",
        "url": "http://www.sfsu.edu/"
    }],
    "onlineCourses": [{
        "Title": "Intro to Programming",
        "School": "Udacity",
        "Dates": "2016",
        "URL": "www.udacity.com"
    }, {
        "Title": "Front-End Web Developer ",
        "School": "Udacity",
        "Dates": "Expected completion: 2016",
        "URL": "www.udacity.com"
    }, {
        "Title": "Full Stack Web Developer",
        "School": "Udacity",
        "Dates": "Expected completion: 2017",
        "URL": "www.udacity.com"
    }]
};

education.display = function() {
    for (var schooled = 0; schooled < education.schools.length; schooled++) {
        //Place header
        $("#education").append(HTMLschoolStart);

        //Replace data in helper.js variables with data from the education object
        var education_name = HTMLschoolName.replace("%data%", education.schools[schooled].name);
        var education_degree = HTMLschoolDegree.replace("%data%", education.schools[schooled].degree);
        var education_dates = HTMLschoolDates.replace("%data%", education.schools[schooled].dates);
        var education_location = HTMLschoolLocation.replace("%data%", education.schools[schooled].location);
        var education_major = HTMLschoolMajor.replace("%data%", education.schools[schooled].majors);
        var education_all = education_name + education_degree + education_dates + education_location + education_major;
        //Place data on the page: append for info that goes below the line
        $(".education-entry:last").append(education_all);
    }
    for (var onLine = 0; onLine < education.onlineCourses.length; onLine++) {
        //Place header
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        //Replace data in helper.js variables with data from the onLineEd object
        var onLineEd_title = HTMLonlineTitle.replace("%data%", education.onlineCourses[onLine].Title);
        var onLineEd_school = HTMLonlineSchool.replace("%data%", education.onlineCourses[onLine].School);
        var onLineEd_dates = HTMLonlineDates.replace("%data%", education.onlineCourses[onLine].Dates);
        var onLineEd_url = HTMLonlineURL.replace("%data%", education.onlineCourses[onLine].URL);
        var onLineEd_all = onLineEd_title + onLineEd_school + onLineEd_dates + onLineEd_url;
        //Place data on the page: append for info that goes below the line
        $(".education-entry:last").append(onLineEd_all);

    }
};
education.display();

//-----------------------------------------------the remainder section-----------------------------------
//Place internationalized button on page
$("#main").append(internationalizeButton);
//Place map on the page
$("#mapDiv").append(googleMap);