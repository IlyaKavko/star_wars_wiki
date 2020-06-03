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
        return response.results.map(this.transformPerson())
    }
  
    async getPerson(id) {
        const people = await this.getData(`/people/${id}/`);
        return this.transformPerson(people);
    }

    transformPerson = (person) => {
      return {
        id: this.getId(person),
        name: person.name,
        gender: person.gender,
        mass: person.mass,
        homeworld: person.homeworld,
      }
    }

    async getAllStarships() {
      const response = await this.getData("/starships/");
      return response.results;
    }

    getStarships(id) {
      return this.getData(`/starships/${id}/`);
    }

    async getAllPlanet() {
      const response = await this.getData("/planets/");
      return response.result.map(this.transformPlanet)
    }

    async getPlanet(id) {
      const planet = await this.getData(`/planets/${id}/`);
      return this.transformPlanet(planet);
    }

    getId(item) {
      return item.url.match(/\/([0-9]*)\/$/)[1];
    }

    transformPlanet = (planet) => {
      return {
        id: this.getId(planet),
        name: planet.name,
        diameter: planet.diameter,
        population: planet.population,
        climate: planet.climate,
      }
    }
  }
 
  