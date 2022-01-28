export async function fetchData(url, callback) {
  const response = await fetch(url);
  const data = await response.json();
  callback(data);
}
