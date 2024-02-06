const BASE_URL = "https://jsonplaceholder.typicode.com";

export const request = async (url: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/${url}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return { error: response.status };
  }
};
