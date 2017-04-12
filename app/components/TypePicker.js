import React, { Component } from 'react';
const { StyleSheet, Picker } = require('react-native');

export class TypePicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: props.list,
			selectedValue: null
    }
  }

  onValueChange(selectedValue) {
    this.setState({ selectedValue });

    const selectedItem = this.state.list.filter(item => {
      return item.value === selectedValue;
    })[0];

		this.props.onItemSelected(selectedItem);
  }

  render() {
    if (!this.state.list) {
      return null;
    }

    return (
      <Picker
        style={styles.picker}
        selectedValue={this.state.selectedValue}
        onValueChange={(selectedValue) => this.onValueChange(selectedValue)}>
        {this.state.list.map((type, i) => (
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
