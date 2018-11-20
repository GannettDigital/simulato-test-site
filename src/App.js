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
      chosen: [],
      articles: ArticleData.map((article, index) => 
      <NewsArticle key={`Article${index + 1}`} heading={article.heading} text={article.text} category={article.category} />)
    };

    this.addAtricle = this.addAtricle.bind(this);
    this.refreshArticles = this.refreshArticles.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  };

  addAtricle(heading, text, category) {
    this.setState(function(state, props) {
      let newArticles = state.articles;
      newArticles.push(
        <NewsArticle key={`Article${newArticles.length}`} heading={heading} text={text} category={category} />
      )
      
      return {
        articles: newArticles
      };
    });

    this.refreshArticles();
  }

  refreshArticles() {
    // Shuffle function from: https://stackoverflow.com/questions/962802/
    function shuffle(array) {
      var shuffling = array;
      var tmp, current, top = shuffling.length;
  
      if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = shuffling[current];
          shuffling[current] = shuffling[top];
          shuffling[top] = tmp;
      }
  
      return shuffling;
    }

    var chosen = shuffle(this.state.articles);
    if(chosen.length > 5) {
      chosen = chosen.slice(0, 5);
    }

    this.setState(function(state, props) {
        var portion = shuffle(state.articles);
        if(portion.length > 5) {
          portion = portion.slice(0, 5);
        }
        return {
          chosen: portion
        };
    });

    //this.render();
  }

  componentDidMount() {
    this.refreshArticles();
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
            <BreakingNewsHeader articles={this.state.chosen} />
          </Row>
          <Row>
            <MainContentView articles={this.state.chosen} />
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <CreateStoryFooter article={this.state.chosen} refreshArticles={this.refreshArticles.bind(this)} addArticle={this.addAtricle.bind(this)} /> 
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
