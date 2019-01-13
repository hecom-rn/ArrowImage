import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default class extends React.PureComponent {
    render() {
        return (
            <Image
                source={require('./image/arrow_right.png')}
                style={[styles.image, this.props.style]}
            />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 13,
        height: 16,
    },
});