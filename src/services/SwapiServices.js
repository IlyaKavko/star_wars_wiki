export default class SwapiServices {

    _baseUrl = 'https://swapi.dev/api';

    async getData(url) {
      const response = await fetch(`${this._baseUrl}${url}`);
  
      if (!response.ok) {
        throw new Error(`we have a problem with fetch ${url}`);
      }
  
      const result = await response.json();
      return result;
    }
  
    async getAllPeople() {
        const response = await this.getData("/people/");
        return response.results
    }
  
    getPerson(id) {
        return this.getData(`/people/${id}/`)
    }
  }
 
  