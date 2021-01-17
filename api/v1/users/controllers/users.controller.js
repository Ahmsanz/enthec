const axios = require('axios');
const { gorestToken } = require('../../../../config/config');

exports.get =  async (req, res) => {
    try {
        const { page, limit } = req.query;
        console.log(page, limit);
        const { data } = await axios.get(`https://gorest.co.in/public-api/users?page=${page}&limit=${limit}`, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${gorestToken}`
            }
        })
        res.status(200).send(data);
    } catch(err) {
        res.status(400).send(err);
    }
}