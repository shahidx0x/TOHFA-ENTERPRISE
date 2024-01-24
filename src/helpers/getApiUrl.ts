export const getApiUrl = () => {
  return process.env.NEXT_PUBLIC_APP_MODE === "production"
    ? process.env.NEXT_PUBLIC_API_URL
    : "http://localhost:3000";
};
