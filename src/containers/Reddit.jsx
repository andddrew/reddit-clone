import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Posts from '../components/Posts';

class Reddit extends Component {
  state = {
    subreddit: [],
    posts: [],
  }

  componentDidMount() {
    axios.get( 'https://www.reddit.com/r/all.json' )
      .then ( response => {
        if ( !this.state.posts.length ) {
          this.setState({
            posts: response.data.data.children 
          })
        }
      } )
      .catch ( error => { console.log( error ) } )
  }
  render() {
    return (
      <Fragment>
        <p>Reddit</p>
        <Posts posts={ this.state.posts } />
      </Fragment>
    )
  }
}

export default Reddit;