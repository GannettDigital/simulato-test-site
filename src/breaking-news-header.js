import React from 'react';
import {Navbar} from 'react-bootstrap';
import ViewStoryModal from './view-story-modal.js';

export default class BreakingNewsHeader extends React.Component {
    
    constructor(props) {
        super(props);
        var breaking = [];
        for(var i in this.props.articles) {
            if(this.props.articles[i].props.category === "breakingStories") {
                breaking.push(i);
            }
        }
        
        var item = breaking[Math.floor(Math.random() * breaking.length)];
        var element;
        if(this.props.articles) {
            element = this.props.articles[item];
        }
        this.state = {
            breakingNews: breaking,
            item: item,
            element: element,
            show: false
        };

        this.openBreakingNews = this.openBreakingNews.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    openBreakingNews() {
        this.setState({
            show: true
        });
        
        return;
    }

    handleClose() {
        this.setState(function(state, props) {
            if(props.updateBreaking) {
                var item;
                if(state.breakingNews) {
                    item = state.breakingNews[Math.floor(Math.random() * state.breakingNews.length)];
                }
                var element;
                if(props.articles) {
                    element = props.articles[item]
                }
    
                return {
                    item: item,
                    element: element,
                    show: false
                }
            }

            return {
                show: false
            };
        });
        this.forceUpdate();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.updateBreaking || this.state.show !== nextState.show) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        if(this.state.breakingNews.length > 0) {
            return (
                <div>
                <Navbar>
                    <Navbar.Brand>Breaking News</Navbar.Brand>
                    <Navbar.Text>
                        {this.state.element.props.heading} | <a href="#article" onClick={this.openBreakingNews}>Read More</a>
                    </Navbar.Text>
                </Navbar>
                <ViewStoryModal 
                    text={this.state.element.props.text}
                    heading={this.state.element.props.heading}
                    handleClose={this.handleClose}
                    show={this.state.show}
                    id={this.state.element.props.id}
                />
              </div>
            );
        } else {
            return null;
        }
        
    }
}