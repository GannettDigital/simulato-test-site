import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class NewsArticleRows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles,
      currentArticle: 0
    };
    this.createArticles = this.createArticles.bind(this);
    this.createArticleRows = this.createArticleRows.bind(this);
    this.createArticleCol = this.createArticleCol.bind(this);
  };

  createArticles() {    
    let articleCols = [];
    let currentArticle = this.state.currentArticle;
    let articlesLength = this.state.articles.length;
    while(currentArticle < articlesLength) {
      var article = this.state.articles[currentArticle];
      if(this.props.id === "home" || article.props.category === this.props.id) {
        articleCols.push(this.createArticleCol(currentArticle))
      }
      currentArticle++;
    }
    return this.createArticleRows(articleCols);
  }

  createArticleRows(articleCols) {
    let rows = [];
    for (let i = 0; i < articleCols.length; i = i + 2) {
      let col1 = articleCols[i];
      let col2 = null;
      if (articleCols[i+1]) {
        col2 = articleCols[i+1]
      }
      rows.push(<Row id={`ArticleRow${i}`} className="App-article-row">{col1}{col2}</Row>)
    }
    return rows;
  }

  createArticleCol(currentArticle) {
    if (this.state.articles[currentArticle]) {
      return (
        <Col xs={6} md={6}>
          {this.state.articles[currentArticle]}
        </Col>
      );
    }
    return null;
  }

  render() {
    return (
      this.createArticles()
    );
  }
}
