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

	onBodyStyleSelected(selectedBodyStyle) {
		this.setState({
			bodyStyle: selectedBodyStyle.value
		})
	}

	render() {
	  const { onTransportTypeSelected, transportFilters } = this.props;
		const renderBodyTypePicker = (transportType) => {
			if (transportType) {
				return <TypePicker
          apiURL={`/categories/${transportType}/bodystyles`}
          onValueSelected={(selectedTransportType) => this.onBodyStyleSelected(selectedTransportType)}/>
			} else {
				return null;
			}
		};

		return (
      <View style={styles.container}>
        <Text>Выберите тип транспорта</Text>

        <TypePicker
          apiURL="/categories"
          onItemSelected={(selectedTransportType) => onTransportTypeSelected(selectedTransportType)}/>

				{ renderBodyTypePicker(transportFilters.transportType) }

        <TouchableOpacity
          opPress={() => this.onSubmit()}
          style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text>{transportFilters.transportType.name}</Text>
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



