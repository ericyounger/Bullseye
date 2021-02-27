import React, { useState } from "react";
import { Text, View } from "react-native";
import Slider from "@react-native-community/slider";

function SliderComponent({
    type,
    sliderColour,
    min,
    max,
    units,
    defaultValue,
}) {
    const [sliderValue, setSliderValue] = useState(defaultValue);

    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.5 }}>
                    <Text style={{ color: "white" }}>{type}:</Text>
                </View>
                <View style={{ flex: 0.5 }}>
                    <Text style={{ color: "white", marginLeft: "auto" }}>
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
