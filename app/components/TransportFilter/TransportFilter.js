import React, { Component } from 'react';
const { Navigator, StyleSheet, View, Text, Picker, TouchableOpacity } = require('react-native');

import { TypePicker } from '../TypePicker';

class TransportFilter extends Component {
	constructor(props) {
		super(props);
		this.dispatch = props.dispatch;
		this.state = {
			transportType: null,
			bodyStyle: null
		}
	}

	render() {
	  const { onTransportTypeSelected, onBodyStyleSelected, transportFilters } = this.props;

		return (
      <View style={styles.container}>
        <Text>Выберите тип транспорта</Text>

        <TypePicker
          apiURL="/categories"
          onItemSelected={(selectedTransportType) => onTransportTypeSelected(selectedTransportType)}/>

				<TypePicker
					apiURL={`/categories/${transportFilters.transportType.id}/bodystyles`}
					onItemSelected={(selectedTransportType) => onBodyStyleSelected(selectedTransportType)}/>


        <TouchableOpacity
          opPress={() => this.onSubmit()}
          style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text>{transportFilters.transportType.name}</Text>
        <Text>{transportFilters.bodyStyle && transportFilters.bodyStyle.name}</Text>
      </View>
		)
	}
}

export { TransportFilter };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'rgba(236, 240, 241, 1.0)'
  },
  button: {
    backgroundColor: '#f1c40f',
    paddingVertical: 10,
    marginTop: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});



