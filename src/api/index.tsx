export const fechtLalin = async () => {
  const response = await fetch("http://localhost:8080/api/lalins");
  return response.json();
};
