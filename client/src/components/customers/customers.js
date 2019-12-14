import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './customers.css';

class customers extends Component{
    constructor() {
        super();
        this.state={
            partners:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/events')
        .then(res => this.setState({partners:res.data.data})
        )
    }

    render() {
        const partners = this.state.partners;
        return this.state.partners.map( (partner) => {
          return (
            <ul>
              id: {partner._id} |
              name: {partner.name} |
              email: {partner.email} |
              location: {partner.location} 
            </ul>
          )
        })
      }
    }
    
    

export default customers;
