export const frontRoutes = {
  pages: {
    home: "/",
    login: "/login",
    register: "/register",
    contacts: "/contacts",
    manageContacts: "/contacts/:id/manage",
  },
  navigate: {
    manageContacts: (id: string) => `/contacts/${id}/manage`,
  },
} as const;

export const backRoutes = {
  baseURL: "https://contacts-app-5b4k.onrender.com",
  contacts: {
    baseURL: "/contacts",
    byId: (id: string) => `/contacts/${id}`,
  },
  auth: (() => {
    const baseURL = "/auth";
    return {
      register: baseURL + "/register",
      login: baseURL + "/login",
      getUserInfo: baseURL + "/me",
      logout: baseURL + "/logout",
      refresh: baseURL + "/refresh",
    };
  })(),
} as const;
