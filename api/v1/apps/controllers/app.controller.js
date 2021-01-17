const gplay = require('google-play-scraper');

exports.get = async ( req, res) => {    
    try {
        const apps = [];
        const requests = await gplay.list({
            num: 5
        })
        for await (const request of requests) {
            const app = await getAppDetails(request.appId);
            apps.push(app);
        }

        res.status(200).send(apps);            
    } catch (err) {
        res.status(400).send(err);
    }        
}

exports.getByCategory = async ( req, res) => {    
    try {
        const { category } = req.params;
        const apps = [];
        const requests = await gplay.list({
            category: category.toUpperCase(),
            num: 5
        })
        for await (const request of requests) {
            const app = await getAppDetails(request.appId);
            console.log(app);
            apps.push(app);
        }
        
        res.status(200).send(apps);
    } catch (err) {
        res.status(400).send(err);
    }        
}

const getAppDetails = async (appId) => {
    try {
        const request = await gplay.app({
            appId
        });
        const app = {
            name: request.title,
            description: request.description,
            downloads: request.installs
        }
        
        return app;
    } catch (err) {
        res.status(400).send(err);
    }    
}