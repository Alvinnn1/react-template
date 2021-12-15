import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const useScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname])
  return null
}
export default useScrollToTop
