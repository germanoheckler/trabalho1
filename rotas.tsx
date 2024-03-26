import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/pages/Login";
import HomeScreen from "./src/pages/Home";
import ClientesScreen from "./src/pages/Clientes";
import ProdutosScreen from "./src/pages/Produtos";
import SobreScreen from "./src/pages/Sobre";

const Pilha = createNativeStackNavigator();

export default function Rotas(){
    return(
        <NavigationContainer>
            <Pilha.Navigator initialRouteName="Login">
                <Pilha.Screen name="Login" component={LoginScreen} />
                <Pilha.Screen name="Home" component={HomeScreen} />
                <Pilha.Screen name="Clientes" component={ClientesScreen} />
                <Pilha.Screen name="Produtos" component={ProdutosScreen} />
                <Pilha.Screen name="Sobre" component={SobreScreen} />
            </Pilha.Navigator>
        </NavigationContainer>
    );
}