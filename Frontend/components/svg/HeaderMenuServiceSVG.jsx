import { StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colorStyles } from '../../variables'

export default function HeaderMenuServiceSVG() {
  return (
    <Svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1.63414 1.72418C2.60086 0.757288 3.89747 0.191754 5.26381 0.141057C6.63014 0.0903607 7.96509 0.558253 9.00081 1.45085C10.0356 0.55974 11.3688 0.092374 12.7335 0.142317C14.0982 0.192259 15.3936 0.755825 16.3605 1.72019C17.3274 2.68455 17.8944 3.97854 17.9479 5.34309C18.0014 6.70764 17.5375 8.04206 16.6491 9.07918L10.1783 15.5708C9.88101 15.8682 9.48229 16.0423 9.06207 16.058C8.64186 16.0738 8.23122 15.9301 7.91248 15.6558L7.82081 15.5717L1.35081 9.07918C0.462882 8.04296 -0.00120913 6.70977 0.0513204 5.34617C0.10385 3.98256 0.669129 2.68903 1.63414 1.72418ZM2.81247 2.90251C2.13101 3.58417 1.73819 4.50205 1.71553 5.46566C1.69288 6.42926 2.04213 7.36459 2.69081 8.07751L2.81247 8.20585L8.99998 14.3933L13.4191 9.97335L10.4733 7.02751L9.58998 7.91085C9.35786 8.14307 9.08229 8.3273 8.77898 8.45302C8.47567 8.57874 8.15056 8.64348 7.82223 8.64356C7.15913 8.64372 6.52313 8.38045 6.05414 7.91168C5.58515 7.44291 5.32159 6.80703 5.32143 6.14394C5.32127 5.48084 5.58454 4.84484 6.05331 4.37585L7.80498 2.62335C7.10787 2.06699 6.23532 1.77726 5.34388 1.80612C4.45244 1.83498 3.60047 2.18056 2.94081 2.78085L2.81247 2.90251ZM9.88414 5.25918C10.0404 5.10296 10.2523 5.01519 10.4733 5.01519C10.6943 5.01519 10.9062 5.10296 11.0625 5.25918L14.5975 8.79418L15.1875 8.20585C15.8804 7.51346 16.2748 6.57745 16.2865 5.59798C16.2982 4.61852 15.9262 3.67336 15.25 2.96464C14.5738 2.25592 13.6472 1.83991 12.6683 1.80556C11.6893 1.77121 10.7358 2.12126 10.0116 2.78085L9.88414 2.90251L7.23248 5.55418C7.08803 5.69853 7.00162 5.89088 6.98964 6.09474C6.97766 6.29859 7.04094 6.49974 7.16748 6.66002L7.23248 6.73251C7.37682 6.87696 7.56918 6.96337 7.77303 6.97535C7.97688 6.98733 8.17804 6.92405 8.33831 6.79751L8.41081 6.73251L9.88414 5.25918Z"
        style={styles.svg}
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  svg: {
    fill: colorStyles.text.linkBlue,
  },
})
