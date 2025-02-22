import { StyleSheet, Text } from 'react-native'
import gStyles from '../gStyles'
import { TouchableOpacity } from 'react-native'

export default function ButtonForm({
  title = '',
  style,
  textColor,
  onPress = () => {},
  iconComponent,
}) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {iconComponent && iconComponent}
      <Text style={[gStyles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
})
