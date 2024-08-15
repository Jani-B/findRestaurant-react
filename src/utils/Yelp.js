import { apikey } from "./yelpApi"; //here you have to add your own apikey.
//This code will take apikey from file yelpApi which is not included in repository.
//make an account to Yelp and you can get your own api key. https://docs.developer.yelp.com/page/start-your-free-trial

export default function YelpGet(term, location, sortOption) {
  const options = {
    headers: { accept: "application/json", Authorization: `Bearer ${apikey}` },
  };
  //have to use return here or will not work
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortOption}&limit=20`,
    options
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      //works
      if (jsonResponse.businesses) {
        //lets take the businesses and map trough them and add the information here.
        return jsonResponse.businesses.map((business) => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          postal_code: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        }));
      }
    })
    .catch((err) => console.error(err));
}
