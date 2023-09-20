import axios from 'axios';

export default () => {
    const useReplyTweet = () => useState('reply_tweet', () => null);

    const usePostTweetModal = (modal) => {
        const val = localStorage.getItem('postTweetModal');
        if (val === 'true') modal.value = true;
        else modal.value = false;
    };

    const closePostTweetModal = () => {
        localStorage.setItem('postTweetModal', 'false');
        localStorage.removeItem('replyTweet');
    }

    const setReplyTo = (tweet) => {
        const getTweet = localStorage.getItem('replyTweet');
        tweet = JSON.parse(getTweet);
        console.log(tweet);
        return tweet;
    }

    const postTweet = async (formData) => {
        const form = new FormData();

        form.append('text', formData.text);
        form.append('replyTo', formData.replyTo)

        formData.mediaFiles.forEach((mediaFile, index) => {
            form.append('media_file_' + index, mediaFile)
        });

        await axios.post('/api/user/tweets', form)
            .then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });
        return form;
    };

    const getHomeTweets = async (params = {}) => {
        var tweets;
        await axios.get('/api/tweets', {params})
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
        closePostTweetModal,
        usePostTweetModal,
        setReplyTo,
    }
};