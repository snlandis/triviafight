import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "cursor-default": {
        "cursor": "default"
    },
    "page-title": {
        "marginTop": 30,
        "marginBottom": 30,
        "fontFamily": "'bitter'"
    },
    "input[type=search]": {
        "boxShadow": "none",
        "borderRadius": 5,
        "outline": "none"
    },
    "input[type=submit]": {
        "boxShadow": "none",
        "borderRadius": 5,
        "outline": "none"
    },
    "button-form": {
        "borderRadius": 5,
        "outline": "none"
    },
    "nav-search": {
        "maxWidth": "300px !important",
        "width": 300
    },
    "font": {
        "fontFamily": "'bitter'"
    },
    "top-bar": {
        "backgroundColor": "rgba(250,250,250,.8)",
        "boxShadow": "0px 1px 4px 0px rgba(0,0,0,.6)"
    },
    "top-bar ul": {
        "backgroundColor": "transparent !important"
    },
    "row": {
        "height": "calc(100vh - 60px)",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "weather-location": {
        "fontSize": 30,
        "textTransform": "uppercase"
    },
    "weather-icon": {
        "height": 70,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "weather-image": {
        "height": 60,
        "width": 60
    },
    "weather-item": {
        "float": "left",
        "width": "50%"
    },
    "weather-parameters": {
        "float": "left",
        "width": "50%"
    },
    "weather-eachItem": {
        "height": 50,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "weather-eachParameters": {
        "height": 50,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    }
});