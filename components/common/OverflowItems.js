import React from 'react';
import {
    Animated,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { SPACING, OVERFLOW_HEIGHT } from '../constants/Dimenstions'


const OverflowItems = ({ data, scrollXAnimated }) => {
    const inputRange = [-1, 0, 1];
    const translateY = scrollXAnimated.interpolate({
        inputRange,
        outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
    });
    return (
        <View style={styles.overflowContainer}>
            <Animated.View style={{ transform: [{ translateY }] }}>
                {data.map((item, index) => {
                    return (
                        <View key={index} style={styles.itemContainer}>
                            <Text style={[styles.title]} numberOfLines={1}>
                                {item.title}
                            </Text>
                            <View style={styles.itemContainerRow}>
                                <Text style={[styles.location]}>
                                    {item.location}
                                </Text>
                                <Text style={[styles.date]}>{item.date}</Text>
                            </View>
                        </View>
                    );
                })}
            </Animated.View>
        </View>
    );
};


export default OverflowItems

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: -1,
        color: 'black'
    },
    location: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700'
    },
    date: {
        fontSize: 12,
        color: 'black',
        fontWeight: '900'
    },
    itemContainer: {
        height: OVERFLOW_HEIGHT,
        padding: SPACING * 2,
    },
    itemContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    overflowContainer: {
        height: OVERFLOW_HEIGHT,
        overflow: 'hidden',
    },
});