import formidable from "formidable"
import { createMediaFile } from "~~/server/db/mediaFile";
import { createTweet } from "~~/server/db/tweet";
import { tweetTransformer } from "~~/server/transformers/tweet";
import { uploadToCloudinary } from "~~/server/utils/cloudinary";

export default defineEventHandler(async (event) => {
    // const body = await useBody(event);

    const form = formidable({ multiples: true });

    const response = await new Promise((resolve, reject) => {
        form.parse(event.req, (err, fields, files) => {
            if (err) {
                reject(err);
            }
            resolve({ fields, files });
        });
    });

    const { fields, files } = response;

    const userId = event.context?.auth?.user.id;
    console.log("user: ", userId);

    const tweetData = {
        text: fields.text,
        authorId: userId,
    };

    const replyTo = fields.replyTo;
    // var getReplyTweet;
    // var replyTweet;
    // if (localStorage.getItem('replyTweet') !== null) {
    //     getReplyTweet = localStorage.getItem('replyTweet');
    //     replyTweet = JSON.parse(getReplyTweet);
    //     console.log(replyTweet);
    // }
    // const replyTo = replyTweet?.id;
    // console.log(replyTweet);

    if (replyTo && replyTo !== 'null' && replyTo !== 'undefined') {
        tweetData.replyToId = replyTweet.id;
    }

    const tweet = await createTweet(tweetData);

    const filePromises = Object.keys(files).map(async key => {
        const file = files[key];

        const cloudinaryResource = await uploadToCloudinary(file.filepath);
        console.log(cloudinaryResource);
        return createMediaFile({
            url: cloudinaryResource.secure_url,
            providerPublicId: cloudinaryResource.public_id,
            userId: userId,
            tweetId: tweet.id,
        })
    })

    await Promise.all(filePromises);

    return {
        tweet: tweetTransformer(tweet),
    };
})