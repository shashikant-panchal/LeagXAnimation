import React, { useEffect } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import { ITEM_HEIGHT } from '../constants/Dimenstions';

const DetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;

    const imageScale = new Animated.Value(0.85);
    const imageOpacity = new Animated.Value(1);
    const textSlide = new Animated.Value(0);


    useEffect(() => {
        Animated.parallel([
            Animated.timing(imageScale, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(imageOpacity, {
                toValue: 0.7,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(textSlide, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', () => {
            Animated.timing(imageScale, {
                toValue: 0.95,
                duration: 1000,
                useNativeDriver: false,
            }).start();
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={{ flex: 1, paddingTop: 0, paddingHorizontal: 0 }}>
            <View style={{ flex: 1 }}>
                <Animated.Image
                    source={{ uri: item.poster }}
                    style={[
                        {
                            width: '100%',
                            height: ITEM_HEIGHT,
                            position: 'absolute',
                            top: 0,
                            opacity: imageOpacity,
                        },
                        { transform: [{ scale: imageScale }] }
                    ]}
                    resizeMode="cover"
                />
            </View>
            <Animated.View
                style={[
                    styles.detailsContainer,
                    {
                        marginTop: ITEM_HEIGHT + 20,
                        transform: [
                            {
                                translateY: textSlide.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -150],
                                }),
                            },
                        ],
                    },
                ]}
            >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>
                    {item.location}
                </Text>
                <Text style={styles.date}>{item.date}</Text>
            </Animated.View>
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: -1,
        color: 'black',
    },
    location: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700',
    },
    date: {
        fontSize: 12,
        color: 'black',
        fontWeight: '900',
    },
    detailsContainer: {
        paddingTop: 0,
        marginLeft: 20,
    },
});
