/* import apiClient from "../client/apiClient";

async function getListings() {
  try {
    const response = await apiClient.post("/listings/all", {
      marketplace: ["exchange", "holaplex", "formfunction"],
    });
    return response.data.listings;
  } catch (error) {
    console.log(error);
  }
}

export default getListings;
*/


import axios from "axios";
import getArtists from "../artists/getArtists";


async function getListings() {
  try {
    let ArtistData = await getArtists(); 
    let names = ArtistData.map((artist) => {
      return artist.name;
    });
    let response = await getFromUrl(0, names);
    var results = [];
    for (const token of response.data.tokens) {
      if (token.isListed) results.push(token);
    }
    return results;
  } catch (error) {
    console.log(error);
  }
}

async function getFromUrl(from, names) {
  let url =
    "https://api.exchange.art/v1/public/tokens?limit=10000&from=" +
    from +
    '&filters={"tokenStatus":["curated","certified","known"],"brands":["' +
    names.join('","') +
    '"]}';
  let response = await axios.get(url);
  return response;
}

export default getListings;
