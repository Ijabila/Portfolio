import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return (
           <div className="contact-body">
               <Grid className="contact-grid">
                  <Cell col={6}>
                        <h2>Ishidi Ijabila</h2>
                        <img src="https://cdn.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                             alt="avatar" 
                             style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </Cell>
                  <Cell col={6}>
                        <h2>Contact Me</h2>
                        
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Acme'}}>
                                        <i className="fa fa-phone" aria-hidden="true"/>
                                        (+234) 80 740 119 07
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Acme'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        ishidipurijabila@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Acme'}}>
                                        <i className="fa fa-twitter" aria-hidden="true"/>
                                        @IshidiII
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div> 

                  </Cell>  
               </Grid>
           </div>
        )
    }
}

export default Contact;