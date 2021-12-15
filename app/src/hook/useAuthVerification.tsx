import {useHistory, useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import {appRouter} from '@/router'
import {useSelector} from 'react-redux'

const useAuthVerification = () => {
  const {pathname} = useLocation()
  console.log(pathname)
  const history = useHistory()
  const userInfo = useSelector(state => state.account.userInfo)
  useEffect(() => {
    for (let key in appRouter) {
      // @ts-ignore
      if (pathname === appRouter[key].path && appRouter[key].requireAuth) {
        // if (userInfo.id) {
        //   history.push(pathname);
        // } else {
        //   history.replace(appRouter.login.path);
        // }
        break
      }
    }
  }, [pathname])
  return null
}
export default useAuthVerification
