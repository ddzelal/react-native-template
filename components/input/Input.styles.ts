import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
    },
    input: {
        flex: 1,
        height: 40,
        color:'red'
    },
    icon: {
        marginHorizontal: 5,
    },
});

export default styles;
