export const googleSignIn = async (
  name: string,
  email: string,
  image: string
) => {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/auth/google-sign-in`,
    {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        image,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
