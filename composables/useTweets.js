import axios from 'axios';

export default () => {
    const postTweet = async (formData) => {
        const form = new FormData();

        form.append('text', formData.text);
        form.append('replyTo', formData.replyTo)

        formData.mediaFiles.forEach((mediaFile, index) => {
            form.append('media_file_' + index, mediaFile)
        });
   
        //     return useFetchApi('/api/user/tweets', {
    //         method: 'POST',
    //         body: form
    //     })
    // }

        await axios.post('/api/user/tweets', form)
            .then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });
        
        return form;
    };

    const getHomeTweets = async () => {
        var tweets = 0;
        await axios.get('/api/tweets')
        .then((response) => {
            console.log(response.data);
            tweets = response.data.tweets;
        }).catch((err) => {
            console.log(err);
        });
        return tweets;
    };

    const getTweetById = async (tweetId) => {
        var tweet;
        await axios.get('/api/tweets/' + tweetId)
        .then((response) => {
            console.log(response.data);
            tweet = response.data.tweet;
        }).catch((error) => {
            console.log(error);
        });
        return tweet;
    };

    return {
        postTweet,
        getHomeTweets,
        getTweetById,
    }
};