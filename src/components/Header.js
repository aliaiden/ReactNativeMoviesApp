import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.text}</Text>
    </View>
);

const styles = {
    textStyle: {
        fontSize: 20,
        color: '#ffffff'
    },
    viewStyle: {
        // backgroundColor: '#faebd7',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
    }

};

export default Header;
