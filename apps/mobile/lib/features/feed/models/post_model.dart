class StancePostModel {
  final String id;
  final String authorId;
  final String authorName;
  final String? authorAvatar;
  final String title;
  final String content;
  final String topic;
  final List<String> tags;
  int upvotes;
  int downvotes;
  int replyCount;
  final String moderationStatus;
  final DateTime createdAt;

  StancePostModel({
    required this.id,
    required this.authorId,
    required this.authorName,
    this.authorAvatar,
    required this.title,
    required this.content,
    required this.topic,
    required this.tags,
    required this.upvotes,
    required this.downvotes,
    required this.replyCount,
    required this.moderationStatus,
    required this.createdAt,
  });

  factory StancePostModel.fromJson(Map<String, dynamic> json) {
    return StancePostModel(
      id: json['id'] as String,
      authorId: json['authorId'] as String,
      authorName: json['authorName'] as String,
      authorAvatar: json['authorAvatar'] as String?,
      title: json['title'] as String,
      content: json['content'] as String,
      topic: json['topic'] as String,
      tags: List<String>.from(json['tags'] ?? []),
      upvotes: json['upvotes'] as int? ?? 0,
      downvotes: json['downvotes'] as int? ?? 0,
      replyCount: json['replyCount'] as int? ?? 0,
      moderationStatus: json['moderationStatus'] as String? ?? 'approved',
      createdAt: DateTime.tryParse(json['createdAt'] ?? '') ?? DateTime.now(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'authorId': authorId,
      'authorName': authorName,
      'authorAvatar': authorAvatar,
      'title': title,
      'content': content,
      'topic': topic,
      'tags': tags,
      'upvotes': upvotes,
      'downvotes': downvotes,
      'replyCount': replyCount,
      'moderationStatus': moderationStatus,
      'createdAt': createdAt.toIso8601String(),
    };
  }
}
