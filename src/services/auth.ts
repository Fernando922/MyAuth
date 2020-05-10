interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "aisajisjaisjas12s2323dXXX",
        user: {
          name: "Fernando",
          email: "dipaula018@gmail.com",
        },
      });
    }, 2000);
  });
}
