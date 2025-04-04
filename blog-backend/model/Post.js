class Post {
    constructor(postId, userId, title, content, createdAt) {
        this.postId = postId;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
    }

    getPostId() {
        return this.postId;
    }

    setPostId(postId) {
        this.postId = postId;
    }

    getUserId() {
        return this.userId;
    }

    setUserId(userId) {
        this.userId = userId;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getContent() {
        return this.content;
    }

    setContent(content) {
        this.content = content;
    }

    getCreatedAt() {
        return this.createdAt;
    }

    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
}

module.exports = Post;