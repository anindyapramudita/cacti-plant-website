type Request = {
  name: string;
  email: string;
  message: string;
};

export const sendComplainEmail = async (request: Request) => {
  const { name, email, message } = request;
  const response = await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
