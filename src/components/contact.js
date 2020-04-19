import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

function Contact() {
    return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Rafay Chaudhary</h2>
                    <img 
                        src="images/profpic1.png"
                        alt="avatar"
                        style={{height:'250px'}}
                    />
                    <p style={{widows: '75%', margin: 'auto', paddingTop: '1em'}}>Student | Software Engineer | Writer</p>
                </Cell>
                <Cell col={6}>
                    <h2> Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Arvo'}}>
                                    <a href="tel:7068367846">
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                            (706) 836-7846
                                    </a>
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Arvo'}}>
                                    <a href= "mailto:rafay96@gmail.com">
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                            rafay96@gmail
                                    </a>        
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Arvo'}}>
                                    <a href="https://www.linkedin.com/in/rafay-chaudhary/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                            rafay-chaudhary
                                    </a>  
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
}

export default Contact;