import { Button, TextInput, View } from "react-native";
import { useState } from "react";

import styles from "./styles";

export default function Register(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')


    return(

        <View style={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder={'Insira seu nome e sobrenome'}
            />
            
            <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder={'Insira seu email'}
            />
            <TextInput
            style={styles.input}
            onChangeText={setEmail2}
            value={email2}
            placeholder={'Confirme seu email'}
            />
            <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder={'Insira sua senha'}
            />
            <TextInput
            style={styles.input}
            onChangeText={setPassword2}
            value={password2}
            placeholder={'Confirme sua senha'}
            />

            <Button style={styles.btn} title="Registrar"/>

        </View>
        
    )
}