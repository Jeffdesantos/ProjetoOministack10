const axios = require('axios');
const Dev = require('../model/Dev');

//index, show, store, update, destroy

module.exports = {
    async indexedDB(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        const dev = await Dev.findOne({ github_username });

        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;

            //console.log(name, avatar_url, bio, github_username)

            const techsArray = techs.split(',').map(tech => tech.trim());

            const location = {
                type: 'Point',
                coodinates: [longitude, latitude],
            };

            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
            })

            return Response.json(dev);
        };


    }
};