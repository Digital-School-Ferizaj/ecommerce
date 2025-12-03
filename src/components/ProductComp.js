import React from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { PRIMARY_COLOR } from './variabla';

const ProductComp = ({item}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('SingleProduct', {item})} >
            <View style={styles.productContainer}>
                <View style={styles.imgContainer}>
                    <Image 
                        source={{uri: `${item.image}`}}
                        style={styles.productImg}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.productTitle}>{item.name}</Text>
                    <Text style={styles.productCategory}>{item.category}</Text>
                    <Text style={styles.productDescription}>{item.description}</Text>
                    <Text style={styles.productPrice}>${item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        width: '100%',
        height: 130,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 16,
    },

    productImg: {
        width: 100,
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 8,
        marginTop: 5
    },

    textContainer: {
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '70%'
    },

    productTitle:{
        fontWeight: 'bold',
        fontSize: 16
    },

    productCategory:{
        fontSize: 12,
        color: '#22D4FF'
    },

    productDescription: {
        fontStyle: 'italic'
    },

    productPrice: {
        fontWeight: 'bold',
        marginTop: 5,
        backgroundColor: PRIMARY_COLOR,
        color: 'white',
        borderRadius: 100,
        paddingHorizontal: 5,
        width: 45
    }
});

export default ProductComp;