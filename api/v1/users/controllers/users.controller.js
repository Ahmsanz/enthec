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

exports.getOneById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = {code: 200, data: {}, posts: []};        
        user.data = await getSingleUser(userId);
        const posts = await getUserPosts(userId);
        posts.forEach( post => {
            delete post.created_at;
            delete post.updated_at;
            user.posts.push(post);
        })
        
        res.status(200).json(user); 
    } catch (err) {
        res.status(400).send(err);
    }
}

const getSingleUser = async (userId) => {
    try {
        const { data } = await axios.get(`https://gorest.co.in/public-api/users/${userId}`, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${gorestToken}`
            }
        });
        
        return data.data;
    } catch (err) {
        res.status(400).send(err);
    }
}

const getUserPosts = async (userId) => {
    try {
        const { data } = await axios.get(`https://gorest.co.in/public-api/users/${userId}/posts`, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${gorestToken}`
            }
        });
        
        return data.data;
    } catch (err) {
        res.status(400).send(err);
    }
}