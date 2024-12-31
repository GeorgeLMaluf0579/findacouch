export const API_KEY = "AIzaSyBsb_GAppuf1DeakY9kTHXZmqRQbPRsmuI";

export default {
  async login(context, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      },
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to authenticated.",
      );
      throw error;
    }

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });

  },
  async signup(context, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      },
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to authenticated.",
      );
      throw error;
    }

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};
