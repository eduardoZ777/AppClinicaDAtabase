import { TextInput, TextInputProps } from "react-native";

export function input({ ...rest }: TextInputProps){
    return <TextInput {...rest} style={{ borderWidth: 1, borderColor: '#000', padding: 10, borderRadius: 5 }} />
}