const apiKey = '5DlcvfcNM3boguLvQ7hAxjfFtnL0xRQHhCa-t-msR2_3KCiuIQijMT-QSEIJGu7m07xwiC4zhPvRoH7EwE3OIigqFP8TZBnXfuCw8ZKyAj9u8yhN3gryXaCsHER_XnYx';
const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}}&sort_by=${sortBy}`,
                {headers: {
                    Authorization: `Bearer ${apiKey}`,
        },
        }).then( response => {
                    return response.json();
        }).then( jsonResponse => {
                if( jsonResponse.businesses){
                    return jsonResponse.businesses.map( businesses => {
                            return {
                                id: businesses.id,
                                imageSrc: businesses.image_url,
                                name: businesses.name,
                                address: businesses.location.address1,
                                city: businesses.location.city,
                                state: businesses.location.state,
                                zipCode: businesses.location.zip_code,
                                category: businesses.categories[0] .title,
                                rating: businesses.rating,
                                reviewCount: businesses.review_count,
                            };
                    });
                }
            }
        )
    }
}
export default Yelp;