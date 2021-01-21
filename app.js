const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
const courseData = [{
  class: 8,
  subject: 'Maths',
  faculty: 'Mr. Maths',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisi maximus, molestie tortor non, dignissim dolor. In eleifend non ante ac elementum. Etiam semper nec erat a lobortis. Maecenas elit risus, fermentum sit amet enim a, faucibus dignissim augue. Vestibulum semper erat eleifend molestie eleifend.',
  image:'https://picsum.photos/id/1/200/300',
  topics: ['  Number System','  Polynomials','Coordinate Geometry','  Linear equations in two variable','Introduction to  Euclid System',' Triangles']
},{
  class: 8,
  subject: 'Science',
  faculty: 'Mr. Science',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisi maximus, molestie tortor non, dignissim dolor. In eleifend non ante ac elementum. Etiam semper nec erat a lobortis. Maecenas elit risus, fermentum sit amet enim a, faucibus dignissim augue. Vestibulum semper erat eleifend molestie eleifend.',
  image:'https://picsum.photos/id/1/200/300',
  topics:['Matter in Our Surroundings','Is matter arround us pure','Atoms and Molecules','Structure of Atom',' The fundamental unit of life','Tissues']
},{
  class: 8,
  subject: 'English',
  faculty: 'Mr. English',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisi maximus, molestie tortor non, dignissim dolor. In eleifend non ante ac elementum. Etiam semper nec erat a lobortis. Maecenas elit risus, fermentum sit amet enim a, faucibus dignissim augue. Vestibulum semper erat eleifend molestie eleifend.',
  image:'https://picsum.photos/id/1/200/300',
  topics: ['Reading Comprehension','Writing Skill and Grammar','Literature Textbook and Supplementary Reading Text ']
},{
  class: 9,
  subject: 'Maths',
  faculty: 'Mr. Maths',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisi maximus, molestie tortor non, dignissim dolor. In eleifend non ante ac elementum. Etiam semper nec erat a lobortis. Maecenas elit risus, fermentum sit amet enim a, faucibus dignissim augue. Vestibulum semper erat eleifend molestie eleifend.',
  image:'https://picsum.photos/id/1/200/300',
  topics: ['  Number System','  Polynomials','Coordinate Geometry','  Linear equations in two variable','Introduction to  Euclid System',' Triangles']
},{
  class: 9,
  subject: 'Science',
  faculty: 'Mr. Science',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisi maximus, molestie tortor non, dignissim dolor. In eleifend non ante ac elementum. Etiam semper nec erat a lobortis. Maecenas elit risus, fermentum sit amet enim a, faucibus dignissim augue. Vestibulum semper erat eleifend molestie eleifend.',
  image:'https://picsum.photos/id/1/200/300',
  topics:['Matter in Our Surroundings','Is matter arround us pure','Atoms and Molecules','Structure of Atom',' The fundamental unit of life','Tissues']
},{
  class: 9,
  subject: 'English',
  faculty: 'Mr. English',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisi maximus, molestie tortor non, dignissim dolor. In eleifend non ante ac elementum. Etiam semper nec erat a lobortis. Maecenas elit risus, fermentum sit amet enim a, faucibus dignissim augue. Vestibulum semper erat eleifend molestie eleifend.',
  image:'https://picsum.photos/id/1/200/300',
  topics: ['Reading Comprehension','Writing Skill and Grammar','Literature Textbook and Supplementary Reading Text ']
},{
  class: 10,
  subject: 'Maths',
  faculty: 'Mr. Maths',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisi maximus, molestie tortor non, dignissim dolor. In eleifend non ante ac elementum. Etiam semper nec erat a lobortis. Maecenas elit risus, fermentum sit amet enim a, faucibus dignissim augue. Vestibulum semper erat eleifend molestie eleifend.',
  image:'https://picsum.photos/id/1/200/300',
  topics: ['  Number System','  Polynomials','Coordinate Geometry','  Linear equations in two variable','Introduction to  Euclid System',' Triangles']
},{
  class: 10,
  subject: 'Science',
  faculty: 'Mr. Science',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisi maximus, molestie tortor non, dignissim dolor. In eleifend non ante ac elementum. Etiam semper nec erat a lobortis. Maecenas elit risus, fermentum sit amet enim a, faucibus dignissim augue. Vestibulum semper erat eleifend molestie eleifend.',
  image:'https://picsum.photos/id/1/200/300',
  topics:['Matter in Our Surroundings','Is matter arround us pure','Atoms and Molecules','Structure of Atom',' The fundamental unit of life','Tissues']
},{
  class: 10,
  subject: 'English',
  faculty: 'Mr. English',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisi maximus, molestie tortor non, dignissim dolor. In eleifend non ante ac elementum. Etiam semper nec erat a lobortis. Maecenas elit risus, fermentum sit amet enim a, faucibus dignissim augue. Vestibulum semper erat eleifend molestie eleifend.',
  image:'https://picsum.photos/id/1/200/300',
  topics: ['Reading Comprehension','Writing Skill and Grammar','Literature Textbook and Supplementary Reading Text ']
}
]
 
app.get("/", function (req, res) {
 
    res.render("list", {
       courseDataList: courseData
    });

});

app.get("/courseDetails/:class/:subject", function(req, res){
    var classSelected = req.params.class;
    var subjectSelected = req.params.subject;
    var details = courseData.find(courseRecord => courseRecord.class == classSelected &&  courseRecord.subject == subjectSelected );
    res.render("details", {
      courseDetails: details
   });
});

app.get("*", function (req, res) {
   res.send("Sorry!! There is no domain.Please Go back to Homepage");
});

app.listen("3000", function () {
    console.log("Server Started.");
});