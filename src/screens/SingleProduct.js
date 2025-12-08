import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { PRIMARY_COLOR } from '../components/variabla';

const SingleProduct = ({navigation, route: {params: {item}}}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image 
                    source={{uri: `${item.image}`}}
                    style={styles.productImg}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.cardHeader}>
                <Text style={styles.productTitle}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                <Text style={styles.btnText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40
    },
    imgContainer: {
        width: '90%',
        height: 400,
        borderRadius: 12
    },
    productImg: {
        width: '100%',
        height: '100%',
        borderRadius: 12
    },
    cardHeader: {
        marginTop: 35,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#070639',
    },
    productDescription: {
        width: '90%',
        marginTop: 35,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: PRIMARY_COLOR,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 20,
        width: 200
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default SingleProduct;