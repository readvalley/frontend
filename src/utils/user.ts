const getUserInfo = (key: string): string | null => {
  try {
    const data = JSON.parse(localStorage.getItem("user")!);
    return data[key];
  } catch {
    return null;
  }
};

export default getUserInfo;
