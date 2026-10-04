class DebateReplyModel {
  final String id;
  final String postId;
  final String? parentId;
  final String authorId;
  final String authorName;
  final String content;
  final String stanceSide; // 'support' | 'counter' | 'neutral'
  int upvotes;
  int downvotes;
  final DateTime createdAt;

  DebateReplyModel({
    required this.id,
    required this.postId,
    this.parentId,
    required this.authorId,
    required this.authorName,
    required this.content,
    required this.stanceSide,
    required this.upvotes,
    required this.downvotes,
    required this.createdAt,
  });

  factory DebateReplyModel.fromJson(Map<String, dynamic> json) {
    return DebateReplyModel(
      id: json['id'] as String,
      postId: json['postId'] as String,
      parentId: json['parentId'] as String?,
      authorId: json['authorId'] as String,
      authorName: json['authorName'] as String,
      content: json['content'] as String,
      stanceSide: json['stanceSide'] as String? ?? 'neutral',
      upvotes: json['upvotes'] as int? ?? 0,
      downvotes: json['downvotes'] as int? ?? 0,
      createdAt: DateTime.tryParse(json['createdAt'] ?? '') ?? DateTime.now(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'postId': postId,
      'parentId': parentId,
      'authorId': authorId,
      'authorName': authorName,
      'content': content,
      'stanceSide': stanceSide,
      'upvotes': upvotes,
      'downvotes': downvotes,
      'createdAt': createdAt.toIso8601String(),
    };
  }
}
