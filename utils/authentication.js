export const authentication = {
  setAccessToken: (token) => {
    if (token) {
      localStorage.setItem("access_token", token);
    }
  },
  clearAccesToken: () => {
    localStorage.clear();
    window.location.href = "/auth/login";
  },
  isVerified: () => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      return access_token;
    }
  },
};
