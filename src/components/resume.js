import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell className="resume-left" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="images/profpic1.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Rafay Chaudhary</h2>
                        <h4 style={{color: 'grey'}}>Student | Software Engineer</h4>
                        <hr style={{borderTop: '3px solid rgb(50, 126, 158)', width: '50%'}}/>
                        <p>I am currently a Junior at Augusta University majoring in Computer  
                        Science. I have completed a few internships and am eager to work
                        and learn more. Thank you for viewing my site!
                        </p>
                        <hr style={{borderTop: '3px solid rgb(50, 126, 158)', width: '50%'}}/>
                        <h5>Address</h5>
                        <p className="address">4012 Firethorn Court, 30907</p>
                        <h5>Phone</h5>
                        <a href="tel:7068367846">
                            <p>(706) 836-7846</p>
                        </a>
                        <h5>Email</h5>
                        <a href="mailto:rafay96@gmail.com">
                            <p>rafay96@gmail.com</p>
                        </a>
                        <h5>Web</h5>
                        <a href="https://rafayc.netlify.com" target="_blank" rel="noopener noreferrer">
                            <p>rafayc.netlify.com</p>
                        </a>
                        <hr style={{borderTop: '3px solid rgb(50, 126, 158)', width: '50%'}}/>
                        <h5>For a PDF of my resume click below</h5>
                        <a href="images/Resume_2020.pdf" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-file-pdf-o"/>
                        </a>
                        <hr style={{borderTop: '3px solid rgb(50, 126, 158)', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2018}
                            endYear={2021}
                            major="B.S. Computer Science"
                            schoolName="Augusta University"
                            schoolDescription="RELEVANT COURSES: Data Structures & Algorithms, Design & Analysis of Algorithms, 
                            Internet Programming, Foundations of Data Science, Differental Equations, Complex Variables"
                        />
                        
                        <Education
                            startYear={2014}
                            endYear={2018}
                            schoolName="Augusta University"
                            major="B.S. Cell & Molecular Biology"
                            
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2020}
                            endYear="Present"
                            jobName="Software Engineer -- Freelance (S&D Paper Inc.)"
                            jobDescription1="- Developed database to organize inventory for customer reducing shipping/ordering errors "
                            jobDescription2="- Created and deployed website for customer improving outreach for the company "
                            jobDescription3="- Automated employee time off process.  "
                        />

                        <Experience
                            startYear={2018}
                            endYear={2020}
                            jobName="Software Engineer Intern (Full-Stack) -- Department of Energy"
                            jobDescription1="- Developed front/back-end for an application to track spending, ﬁnances, and savings across company and to help share excess funding to various projects on site"
                            jobDescription2="- Wrote the front/back-end of an application for the I.S.S.O. that collects and displays all security controls to ensure secure application development site-wide"
                            jobDescription3="- Created front-end of an application used to track progression of various projects"
                        />

                        <Experience
                            startYear={2015}
                            endYear={2016}
                            jobName="Data Analyst Intern -- Vitamin C LLC"
                            jobDescription1="- Used software to target and analyze speciﬁc populations and evaluate the likelihood of successful outcomes in various campaigns"
                            jobDescription2="- Detected and corrected corrupt or inaccurate records of information in secure database"
                            jobDescription3="- Helped with maintenance of software and data cleansing"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        
                        <h2>Skills</h2>

                        <h4>Back-End</h4>
                        <Skills
                            skill="C#"
                            progress={95}
                        />

                        <Skills
                            skill="Java"
                            progress={95}
                        />
                     
                        <Skills
                            skill="SQL"
                            progress={95}
                        />

                        <Skills
                            skill="Python"
                            progress={85}
                        />

                        <h4>Front-End</h4>
                        
                        <Skills
                            skill="HTML/CSS"
                            progress={95}
                        />

                        <Skills
                            skill="JavaScript"
                            progress={90}
                        />

                        <Skills
                            skill="ReactJS"
                            progress={90}
                        />

                        <Skills
                            skill="AngularJS"
                            progress={75}
                        />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;