import  react from 'react';
import { PRIMARY_COLOR } from '../components/variabla';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Button} from 'react-native';
import IconComp from '../components/IconComp';
import ProductComp from '../components/ProductComp';
import data from '../data/data.json';

// import Swiper from 'react-native-swiper';

class HomeScreen extends react.Component {

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
            <View style={styles.container}>
                
                {/*
                <View style={styles.sliderContainer}>
                        <Swiper
                        autoplay
                        activeDotColor={PRIMARY_COLOR}
                        autoplayTimeout={5}
                    >
                        <View style={styles.item}>
                            <Image 
                                source={require('../../assets/banner-4.jpg')}
                                style={styles.imgItem}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.item}>
                            <Image 
                                source={require('../../assets/banner-2.jpg')}
                                style={styles.imgItem}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.item}>
                            <Image 
                                source={require('../../assets/banner-3.jpg')}
                                style={styles.imgItem}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.item}>
                            <Image 
                                source={require('../../assets/banner-6.jpg')}
                                style={styles.imgItem}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.item}>
                            <Image 
                                source={require('../../assets/banner-1.jpg')}
                                style={styles.imgItem}
                                resizeMode="cover"
                            />
                        </View>
                    </Swiper>
                </View>
                */}
                
                <View style={styles.iconsContainer}>
                    <IconComp iconName="apple" iconText="Apple" />
                    <IconComp iconName="android" iconText="Android" />
                    <IconComp iconName="laptop" iconText="Laptop" />
                </View>
                <View style={styles.iconsContainer}>
                    <IconComp iconName="tablet" iconText="Tablet" />                
                    <IconComp iconName="mouse" iconText="Mouse" />
                    <IconComp iconName="keyboard" iconText="Keyboard" />
                </View>

                <View style={styles.productsContainer}>
                    <Text style={styles.title}>Most Popular Products</Text>
                    <FlatList
                        data={this.state.products.popularproducts}
                        renderItem={({product}) => (
                            <View>
                                <ProductComp item={product} />
                            </View>
                        )}
                    />
                </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    sliderContainer: {
        width: '90%',
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 8
    },

    imgItem: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },

    item: {
        flex: 1,
        justifyContent: 'center'
    },

    iconsContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        marginTop: 35,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },
});


export default HomeScreen;