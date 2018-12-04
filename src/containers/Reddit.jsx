import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Row, Col } from 'antd';
import Posts from '../components/Posts';
import Search from '../components/Search';

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

  onChangeHandler = ( e ) => {
    this.setState( {
      subreddit: e.target.value
    } )
  }

  onSubmitHandler = ( e ) => {
    e.preventDefault();
    axios.get( `https://www.reddit.com/r/${ this.state.subreddit }.json` )
      .then ( response => {
        if ( response.data.data.children.length ) {
          this.setState({
            posts: response.data.data.children
          })
        }
      })
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={ 24 }><h1>Reddit/{this.state.subreddit}</h1></Col>
          <Search onChange={ this.onChangeHandler } onSubmit={ this.onSubmitHandler } />
          <Col xs={ 24 } lg={ 10 }>
            <Route path={ `/` } exact render={ () => <Posts posts={ this.state.posts } /> } />
            <Route path={ '/:subreddit' } render={ () => <p>LMAO</p> } />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Reddit;