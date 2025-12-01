import  react from 'react';
import { PRIMARY_COLOR } from '../components/variabla';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
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
                <MaterialCommunityIcons name="apple" size={24} color={PRIMARY_COLOR} iconText="Apple" />
                <MaterialCommunityIcons name="android" size={24} color={PRIMARY_COLOR} iconText="Android" />
                <MaterialCommunityIcons name="laptop" size={24} color={PRIMARY_COLOR} iconText="Laptop" />
            </View>
            <View style={styles.iconsContainer}>
                <MaterialCommunityIcons name="tablet" size={24} color={PRIMARY_COLOR} iconText="Tablet" />                
                <MaterialCommunityIcons name="mouse" size={24} color={PRIMARY_COLOR} iconText="Mouse" />
                <MaterialCommunityIcons name="keyboard" size={24} color={PRIMARY_COLOR} iconText="Keyboard" />
            </View>
        </View>
    );
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


export { HomeScreen };