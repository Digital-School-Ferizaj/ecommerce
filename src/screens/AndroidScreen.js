import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import data from '../data/data.json';
import Item from '../components/ProductComp';
import { PRIMARY_COLOR } from '../components/variabla';
import ProductComp from '../components/ProductComp';

class AndroidScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.setState({
            products: data
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Android Products</Text>
                    <View style={styles.productsContainer}>
                        <FlatList
                            data={this.state.products.android}
                            renderItem={({item}) => (
                                <ProductComp item={item} />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 20
    },
    title: {
        marginBottom: 20
    },
});

export default AndroidScreen;