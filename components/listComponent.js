<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default class ListComponent extends Component {

    cafeDataSourceProps = [];

    state = {
        isLoading: true,
        cafeDataSource: this.cafeDataSourceProps
    }

    componentDidMount() {
        console.log('componentDidMount...');
        this.fetchCafes();
    }

    async fetchCafes() {
        console.log('fetching cafes')
        try {
            const response = await fetch('https://raw.githubusercontent.com/adamterlson/react-native-coffee/master/venue-search.json');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                cafeDataSource: responseJson.businesses,
            }, function () {
                console.log(this.state.cafeDataSource);
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {        
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.cafeDataSource}
                    renderItem={({ item, index, separators }) => (
                        <TouchableOpacity
                            onPress={()=>this.props.openCafeDetail(item)}>
                            <View style={styles.item}>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

AppRegistry.registerComponent('ListComponent', () => ListComponent);
