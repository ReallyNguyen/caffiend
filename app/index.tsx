import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{fontFamily: 'PPEikoLightItalic'}}>PPEikoLightItalic</Text>
      <Text style={{fontFamily: 'TTLightItalic'}}>TTLightItalic</Text>
      <Text style={{fontFamily: 'TTLight'}}>TTLight</Text>
      <Text style={{fontFamily: 'TTMedium'}}>TTMedium</Text>
      <Text style={{fontFamily: 'TTRegular'}}>TTRegular</Text>
    </View>
  );
}
