import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  topCenterSectionText: {
    fontSize: 21,
    paddingVertical: Metrics.smallMargin,
    color: Colors.snow,
    marginVertical: Metrics.smallMargin,
    textAlign: 'center'
  },
  subCenterSectionText: {
    fontSize: 16,
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.snow,
    marginVertical: Metrics.smallMargin,
    textAlign: 'center'
  },
})
