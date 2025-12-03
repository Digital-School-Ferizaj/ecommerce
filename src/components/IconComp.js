import react from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet } from "react-native";
import { PRIMARY_COLOR } from '../components/variabla';

const IconComp = (props) => {
    return (
         <View style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
                <MaterialCommunityIcons name={props.iconName} size={24} color="#22D4FF" />
            </View>
            <Text style={styles.title}>{props.iconText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: PRIMARY_COLOR,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    iconContainer: {
        alignItems: 'center',
        width: 60,
        height: 60,
    },

    iconText: {
        height: 20,
        fontWeight: "600"
    }
});


export default IconComp;