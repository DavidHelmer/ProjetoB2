import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '70%'
    },

    login: {
        padding: 10,
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerPR: {
        width: '70%',
        flexDirection: 'row',
        padding: 5,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'space-between'
    }

})

export default styles