const axios = require('axios');
const cheerio = require('cheerio');

exports.get = async ( req, res) => {    
        try {
            const { data } = await axios.get('https://play.google.com/store/apps/');
            const $ = cheerio.load(data);
            $('<div class="WpDbMd">')
            
            res.send('aaaaps');
        } catch (err) {
            console.log(err);
        }        
}