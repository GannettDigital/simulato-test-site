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
      <NewsArticle id={`${this.props.id}Article${index + 1}`} heading={article.heading} text={article.text} category={article.category} />
    )
    };
  };

  addAtricle(heading, text, category) {
    let newArticles = this.state.articles;
    newArticles.push(
      <NewsArticle id={`${this.props.id}Article${newArticles.length}`} heading={heading} text={text} category={category} />
    )

    this.setState({articles: newArticles});
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
