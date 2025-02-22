import { StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colorStyles } from '../../variables'

export default function ProfileButtonSVG({ active }) {
  return (
    <Svg
      width="23"
      height="23"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2 14V18H6V20H0V14H2ZM20 14V20H14V18H18V14H20ZM5.5 5C5.5 6.19347 5.97411 7.33807 6.81802 8.18198C7.66193 9.02589 8.80653 9.5 10 9.5C11.1935 9.5 12.3381 9.02589 13.182 8.18198C14.0259 7.33807 14.5 6.19347 14.5 5H16.5C16.5002 6.18939 16.1741 7.35605 15.5571 8.37291C14.9402 9.38978 14.056 10.2179 13.001 10.767L13 17H7V10.768C5.94462 10.2189 5.06018 9.39074 4.44303 8.37367C3.82587 7.3566 3.49969 6.18967 3.5 5H5.5ZM10 3C10.663 3 11.2989 3.26339 11.7678 3.73223C12.2366 4.20107 12.5 4.83696 12.5 5.5C12.5 6.16304 12.2366 6.79893 11.7678 7.26777C11.2989 7.73661 10.663 8 10 8C9.33696 8 8.70107 7.73661 8.23223 7.26777C7.76339 6.79893 7.5 6.16304 7.5 5.5C7.5 4.83696 7.76339 4.20107 8.23223 3.73223C8.70107 3.26339 9.33696 3 10 3ZM6 0V2L2 1.999V6H0V0H6ZM20 0V6H18V2H14V0H20Z"
        style={active ? styles.svg_active : styles.svg}
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  svg: {
    fill: colorStyles.grey,
  },
  svg_active: {
    fill: colorStyles.text.linkBlue,
  },
})
