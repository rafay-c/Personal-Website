import React from 'react';
import { Grid, Cell } from 'react-mdl';

function Home() {
    return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="home-grid">
                <Cell col={12}>
                    <img src="images/profpic1.png" alt="" className="avatar-img"/>
                    <div className="banner-text">
                        <h1>Software Engineer Student</h1>
                        <hr/>
                        <p>C# | HTML/CSS | Java | React | Python | JavaScript</p>
                        <div className="social-links">
                            {/*github*/}
                            <a href="https://github.com/rafay-c" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                             {/*linkedin*/}
                             <a href="https://www.linkedin.com/in/rafay-chaudhary/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            {/*Medium*/}
                            <a href="https://medium.com/@rafayc" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-medium" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
}

export default Home;