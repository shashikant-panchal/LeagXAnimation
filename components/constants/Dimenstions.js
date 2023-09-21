import { Dimensions, } from 'react-native';
const { width } = Dimensions.get('screen');


const SPACING = 10;
const OVERFLOW_HEIGHT = 70;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;

export { SPACING, OVERFLOW_HEIGHT, ITEM_WIDTH, ITEM_HEIGHT, VISIBLE_ITEMS }