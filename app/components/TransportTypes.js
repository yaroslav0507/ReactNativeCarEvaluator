import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

export class TransportTypes extends Component {
  constructor(props){
    super(props);
    this.REQUEST_URL = 'http://api.auto.ria.com/categories';
    this.state = {
      transportTypes: null,
      selectedTransportType: null,
      loaded: false
    }
  }
  componentDidMount(){
    this.fetchTransportTypes()
  }

  fetchTransportTypes(){
    fetch(this.REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          transportTypes: responseData,
          loaded: true
        })
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return null;
    }

    return (
      <Picker
        selectedValue={this.state.selectedTransportType}
        onValueChange={(selectedTransportType) => this.setState({selectedTransportType})}>
        {this.state.transportTypes.map((type, i) => (
          <Picker.Item key={i} label={type.name} value={type.value}/>
        ))}
      </Picker>
    )
  }
}