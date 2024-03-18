import axios from 'axios';

class ApiController {
  getData(url: string) {
    return axios.get(url)
      .then(response => response.data)
      .catch(error => {
        console.error('Error during getData:', error.response.data);
        throw error.response.data;
      });
  }

  postData(url: string, data: any) {
    return axios.post(url, data)
      .then(response => response.data)
      .catch(error => {
        console.error('Error during postData:', error.response.data);
        throw error.response.data;
      });
  }

  putData(url: string, data: any) {
    return axios.put(url, data)
      .then(response => response.data)
      .catch(error => {
        console.error('Error during putData:', error.response.data);
        throw error.response.data;
      });
  }

  deleteData(url: string) {
    return axios.delete(url)
      .then(response => response.data)
      .catch(error => {
        console.error('Error during deleteData:', error.response.data);
        throw error.response.data;
      });
  }
}

const apiController = new ApiController();

export default apiController;