import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state={ activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                        React Tutorial Site
                    </CardTitle>
                    <CardText>
                        A website built to learn React, React Router, and React Bootsrap.
                        It was the building block to this current site.
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/rafay-c/Website-Personal" target="_blank">Github</Button>
                        <Button colored href="https://rafaych.netlify.com/" target="_blank">Live Host</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <br/>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                        Recipe App
                    </CardTitle>
                    <CardText>
                        An application which uses Edamame's API to generate different recipes based off
                        search criteria. Displays nutritional, allergy, and serving size information. 
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/rafay-c/Recipe-App" target="_blank">Github</Button>
                        <Button colored href="https://reciperc.netlify.com" target="_blank">Live Host</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <br/>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                        Travel application
                    </CardTitle>
                    <CardText>
                        This is a <b>current</b> project which will be an application that helps you book
                        rooms for a vacation get-away <b>NOTE: THIS PROJECT IS NOT YET COMPLETE.</b>
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        
        else if(this.state.activeTab ===1){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://fsa.zobj.net/crop.php?r=SXkcusnnDpOYeLTUiS8aQcfhIx_f2hLjcLHsE3qAI0wm116OxMnalrYMpPWhjbFLRSHmwpnthdpVK0-WpKUchg01q_H5usrcmBgew5LOzFqRI5xZP2_WuCwVWkkVnMGy-XWF-DghiO85OdMG) center / cover'}}>
                        Amazon Price Tracker
                    </CardTitle>
                    <CardText>
                        An application which tracks the price of a certain product on Amazon.
                        Desired price is set by the user, who will be emailed if current item price 
                        falls below desired price. 
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/rafay-c/Amazon-Price-Tracker" target="_blank">Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <br/>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://fsa.zobj.net/crop.php?r=SXkcusnnDpOYeLTUiS8aQcfhIx_f2hLjcLHsE3qAI0wm116OxMnalrYMpPWhjbFLRSHmwpnthdpVK0-WpKUchg01q_H5usrcmBgew5LOzFqRI5xZP2_WuCwVWkkVnMGy-XWF-DghiO85OdMG) center / cover'}}>
                        Reddit Image Scrape
                    </CardTitle>
                    <CardText>
                        An image scraper built to learn python fundamentals. The user passes in 
                        a subreddit url and all images will be scraped and put into a folder.
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/rafay-c/Image-Scraper" target="_blank">Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <br/>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://fsa.zobj.net/crop.php?r=SXkcusnnDpOYeLTUiS8aQcfhIx_f2hLjcLHsE3qAI0wm116OxMnalrYMpPWhjbFLRSHmwpnthdpVK0-WpKUchg01q_H5usrcmBgew5LOzFqRI5xZP2_WuCwVWkkVnMGy-XWF-DghiO85OdMG) center / cover'}}>
                        Twitter Bot
                    </CardTitle>
                    <CardText>
                        A <b>current</b> project which will be a bot built with python which 
                        will follow and auto-like certain accounts/tweets per minute.
                        The user must pass in the twitter account whose posts will be liked. 
                        <b>NOTE: THIS PROJECT IS NOT YET COMPLETE </b>
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } 
        
        else if(this.state.activeTab ===2){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.alexmedina.net/wp-content/uploads/2019/12/javascript.png) center / cover'}}>
                            Chrome Extension
                        </CardTitle>
                        <CardText>
                            A chrome extension used to display professor ratings from rate my professor on my 
                            local school's class registration site.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rafay-c/Chrome-Extension" target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <br/>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://dvg5hr78c8hf1.cloudfront.net/2016/06/16/20/37/40/dd0deb76-b5aa-4597-a139-f5faeef8fe29/0*5Yco8CmA4zFxR6-Y.png) center / cover'}}>
                            Unit Converter
                        </CardTitle>
                        <CardText>
                            A simple application used to convert weight and height into different units. 
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rafay-c/Weight-Converter" target="_blank">Github</Button>
                            <Button colored href="https://rafay96.github.io/" target="_blank">Live Host</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <br/>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.alexmedina.net/wp-content/uploads/2019/12/javascript.png) center / cover'}}>
                            To-Do List App
                        </CardTitle>
                        <CardText>
                            A simple To-Do list application created to learn/test JavaScript/HTML/CSS
                            skills.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rafay-c/To-Do-List" target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        
        } 
        
        else if(this.state.activeTab ===3){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.makeuseof.com/wp-content/uploads/2019/02/c_logo_black.png) center / cover'}}>
                            Connect 4 Game
                        </CardTitle>
                        <CardText>
                            The game Connect 4 which is playable in the command line. You can play 
                            against the computer or with another person.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rafay-c/Connect-4" target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }
    

    render() {
        return(
            <div className="category-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>JS/HTML/CSS</Tab>
                    <Tab>C#</Tab>
                </Tabs>     

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
                  
            </div>
        );
    }
}

export default Projects;