import React from 'react';
import {Navbar} from 'react-bootstrap';
import ViewStoryModal from './view-story-modal.js';

export default class BreakingNewsHeader extends React.Component {
    
    constructor(props) {
        super(props);
        var breaking = [];
        for(var i in this.props.articles) {
            if(this.props.articles[i].props.category === "breakingStories") {
                breaking.push(this.props.articles[i]);
            }
        }
        
        this.state = {
            breakingNews: breaking,
            item: breaking[Math.floor(Math.random() * breaking.length)],
            show: false
        };
        if(breaking.length > 0) {
            this.setState({
                item: breaking[Math.floor(Math.random() * breaking.length)]
            });
        }

        this.openBreakingNews = this.openBreakingNews.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    openBreakingNews() {        
        this.setState({
            show: true
        });
        
        
        return; // TODO
    }

    handleClose() {
        this.setState({
            item: this.state.breakingNews[Math.floor(Math.random() * this.state.breakingNews.length)],
            show: false
        });
    }

    render() {
        if(this.state.breakingNews.length > 0) {
            return (
                <div>
                <Navbar>
                    <Navbar.Brand>Breaking News</Navbar.Brand>
                    <Navbar.Text>
                        {this.state.item.props.heading} | <a href="#article" onClick={this.openBreakingNews}>Read More</a>
                    </Navbar.Text>
                </Navbar>
                <ViewStoryModal 
                    text={this.state.item.props.text}
                    heading={this.state.item.props.heading}
                    handleClose={this.handleClose}
                    show={this.state.show}
                    id={this.state.item.props.id}
                />
              </div>
            );
        } else {
            return null;
        }
        
    }
}