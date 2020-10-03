import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { TextInput } from 'react-native-paper';
import SignUp from './SignUp'

const Login = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        secureTextEntry: true
    })

    const emailInput = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val
            })
        }
    }
    
    const passwordInput = (val) => {
        setData({
            ...data,
            password: val
        })
    }

        return(
            <View style={styles.container}>
                <TextInput style ={styles.inputBox}
                placeholder='Email'
                placeholderTextColor='#ffffff'
                onChangeText={(val) => emailInput(val)}
                />
                <TextInput style={styles.inputBox}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#ffffff'
                onChangeText={(val) => passwordInput(val)}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.signup}>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: '#72A0C1',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingHorizontal: 16,
        marginVertical: 5,
        borderRadius: 3
    },
    button: {
        width: 300,
        backgroundColor: '#72A0C1',
        marginVertical: 5,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
    },
    signup: {
        alignItems: 'center',
        justifyContent: 'center'
    }
  });