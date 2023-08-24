import { Text, View } from "react-native";

export default function MyComponent() {

    function getName() {
        return "João"
    }
    return (
        <View>
            <Text>{console.warn("Mycomponent")}</Text>
            <Text>MyComponent</Text>
        </View>
    )

}
