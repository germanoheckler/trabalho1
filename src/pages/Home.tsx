import { useNavigation } from "@react-navigation/native";
import {SafeAreaView, Text, TextInput, View, Image, Button, StyleSheet} from "react-native";

export default function HomeScreen(){

    const navegar = useNavigation();

    function goSobre(){
        navegar.navigate("Sobre");
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/rocket.png')} />
                <Text style={styles.titulo}>SisFim</Text>
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Cobranças" onPress={goSobre} />
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Vendas" onPress={goSobre} />
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Clientes" onPress={goSobre} />
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Produtos" onPress={goSobre} />
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Despesas" onPress={goSobre} />
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Relatórios" onPress={goSobre} />
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Sobre" onPress={goSobre} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 25, // FALAR no final
        backgroundColor: '#FFFFFF',
    },
    logoContainer: {
        alignItems: 'center', // centralizar a imagem
    },
    titulo: {
        // marginTop: 40,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 50,
        color: '#000000',
    },
    label: {
        fontWeight: '500',
        fontSize: 20,
        color: '#000000',
        paddingVertical: 10,
        textAlign: 'center',
    },
    inputContainer: {
        marginTop: 8,
    },
    input: {
        paddingVertical: 10,
        color: '#1F2937',
        backgroundColor: '#000000',
        shadowColor: '#ef4343',
    },
    buttonContainer: {
        marginTop: 12,
    },
});

// export default HomeScreen;