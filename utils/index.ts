export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '5708121a2amshfe2a866c100a4efp1cf749jsnde76b00f2dab',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers }
  );
  const result = await response.text();
  return result;
}
