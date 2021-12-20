import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

// experience showcases job experience, in a list highlighting tech im familiar with
// 
//
//
export class ExperienceComponent implements OnInit {


  
  fieldsupport = {
    title: "Field Support Engineer",
    content: ["Testing functionality and configuring the electronic devices based on the client’s mission",
        "Communicated with the client’s vendors to provide feedback on equipment being used by the team",
     "Provided feedback on biometric prototypes to beXer suit the client’s mission"]
  };
  
    softwaredeveloper = {
      title: "C Software Developer", 
      content: ["Went through over 500 lines of Fortran code wriXen by previous developers, to document its utlity.",
    "Rewrote the Fortran in the C programming language, and performed preliminary tesKng on the code to determine its effecKveness.",
  "Provided weekly updates to the team on the progress of the project. When feedback was provided by the team I integrated it into my efforts to best support the team’s goals."]
  };

frontend = {
  title: "Angular Frontend Developer",
  content: ["Worked with senior developer to create the mock up of the front end design",
  "Used Angular, CSS, and HTML to create the front end of an operaKonal web site",
  "Presented results to the team, and incorporated feedback into the next iteraKon of the site."]
}



  constructor() {  

  }

  ngOnInit(): void {
  }

}
