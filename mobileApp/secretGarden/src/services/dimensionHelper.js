import React from 'react'
import {Dimensions} from 'react-native'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ratio = windowHeight/windowWidth

const getScaledMarginTop = (number) => {
    let scaledMarginTop = `${number * ratio}px`;
    return scaledMarginTop;
}

const getScaledMarginBottom = (number) => {
    let scaledMarginBottom = `${number * ratio}px`;
    return scaledMarginBottom;
}

const getScaledMarginLeft = (number) => {
    let scaledMarginLeft = `${number * ratio}px`;
    return scaledMarginLeft;
}

const getScaledMarginRight = (number) => {
    let scaledMarginRight = `${number * ratio}px`;
    return scaledMarginRight;
}

const getScaledTop = (number) => {
    let scaledTop = `${number * ratio}px`;
    return scaledTop;
}

const getScaledBottom = (number) => {
    let scaledBottom = `${number * ratio}px`;
    return scaledBottom;
}

const getScaledLeft = (number) => {
    let scaledLeft = `${number * ratio}px`;
    return scaledLeft;
}

const getScaledRight = (number) => {
    let scaledRight = `${number * ratio}px`;
    return scaledRight;
}

const getScaledWidth = () => {
    let scaledWidth = `${number * ratio}px`;
    return scaledWidth;
}

const getScaledHeight = () => {
    let scaledHeight = `${number * ratio}px`;
    return scaledHeight;
}

const getScaledHeight = () => {
    let scaledHeight = `${number * ratio}px`;
    return scaledHeight;
}
