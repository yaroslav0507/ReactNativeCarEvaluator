import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, StatusBar } from 'react-native';
import { LoginForm } from './LoginForm';

export class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={'padding'}
                            style={styles.container}>
        <StatusBar backgroundColor={PRIMARY_COLOR}
                   barStyle="light-content"/>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/car_hand_icon.png')}/>
          <Text style={styles.title}>
            Приложение для быстрой оценки стоимости автомобиля перед продажей
          </Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const PRIMARY_COLOR = 'rgba(52, 152, 219, 1.0)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 4,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 25,
    opacity: .7,
    width: 250
  },
  formContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});
