import Twitter from 'twitter-lite'
const Stemmer = require('natural').PorterStemmer
const Analyzer = require('natural').SentimentAnalyzer
const Tokenizer = require('natural').WordTokenizer
// const nameTraining = import('./nameTraining')


export async function search(query="Godot Engine", user=new Twitter({}), lang="en", count=100) {
    try{
        const analyzer = new Analyzer("English", Stemmer, "afinn")
        const tokenizer = new Tokenizer()

        console.log(user)
        let response = await user.getBearerToken();
        console.log(`Got the following bearer token from twitter: ${response.access_token}`);
        
        const app = new Twitter({
            bearer_token: response.access_token,
        });
        
        response = await app.get(`/search/tweets`, {
            q: query,
            lang: lang,
            count: count,
        });
        
        let tweets = []
        response.statuses.forEach(element => {
            let sentiment = analyzer.getSentiment(tokenizer.tokenize(element.text))
            tweets.push({
                tweet: element.text,
                sentiment: sentiment,
                retweets: element.entities.retweet_count,
                likes: element.entities.favorite_count,
                hashtags: element.entities.hashtags
            })
        });

        return tweets
    } catch(e) {
        console.log("There was an error calling Twitter API.");
        console.dir(e);
    }
}
