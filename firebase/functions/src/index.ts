import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

/**
 * Health check endpoint
 */
export const healthCheck = functions.https.onRequest((req, res) => {
  res.status(200).json({
    status: 'online',
    project: 'Open Talk Cloud Functions',
    timestamp: new Date().toISOString(),
  });
});

/**
 * Trigger: On Post Created -> Automated Trust & Content Moderation Check
 */
export const onPostCreated = functions.firestore
  .document('posts/{postId}')
  .onCreate(async (snap, context) => {
    const postData = snap.data();
    const postId = context.params.postId;

    // Automated moderation check for spam / malicious keywords
    const spamKeywords = ['freemoney', 'crypto-airdrop', 'claim-reward-now', 'buy-upvotes'];
    const content = `${postData.title || ''} ${postData.content || ''}`.toLowerCase();
    const hasSpam = spamKeywords.some((keyword) => content.includes(keyword));

    const moderationStatus = hasSpam ? 'flagged' : 'approved';

    await snap.ref.update({
      moderationStatus,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    functions.logger.info(`Post ${postId} moderation status set to ${moderationStatus}`);
  });

/**
 * Trigger: On Reply Created -> Increment parent post replyCount
 */
export const onReplyCreated = functions.firestore
  .document('posts/{postId}/replies/{replyId}')
  .onCreate(async (snap, context) => {
    const postId = context.params.postId;
    const postRef = db.collection('posts').doc(postId);

    await postRef.update({
      replyCount: admin.firestore.FieldValue.increment(1),
    });

    functions.logger.info(`Incremented reply count for post ${postId}`);
  });
