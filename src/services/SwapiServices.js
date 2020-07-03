export default class SwapiServices {
  _baseUrl = "https://swapi.dev/api";

  getData = async (url) => {
    const response = await fetch(`${this._baseUrl}${url}`);

    if (!response.ok) {
      throw new Error(`we have a problem with fetch ${url}`);
    }

    const result = await response.json();
    return result;
  };

  getAllPeople = async () => {
    const response = await this.getData("/people/");
    return response.results.map(this.transformPerson);
  };

  getPerson = async (id) => {
    const people = await this.getData(`/people/${id}/`);
    
    const planetHome = await this.getURL(people.homeworld);
    return this.transformPerson(people,planetHome);
  };

  transformPerson = (person, home) => {
    return {
      id: this.getId(person),
      name: person.name,
      gender: person.gender,
      mass: person.mass,
      birthDate: person.birth_year,
      homeworld: home,
    };
  };

  getURL = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result.name
  }

  getAllFilms = async () => {
    const response = await this.getData("/films/");
    return response.results.map(this.transformFilms);
  };

  getFilms = async (id) => {
    const films = await this.getData(`/films/${id}/`);
    return this.transformFilms(films)
  };

  transformFilms = (films) => {
    return {
      id: this.getId(films),
      name: films.title,
      producer: films.producer,
      director: films.director,
      episodeId: films.episode_id,
    }
  }


  getAllPlanet = async () => {
    const response = await this.getData("/planets/");
    return response.results.map(this.transformPerson);
  };

  getPlanet = async (id) => {
    const planet = await this.getData(`/planets/${id}/`);
    return this.transformPlanet(planet);
  };

  getId = (item) => {
    return item.url.match(/\/([0-9]*)\/$/)[1];
  };

  transformPlanet = (planet) => {
    return {
      id: this.getId(planet),
      name: planet.name,
      diameter: planet.diameter,
      population: planet.population,
      climate: planet.climate,
    };
  };
}
