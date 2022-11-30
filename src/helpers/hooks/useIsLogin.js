import Cookies from 'js-cookie';

function useIsLogin() {
  const data = Cookies.get('data');
  return { isLogin: !!data };
}

export default useIsLogin;
