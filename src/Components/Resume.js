import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Skills from './Skills';


class Resume extends Component {
    render() {
        return (
           <div>
               <Grid>
                  <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" alt="Avatar" style={{height: '200px'}} />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Ishidi Ijabila</h2>
                        <h4 style={{color: 'grey'}}>Software Developer</h4>
                        <hr style={{borderTop: '3px solid #833FB2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        <hr style={{borderTop: '3px solid #833FB2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Middle of Nowhereington, somewhere in the UK</p>
                        <h5>Phone</h5>
                        <p>123 456 789 0</p>
                        <hr style={{borderTop: '3px solid #833FB2', width: '50%'}}/>
                  </Cell>
                  <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        
                        <Education 
                            startYear={2002}
                            endYear={2006}
                            schoolName="My University"
                            schoolDescription="Asdf sksksksksk sksksksksksks sksksksksks sksksksksks sksksksksk"
                        />

                        <Education 
                            startYear={2007}
                            endYear={2009}
                            schoolName="My 2nd University"
                            schoolDescription="Asdf sksksksksk sksksksksksks sksksksksks sksksksksks sksksksksk"
                        />
                        <hr style={{borderTop: '3px solid #E22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill="JavaScript"
                            progress={100}
                        />

                        <Skills
                            skill="HTML/CSS"
                            progress={100}
                        />

                        <Skills
                            skill="React"
                            progress={60}
                        />

                        <Skills
                            skill="Java"
                            progress={50}
                        />

                        <Skills
                            skill="Node"
                            progress={40}
                        />


                  </Cell> 
               </Grid>
           </div>
        )
    }
}

export default Resume;