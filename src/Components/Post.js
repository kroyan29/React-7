import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Badge } from 'react-bootstrap';

class Post extends Component{
    state = { post: null }
    
    componentDidMount() {
        axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text').then(response => this.setState({ post: response.data }));
    }
    render() {
        return (
            <Fragment>
                {this.state.post && <div className='position-realitiv'>
                    <span className=''>Выбор редактора
                    <Badge pill color='success' className='' style={{fontSize:'0.75rem'}}>Новый</Badge>
                    </span>
                    <span>Начало работы с React</span>

                    <article>{ this.state.post}</article>
                </div>}
            </Fragment>
        )
    }
}