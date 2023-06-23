import { Button, TextInput, View } from "react-native";
import { useState } from "react";


import styles from "./styles";

export default function Password(){
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [cod, setCod] = useState('')

    return(
        <View>

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
            placeholder={'Insira seu email novamente'}
            />
            <TextInput
            style={styles.input}
            onChangeText={setCod}
            value={cod}
            placeholder={'Insira o código que te enviamos por email'}
            />

        <Button style={styles.btn} title="Restaurar Senha"/>

        </View>

        
    )
}