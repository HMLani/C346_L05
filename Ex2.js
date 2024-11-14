import { StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList } from 'react-native';

const datasource = [
    {data:[
            {key: 'A'},
            {key: 'E'},
            {key: 'I'},
            {key: 'O'},
            {key: 'U'},
        ], title: 'Vowels'},
    {data: [
            {key: 'B'},
            {key: 'C'},
            {key: 'D'},
            {key: 'F'},
            {key: 'G'},
            {key: 'H'},
            {key: 'J'},
            {key: 'K'},
            {key: 'L'},
            {key: 'M'},
            {key: 'N'},
            {key: 'P'},
            {key: 'Q'},
            {key: 'R'},
            {key: 'S'},
            {key: 'T'},
            {key: 'V'},
            {key: 'W'},
            {key: 'X'},
            {key: 'Y'},
            {key: 'Z'}
        ], title: 'Consonants'},
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
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({section: {title}}) => (<Text style={styles.headerText}>{title}</Text>)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },

    opacityStyle: {
        borderWidth: 1
    },

    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left'
    },

    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

