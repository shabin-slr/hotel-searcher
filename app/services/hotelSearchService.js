const request = require('request');

const DataSource = require("../config").HotelResourceUrl;

let searchHotels = (filter) =>{
    return getHotels().then(data=>{
        let hotels = data.hotels;

        //formatting availability to ISO 8601 syntax (YYYY-MM-DD)
        hotels.forEach(hotel=>{
            hotel.availability.forEach(availability=>{
                availability.from = availability.from.split("-").reverse().join("-");
                availability.to = availability.to.split("-").reverse().join("-");
            })
        });

        if(filter){
            if(filter.name){
                hotels = hotels.filter(hotel=>hotel.name.match(new RegExp(filter.name, "i")))
            }
            if(filter.city){
                hotels = hotels.filter(hotel=>hotel.city.match(new RegExp(filter.city, "i")))
            }
            if(filter.startPrice){
                hotels = hotels.filter(hotel=>hotel.price>=filter.startPrice)
            }
            if(filter.endPrice){
                hotels = hotels.filter(hotel=>hotel.price<=filter.endPrice)
            }
            if(filter.startDate && filter.endDate){
                hotels = hotels.filter(hotel=>{
                    let available = hotel.availability.find(availability=>{
                        return availability.from<=filter.startDate&&availability.to>=filter.endDate
                    });
                    return !!available?true :false
                });
            }
        }

        return hotels;
    })
};

let getHotels = () =>{
    return new Promise((resolve, reject)=>{
        request(DataSource, { json: true }, (err, res, body) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(body);
        });
    })
}

//searchHotels();

module.exports = {
    searchHotels : searchHotels
}