import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import MainContentView from './main-content-view.js';
import CreateStoryFooter from './create-story-footer.js';
import NewsArticle from './news-article.js';
import ArticleData from './article-data.json'
import BreakingNewsHeader from './breaking-news-header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: ArticleData.map((article, index) => 
      <NewsArticle key={`${this.props.id}Article${index + 1}`} heading={article.heading} text={article.text} category={article.category} />
    )
    };

    this.addAtricle = this.addAtricle.bind(this);
    this.refreshArticles = this.refreshArticles.bind(this);
  };

  addAtricle(heading, text, category) {
    let newArticles = this.state.articles;
    newArticles.push(
      <NewsArticle key={`${this.props.id}Article${newArticles.length}`} heading={heading} text={text} category={category} />
    )

    this.setState({articles: newArticles});
  }

  refreshArticles() {
    // Shuffle function from: https://stackoverflow.com/questions/962802/
    function shuffle(array) {
      var tmp, current, top = array.length;
  
      if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
      }
  
      return array;
    }

    var chosen = shuffle(this.state.articles);
    if(chosen.length > 5) {
      chosen = chosen.slice(0, 5);
    }

    this.setState({
      chosen: chosen
    });

  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="App-header" id="siteHeader">
            <Col xs={12} md={12}>
              <header>
                <h1 className="App-title">Welcome to USA Tomorrow</h1>
              </header>
            </Col>
          </Row>
          <Row>
            <BreakingNewsHeader articles={this.state.articles} />
          </Row>
          <Row>
            <MainContentView articles={this.state.articles} />
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <CreateStoryFooter article={this.state.articles} addArticle={this.addAtricle.bind(this)} /> 
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
