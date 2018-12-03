import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import Posts from '../components/Posts';

class Reddit extends Component {
  state = {
    subreddit: 'all',
    posts: [],
  }

  componentDidMount() {
    axios.get( `https://www.reddit.com/r/${ this.state.subreddit }.json` )
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
      <div>
        <Row type="flex" justify="center">
          <Col span={ 24 }><h1>Reddit</h1></Col>
          <Col xs={ 24 } lg={ 10 }>
            <Posts posts={ this.state.posts } />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Reddit;