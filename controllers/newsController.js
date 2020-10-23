let RSS = require('rss-parser');
let oParser = new RSS();
class NewsController {
    constructor() { }
    async get(req, res, next) {
        const type = req.query.type;
        let rssUrl = '';
        const types = ['1', '2', '3', '4'];
        try {
            if (type !== undefined) {
                if (!types.includes(type)) {
                    res.status(404).send({ success: false, code: 1, error: 'the value of the "t" parameter is not valid' });
                    return;
                } else {
                    switch (type) {
                        case '1': {
                            rssUrl = process.env.RSS_FIFA_NEWS;
                            break;
                        }
                        case '2': {
                            rssUrl = process.env.RSS_FIFA_GALLERIES;
                            break;
                        }
                        case '3': {
                            rssUrl = process.env.RSS_FIFA_VIDEOS;
                            break;
                        }
                        case '4': {
                            rssUrl = process.env.RSS_FIFA_AWARDS;
                            break;
                        }
                    }
                }
            } else {
                rssUrl = process.env.RSS_FIFA_NEWS;
            }
            let feed = await oParser.parseURL(rssUrl);
            let oFifa = {};
            for (let x in feed) {
                oFifa[x] = feed[x];
            }
            oFifa['count'] = oFifa.items.length;

            res.status(200).send({ success: true, code: -1, data: oFifa, message: "Success" });
        }
        catch (e) {
            console.log(e);
            res.status(400).send({ success: false, code: 1000, error: e.message });
        }
    }
}
module.exports = NewsController;