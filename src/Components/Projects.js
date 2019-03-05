import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '180px', background: 'url(https://image.slidesharecdn.com/reactpp-140913113910-phpapp02/95/reactjs-code-impact-1-638.jpg?cb=1410608441) center / cover'}}> React Project #1</CardTitle>
                        <CardText>ASJSJSJJ DSKJJSDN: jsjdjdjdjdj djddj sksksskskskskskskskskskskskskskssknsdjnjd</CardText>
                        <CardActions borde r>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '180px', background: 'url(https://image.slidesharecdn.com/reactpp-140913113910-phpapp02/95/reactjs-code-impact-1-638.jpg?cb=1410608441) center / cover'}}> React Project #1</CardTitle>
                        <CardText>ASJSJSJJ DSKJJSDN: jsjdjdjdjdj djddj sksksskskskskskskskskskskskskskssknsdjnjd</CardText>
                        <CardActions borde r>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '180px', background: 'url(https://image.slidesharecdn.com/reactpp-140913113910-phpapp02/95/reactjs-code-impact-1-638.jpg?cb=1410608441) center / cover'}}> React Project #1</CardTitle>
                        <CardText>ASJSJSJJ DSKJJSDN: jsjdjdjdjdj djddj sksksskskskskskskskskskskskskskssknsdjnjd</CardText>
                        <CardActions borde r>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            ) 
        } else if(this.state.activeTab === 1){
            return(
                <div>
                    <h1>This is Angular</h1>
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>This is Vue</h1>
                </div>
            )
        }
    }

    
    render() {
        return (
           <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                </Tabs>

                
                   <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                   </Grid> 
               
           </div>
        )
    }
}

export default Projects;