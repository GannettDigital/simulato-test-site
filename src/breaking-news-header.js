import React from 'react';
import {Navbar} from 'react-bootstrap';
//import NewsArticleRows from './news-article-rows.js';
//import ArticleData from './article-data.json'; // TODO: when 13 is merged, update to take a property

export default class BreakingNewsHeader extends React.Component {
    /*
    constructor(props) {
        super(props);
        // TODO in future: handle articles
    }
    */

    openBreakingNews() {
        return; // TODO
    }

  render() {
    return (
        <Navbar>
            <Navbar.Brand>Breaking News</Navbar.Brand>
            <Navbar.Text>
                Breaking News Item will go here. <a onSelect={this.openBreakingNews()}>Read More</a>
            </Navbar.Text>
        </Navbar>
    );
  }
}