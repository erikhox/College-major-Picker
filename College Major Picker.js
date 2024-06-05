//Empty list to store the button input data
var list = [];
//Grand list of majors
var majorList = getColumn("College Majors & Incomes", "Major");
//List of majors that are considered STEM majors
var stemMajors = ["Petroleum Engineering", "Mining And Mineral Engineering", "Metallurgical Engineering", 
    "Naval Architecture And Marine Engineering", "Chemical Engineering",
    "Nuclear Engineering", "Actuarial Science", "Astronomy And Astrophysics", 
    "Mechanical Engineering", "Electrical Engineering",
    "Computer Engineering", "Aerospace Engineering", "Biomedical Engineering", 
    "Materials Science", "Engineering Mechanics Physics And Science",
    "Biological Engineering", "Industrial And Manufacturing Engineering", "General Engineering", 
    "Architectural Engineering", "Computer Science",
    "Electrical Engineering Technology", "Materials Engineering And Materials Science", 
    "Management Information Systems And Statistics", "Civil Engineering", "Construction Services",
    "Operations Logistics And E-Commerce", "Miscellaneous Engineering", "Environmental Engineering", 
    "Engineering Technologies", "Geological And Geophysical Engineering",
    "Industrial Production Technologies", "Nuclear, Industrial Radiology, And Biological Technologies", 
    "Mathematics", "Computer And Information Systems", "Physics",
    "Medical Technologies Technicians", "Information Sciences", "Statistics And Decision Science", 
    "Applied Mathematics", "Pharmacology",
    "Oceanography", "Engineering And Industrial Management", "Mathematics And Computer Science", 
    "Computer Programming And Data Processing", "Cognitive Science And Biopsychology",
    "Miscellaneous Engineering Technologies", "Mechanical Engineering Related Technologies", "Genetics", 
    "Agricultural Economics", "Physical Sciences",
    "Military Technologies", "Chemistry", "Electrical, Mechanical, And Precision Technologies And Production", 
    "Microbiology", "Computer Administration Management And Security",
    "Biochemical Sciences", "Botany", "Computer Networking And Telecommunications", 
    "Geology And Earth Science", "Miscellaneous Health Medical Professions",
    "Geosciences", "Environmental Science", "Transportation Sciences And Technologies", 
    "Natural Resources Management", "Neuroscience",
    "Atmospheric Sciences And Meteorology", "Forestry", "Soil Science", 
    "Miscellaneous Biology", "Biology", "Ecology"];
//List of majors that are considered humanities
var humanitiesMajors = ["Court Reporting", "Public Policy", "Miscellaneous Fine Arts", "Nursing", 
    "Finance",
    "Economics", "Business Economics", "Accounting", "School Student Counseling", "International Relations",
    "General Business", "Architecture", "International Business", "Pharmacy Pharmaceutical Sciences And Administration",
    "Miscellaneous Business & Medical Administration",
    "Agriculture Production And Management", "General Agriculture", "Miscellaneous Social Sciences",
"United States History", "Industrial And Organizational Psychology",
    "Business Management And Administration", "Marketing And Marketing Research", "Political Science And Government", "Geography", 

"Human Resources And Personnel Management",
    "Pre-Law And Legal Studies", "Public Administration", "Social Psychology", "Communications", 
"Criminal Justice And Fire Protection",
    "Commercial Art And Graphic Design", "Journalism", "Multi-Disciplinary Or General Science", 
"Advertising And Public Relations", "Area Ethnic And Civilization Studies",
    "Special Needs Education", "Physiology", "Criminology", "Nutrition Sciences", "Health And Medical Administrative Services",
    "Communication Technologies", "General Education", "History", "French German Latin And Other Common Foreign Language Studies", 
"Intercultural And International Studies",
    "Social Science Or History Teacher Education", "Community And Public Health", "Mathematics Teacher Education", 
"Educational Administration And Supervision", "Health And Medical Preparatory Programs",
    "Sociology", "Mass Media", "Treatment Therapy Professions", "Hospitality Management", "Language And Drama Education",
    "Linguistics And Comparative Language And Literature", "Miscellaneous Education", "Interdisciplinary Social Sciences", 
"Secondary Teacher Education", "General Medical And Health Services",
    "Philosophy And Religious Studies", "Art And Music Education", "English Language And Literature", "Elementary Education", 
"Physical Fitness Parks Recreation And Leisure",
    "Liberal Arts", "Film Video And Photographic Arts", "General Social Sciences", "Plant Science And Agronomy", 
"Science And Computer Teacher Education",
    "Psychology", "Music", "Physical And Health Education Teaching", "Art History And Criticism", "Fine Arts",
    "Family And Consumer Sciences", "Social Work", "Animal Sciences", "Visual And Performing Arts", 
"Teacher Education: Multiple Levels",
    "Miscellaneous Psychology", "Human Services And Community Organization", "Humanities", 
"Theology And Religious Vocations", "Studio Arts",
    "Cosmetology Services And Culinary Arts", "Miscellaneous Agriculture", "Anthropology And Archeology", 
"Communication Disorders Sciences And Services", "Early Childhood Education",
    "Other Foreign Languages", "Drama And Theater Arts", "Composition And Rhetoric", "Zoology", 
"Educational Psychology",
    "Clinical Psychology", "Counseling Psychology", "Library Science"];
