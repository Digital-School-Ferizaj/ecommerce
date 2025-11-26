import  react from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay
                    activeDotColor="#22D4FF"
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
            
            <View style={styles.iconsContainer}>
                <Icon name="cellphone-iphone" iconText="iPhone"/>
                <Icon name="android" iconText="Samsung"/>
                <Icon name="laptop" iconText="Laptop" />
            </View>
            <View style={styles.iconsContainer}>
                <Icon name="tablet" iconText="Tablet"/>
                <Icon name="mouse" iconText="Mouse"/>
                <Icon name="keyboard-outline" iconText="Keyboard"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export { HomeScreen };