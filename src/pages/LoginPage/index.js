import { View } from "react-native";
import { TextInput } from "react-native";
import { Link } from "@react-navigation/native";
import styles from "./styles";
import { useState } from "react";

export default function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    
        return(
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                onChangeText={setUser}
                value={user}
                placeholder={'Insira seu email'}
                />

                <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder={'Insira sua senha'}
                />
                    <View style={styles.containerPR}>
                        <Link to={{screen: 'Password'}}>Esqueceu sua senha?</Link>
                        <Link to={{screen: 'Register'}}>Registre-se</Link>
                    </View>

                <Link style={styles.login} to={{screen:'Dashboard'}}>Login</Link>
            </View>
        )
    
}