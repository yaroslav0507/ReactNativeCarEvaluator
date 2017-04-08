import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Логин или email'
                   returnKeyType='next'
                   keyboardType={'email-address'}
                   autoCapitalize={'none'}
                   autoCorrect={false}
                   placeholderTextColor='rgba(255, 255, 255, .5)'
                   underlineColorAndroid={'transparent'}
                   style={styles.input}
                   onSubmitEditing={() => this.passwordInput.focus()}
        />
        <TextInput placeholder='Пароль'
                   returnKeyType='go'
                   secureTextEntry
                   placeholderTextColor='rgba(255, 255, 255, .5)'
                   style={styles.input}
                   ref={(input) => this.passwordInput = input}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>ВХОД</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, .2)',
    color: '#FFF',
    paddingHorizontal: 15,
    marginBottom: 5
  },
  buttonContainer: {
    backgroundColor: 'rgba(41, 128, 185, 1.0)',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});
