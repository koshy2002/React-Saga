export const fetchData = async () => {
    try {
      const response = await fetch("https://practiceapi.devmountain.com/api/tasks");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };