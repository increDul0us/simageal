
import { ACCESS_KEY } from "babel-dotenv"

class Unsplash {

  constructor()  {
    this.access_key = cff4b72867f1410f36aac6a0bf25b5716111d69a71c9e342595951244f01056f;
  }

  async getImage(query) {
    const responseData = await fetch(`https://api.unsplash.com/search/photos/?client_id=${this.access_key}&per_page=30&orientation=landscape&query=${query}}`);


    let res = await responseData.json();

    const image = res.results;

    return image;
  }
}

export default Unsplash;
