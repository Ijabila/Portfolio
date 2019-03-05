import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landingpage extends Component {
    render() {
        return (
           <div style={{width: '100%', margin: 'auto'}}>
             <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                        src="https://openclipart.org/image/800px/svg_to_png/313668/1547510251.png" 
                        alt="Man" 
                        className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Front-End Developer</h1>
                    
                        <hr/>

                        <p> HTML/CSS | JavaScript | React | NodeJS | Java |</p>
                        <div className="social-links">
                            <a href="google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-github" aria-hidden="true"/>
                            </a>

                            <a href="google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-twitter" aria-hidden="true"/>
                            </a>

                            <a href="google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-medium" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                </Cell>
             </Grid>
           </div>
        )
    }
}

export default Landingpage;