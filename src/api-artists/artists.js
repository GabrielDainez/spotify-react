const fetchData = async () => {
    try {
      const response = await axios.get('URL_DA_API');
      const data = response.data;
    } catch (error) {
      console.error(error);
    }
  };