//List of majors that are considered low paying
var lowPaying = [
    "Chemistry", "Electrical, Mechanical, And Precision Technologies And Production", 
    "Business Management And Administration", "Marketing And Marketing Research", "Political Science And Government",
    "Geography", "Microbiology", "Computer Administration Management And Security", 
    "Biochemical Sciences", "Botany",
    "Computer Networking And Telecommunications", "Geology And Earth Science", 
    "Human Resources And Personnel Management", "Pre-Law And Legal Studies", "Miscellaneous Health Medical Professions",
    "Public Administration", "Geosciences", "Social Psychology", 
    "Environmental Science", "Communications",
    "Criminal Justice And Fire Protection", "Commercial Art And Graphic Design", 
    "Journalism", "Multi-Disciplinary Or General Science", "Advertising And Public Relations",
    "Area Ethnic And Civilization Studies", "Special Needs Education", 
    "Physiology", "Criminology", "Nutrition Sciences",
    "Health And Medical Administrative Services", "Communication Technologies", 
    "Transportation Sciences And Technologies", "Natural Resources Management", "Neuroscience",
    "Multi/Interdisciplinary Studies", "Atmospheric Sciences And Meteorology", 
    "Forestry", "Soil Science", "General Education",
    "History", "French German Latin And Other Common Foreign Language Studies", 
    "Intercultural And International Studies", "Social Science Or History Teacher Education", "Community And Public Health",
    "Mathematics Teacher Education", "Educational Administration And Supervision", 
    "Health And Medical Preparatory Programs", "Miscellaneous Biology", "Biology",
    "Sociology", "Mass Media", "Treatment Therapy Professions", 
    "Hospitality Management", "Language And Drama Education",
    "Linguistics And Comparative Language And Literature", "Miscellaneous Education", 
    "Interdisciplinary Social Sciences", "Ecology", "Secondary Teacher Education",
    "General Medical And Health Services", "Philosophy And Religious Studies", 
    "Art And Music Education", "English Language And Literature", "Elementary Education",
    "Physical Fitness Parks Recreation And Leisure", "Liberal Arts", 
    "Film Video And Photographic Arts", "General Social Sciences", "Plant Science And Agronomy",
    "Science And Computer Teacher Education", "Psychology", 
    "Music", "Physical And Health Education Teaching", "Art History And Criticism",
    "Fine Arts", "Family And Consumer Sciences", "Social Work", 
    "Animal Sciences", "Visual And Performing Arts",
    "Teacher Education: Multiple Levels", "Miscellaneous Psychology", 
    "Human Services And Community Organization", "Humanities", "Theology And Religious Vocations",
    "Studio Arts", "Cosmetology Services And Culinary Arts", 
    "Miscellaneous Agriculture", "Anthropology And Archeology", "Communication Disorders Sciences And Services",
    "Early Childhood Education", "Other Foreign Languages", 
    "Drama And Theater Arts", "Composition And Rhetoric", "Zoology",
    "Educational Psychology", "Clinical Psychology", 
    "Counseling Psychology", "Library Science"];
//"Yes" button, which adds a "1" to the list
onEvent("yes1", "click", function( ) {
  list[0] = 1;
});

//"No" button, which adds a "0" to the list
onEvent("no1", "click", function( ) {
  list[0] = 0;
});

//"STEM" button, which adds a "1" to the list and activates the function "sort"
onEvent("stem", "click", function( ) {
  list[1] = 1;
  sort(majorList);
});

//"Humanities" button, which adds a "0" to the list and acivates the function "sort"
onEvent("humanities", "click", function( ) {
  list[1] = 0;
  sort(majorList);
});

//Resets the code to its original settings
onEvent("reset", "click", function ( ) {
  list = [];
  majorList = getColumn("College Majors & Incomes", "Major");
  setText("text3", "Your 3 recommended majors are");
});

//redos the random generation of majors from majorList
onEvent("redo", "click", function ( ) {
  setText("text3", "Your 3 recommended majors are" + "\n -" + majorList[randomNumber(0, majorList.length-1)] + 
          "\n -" + majorList[randomNumber(0, majorList.length-1)] + "\n -" + majorList[randomNumber(0, majorList.length-1)]);
});

//function which grabs the majors from a list
//then filters the list depending on the options the user chooses
function sort(n) {
  var i = 0;
  if (list[0] == 0 && list[1] == 0) {
    for (i = 0; i < n.length; i++) {
      if (stemMajors.indexOf(n[i]) != -1) {
        n.splice(i, 1);
        i--;
        setText("text3", "Your 3 recommended majors are" + "\n -" + n[randomNumber(0, n.length-1)] + 
                "\n -" + n[randomNumber(0, n.length-1)] + "\n -" + n[randomNumber(0, n.length-1)]);
      }
    }
  } else if (list[0] == 0 && list[1] == 1) {
      for (i = 0; i < n.length; i++) {
        if (humanitiesMajors.indexOf(n[i]) != -1) {
          n.splice(i, 1);
          i--;
        setText("text3", "Your 3 recommended majors are" + "\n -" + n[randomNumber(0, n.length-1)] + 
                "\n -" + n[randomNumber(0, n.length-1)] + "\n -" + n[randomNumber(0, n.length-1)]);
      }
    }
  } else if (list[0] == 1 && list[1] == 1) { 
      for (i = 0; i < n.length; i++) {
        if (humanitiesMajors.indexOf(n[i]) != -1) {
          n.splice(i, 1);
          i--;
        setText("text3", "Your 3 recommended majors are" + "\n -" + n[randomNumber(0, n.length-1)] + 
                "\n -" + n[randomNumber(0, n.length-1)] + "\n -" + n[randomNumber(0, n.length-1)]);
      }
    }
      for (i = 0; i < n.length; i++) {
        if (lowPaying.indexOf(n[i]) != -1) {
          n.splice(i, 1);
          i--;
        setText("text3", "Your 3 recommended majors are" + "\n -" + n[randomNumber(0, n.length-1)] + 
                "\n -" + n[randomNumber(0, n.length-1)] + "\n -" + n[randomNumber(0, n.length-1)]);
      }
    }
  } else if (list[0] == 1 && list[1] == 0) { 
      for (i = 0; i < n.length; i++) {
        if (stemMajors.indexOf(n[i]) != -1) {
          n.splice(i, 1);
          i--;
        setText("text3", "Your 3 recommended majors are" + "\n -" + n[randomNumber(0, n.length-1)] + 
                "\n -" + n[randomNumber(0, n.length-1)] + "\n -" + n[randomNumber(0, n.length-1)]);
      }
    }
      for (i = 0; i < n.length; i++) {
        if (lowPaying.indexOf(n[i]) != -1) {
          n.splice(i, 1);
          i--;
        setText("text3", "Your 3 recommended majors are" + "\n -" + n[randomNumber(0, n.length-1)] + 
                "\n -" + n[randomNumber(0, n.length-1)] + "\n -" + n[randomNumber(0, n.length-1)]);
      }
    }
  } else {
    setText("text3", "Error, Reset");
  }
}