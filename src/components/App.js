import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profileImage.jpg';

class App extends Component{
     state = { displayBio : false };
    
    // constructor() {
    //     super();
    //     this.state = { displayBio: false };

    //     console.log('Component this', this);

    //     this.toggleDisplayBio =  this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render(){
        return(
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Pradhumna.</p>
                <Title /> 
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in India, Bangalore.</p>
                            <p>My favorite language is kannada.</p>
                            <p>I love food.</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

// const AppWithHeader = ()  => {
//     return (
//         <Header Component = {App} />
//     )
// }

export default App;