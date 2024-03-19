import { useNavigation } from "@react-navigation/native";
import {SafeAreaView, Text, TextInput, View, Image, Button, StyleSheet} from "react-native";

export default function SobreScreen(){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/rocket.png')} />
                <Text style={styles.titulo}>SisFim</Text>
            </View>
            <View style={styles.texto}>
                <Text>
                    SisFim - Sistema Financeiro Integrado para Microempresas.
                </Text>
            </View>
            <View style={styles.texto}>
                <Text>    
                    É um sistema de controle interno
                    de estoque, clientes, vendas, cobranças, despesas, e relatórios financeiros diários e mensais, a fim
                    de que o administrador da microempresa possa utilizar estes dados na sua tomada de decisão,
                    tornando suas decisões mais precisas, baseada em dados inseridos no sistema pelos seus 
                    vendedores.
                </Text>
            </View>
            <View style={styles.texto}>
                <Text>Este aplicativo foi criado por Germano Heckler como forma de conhecimento para
                    que futuramente o SisFim - criado em Laravel - seja também um aplicativo disponível
                    para Android.
                </Text>
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
        marginTop: 20,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 50,
        color: '#000000',
    },
    texto: {
        fontWeight: '500',
        fontSize: 20,
        color: '#000000',
        paddingVertical: 10,
        textAlign: 'center',
    },
});

// export default HomeScreen;