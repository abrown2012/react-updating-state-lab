// Code YouTubeDebugger Component Here
import React from 'react';


class YouTubeDebugger extends React.Component {
    constructor() {
      super();
  
      // Initial state is defined
      this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      } }
  
    // when handleClick is called, setState will update the state so that toggle is reversed
    handleClick = () => {
      this.setState({
        settings: {
            ...this.state.settings, 
            bitrate: 12
        }
      })
    }

    handleSecondClick = () =>  {
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {
                    resolution: '720p'
                }
            }
        })
    }
  
    render() {
      return (
        <div>
          <button className='bitrate' onClick={this.handleClick}></button>
          <button className='resolution' onClick={this.handleSecondClick}></button>
        </div>
      );
    }
  }
  
  export default YouTubeDebugger;