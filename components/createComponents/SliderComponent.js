import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import ThemeContext from "../../contexts/ThemeContext";

function SliderComponent({
    type,
    sliderColour,
    min,
    max,
    units,
    defaultValue,
}) {
    const [sliderValue, setSliderValue] = useState(defaultValue);
    const themeContext = useContext(ThemeContext);

    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.5 }}>
                    <Text style={[themeContext.theme.spanFont]}>{type}:</Text>
                </View>
                <View style={{ flex: 0.5 }}>
                    <Text
                        style={[
                            themeContext.theme.spanFont,
                            { marginLeft: "auto" },
                        ]}
                    >
                        {sliderValue.toFixed(0)} {units}
                    </Text>
                </View>
            </View>

            <Slider
                style={{ width: "100%", height: 50 }}
                value={sliderValue}
                minimumValue={min}
                maximumValue={max}
                minimumTrackTintColor={sliderColour}
                maximumTrackTintColor="#6F6E6E"
                onValueChange={(value) => setSliderValue(value)}
            />
        </View>
    );
}

export default SliderComponent;
