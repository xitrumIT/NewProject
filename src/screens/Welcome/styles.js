import {StyleSheet, Dimensions} from 'react-native';
// import { Fonts, Metrics, Colors } from '../../themes'


    const width = Dimensions.get("screen").width; 
var styles=StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Header: {
    marginTop: 20,
  },
  Tabbar: {
    flex: 1,
  },
  Image: {
    width:width+0.4,
    height:width=0.4,
    alignItems:'center'
  },
});
export default styles