import { useNavigation } from "@react-navigation/native";
import {SafeAreaView, Text, TextInput, View, Image, Button, StyleSheet} from "react-native";

export default function ProdutosScreen(){

    const navegar = useNavigation();

    function goSobre(){
        navegar.navigate("Sobre");
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/rocket.png')} />
                <Text style={styles.titulo}>Produtos</Text>
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Novo Produto" onPress={goSobre} />
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Novo Estoque" onPress={goSobre} />
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Busca" onPress={goSobre} />
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Produtos em Estoque" onPress={goSobre} />
            </View>
            <View style={styles.texto}>
                <Text>
                    Criado por Germano Heckler
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    texto: {
        marginTop: 15,
        alignItems: 'center',
    },
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