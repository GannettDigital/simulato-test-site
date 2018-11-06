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
        var breakingNews = { // hardcoded until we can get categories working TODO
            heading: "Wow breaking news item",
            text: "Breaking news information is here",
            category: "breakingNews"
        }
        if(breakingNews.category === "breakingNews") {
            return (
                <Navbar>
                    <Navbar.Brand>Breaking News</Navbar.Brand>
                    <Navbar.Text>
                        {breakingNews.heading} <a onSelect={this.openBreakingNews(breakingNews)}>Read More</a>
                    </Navbar.Text>
                </Navbar>
            );
        } else {
            return null;
        }
        
    }
}