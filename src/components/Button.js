import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
        >

            <Text style={textStyle}>
                {children}
            </Text>

        </TouchableOpacity>
    );
};

const styles = {

    textStyle: {
        color: '#000000',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
