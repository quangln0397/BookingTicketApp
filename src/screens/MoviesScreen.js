import React from 'react';
import {
    ScrollView,
    Text,
    StatusBar,
    View
} from 'react-native';

import { movies } from '../data';

export default class MoviesScreen extends React.Component {
    render() {
        return (
            <View style={{marginTop: 25}}>
                <StatusBar
                    barStyle='dark-content' />
                <ScrollView>
                    {movies.map((movie, index) => <Text>{movie.title}</Text>)}
                </ScrollView>
            </View>
        );
    }
};