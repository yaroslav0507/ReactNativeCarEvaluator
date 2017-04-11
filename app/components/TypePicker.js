import React, { Component } from 'react';
const { StyleSheet, Picker } = require('react-native');

export class TypePicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      fetchedData: null,
			selectedValue: 'Select',
      loaded: false
    }
  }
  componentDidMount() {
    this.fetchData();
  }

	componentDidUpdate(nextProps, nextState) {
    if (nextProps.apiURL !== this.props.apiURL) {
      this.fetchData();
    }
  }

  fetchData(){
    this.props.apiURL && fetch(`http://api.auto.ria.com${this.props.apiURL}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          fetchedData: responseData,
          loaded: true
        })
      })
      .done();
  }

  onValueChange(selectedValue) {
    this.setState({ selectedValue });

    const selectedItem = this.state.fetchedData.filter(item => {
      return item.value === selectedValue;
    })[0];

		this.props.onItemSelected(selectedItem);
  }

  render() {
    if (!this.state.loaded) {
      return null;
    }

    return (
      <Picker
        style={styles.picker}
        selectedValue={this.state.selectedValue}
        onValueChange={(selectedValue) => this.onValueChange(selectedValue)}>
        {this.state.fetchedData && this.state.fetchedData.map((type, i) => (
          <Picker.Item key={i} label={type.name} value={type.value}/>
        ))}
      </Picker>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#FFF'
  }
});
