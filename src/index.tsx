import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as ArrowImageTypes from './type';

export {
    ArrowImageTypes,
};

export default class extends React.PureComponent<ArrowImageTypes.Props> {
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