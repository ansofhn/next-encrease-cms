export class TokenUtil {
  static access_token;

  static setAccessToken(access_token) {
    TokenUtil.access_token = access_token;
  }

  static clearAccessToken() {
    TokenUtil.access_token = undefined;
  }

  static persistToken() {
    if (TokenUtil.access_token !== null) {
      localStorage.setItem("access_token", TokenUtil.access_token);
    } else {
      localStorage.removeItem("access_token");
    }
  }

  static loadToken() {
    if (typeof window === undefined) {
      return;
    }

    const access_token = localStorage.getItem("access_token");

    if (access_token) {
      TokenUtil.setAccessToken(access_token);
    }
  }
}

export const isAuthenticated = () => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    TokenUtil.clearAccessToken();
    window.location.href = "/auth/login";
  }
};
