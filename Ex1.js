import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const datasource = [
    {key: 'A'},
    {key: 'B'},
    {key: 'C'},
    {key: 'D'},
    {key: 'E'},
    {key: 'F'},
    {key: 'G'},
    {key: 'H'},
    {key: 'I'},
    {key: 'J'},
    {key: 'K'},
    {key: 'L'},
    {key: 'M'},
    {key: 'N'},
    {key: 'O'},
    {key: 'P'},
    {key: 'Q'},
    {key: 'R'},
    {key: 'S'},
    {key: 'T'},
    {key: 'U'},
    {key: 'V'},
    {key: 'W'},
    {key: 'X'},
    {key: 'Y'},
    {key: 'Z'}
]

export default function App() {
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}>
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={datasource}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },

    opacityStyle: {
        borderWidth: 1
    },

    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left'
    },
});

