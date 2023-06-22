import React, { Component } from 'react';



class PersonState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Person : {fullName:"Oluwagbenga Olaleye",
      bio:"I am a Full Stack Developer",
      imgSrc:"https://www.altamira.ai/wp-content/uploads/2022/12/Full-Stack-DeveloperArtboard-2.png",
      profession:"A seasoned Full Stack Developer"},
      timeElapsed: 0,
      shows: true,
    }
  };

  componentDidMount() {     
    this.intervalId = setInterval(() =>{
    this.setState((prevState) =>({         
    timeElapsed: prevState.timeElapsed + 1,       }));     }, 1000);   
  }    
  
  componentWillUnmount() {     clearInterval(this.intervalId);   }

toggleShow = () =>{
  this.setState((prevState) => 
  ({shows: !prevState.shows,     
  }));
}

  render () {
    const {Person, timeElapsed, shows} = this.state
    return (
      <div className='tap'>
        {
        shows && <div>
        <p className='txt'>Full Name: {Person.fullName}</p>
        <p className='txt'>bio: {Person.bio}</p>
        <img src={Person.imgSrc} width="500px" />
        <p className='txt'>profession: {Person.profession}</p>
        </div>
        }
        <button Id="fx" onClick={this.toggleShow}>Click Me</button>
        
        <p className='txt'>Time Elapsed: {timeElapsed}</p>

      </div>
    )
    }
}


export default PersonState;