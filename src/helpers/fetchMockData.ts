export const fetchMockData = async (): Promise<{ username: string }> => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({ username: "FirstName LastName" });
    }, 800);
  });
};
