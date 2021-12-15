/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react'
import img from '@/assets/img/gift.png'
const Home = () => {
  const theme = useTheme()
  return (
    <div>
      <p>home</p>
      <img src={img} />
      <div css={{ color: theme.color.font.info }}>123</div>
    </div>
  )
}
export default Home
