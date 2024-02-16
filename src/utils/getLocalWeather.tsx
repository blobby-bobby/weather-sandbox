export const fetchLocalData = async (latitude: number, longitude: number) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=fr`);
        const data = await response.json();
        console.log(data)
        return data;
      } catch (error) {
        throw new Error('Erreur lors de la récupération des données météorologiques');
      }
};