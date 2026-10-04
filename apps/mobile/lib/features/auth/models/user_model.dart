class UserModel {
  final String uid;
  final String displayName;
  final String username;
  final String email;
  final String? avatarUrl;
  final String? bio;
  final int reputationScore;
  final DateTime joinedAt;

  UserModel({
    required this.uid,
    required this.displayName,
    required this.username,
    required this.email,
    this.avatarUrl,
    this.bio,
    required this.reputationScore,
    required this.joinedAt,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      uid: json['uid'] as String,
      displayName: json['displayName'] as String,
      username: json['username'] as String,
      email: json['email'] as String,
      avatarUrl: json['avatarUrl'] as String?,
      bio: json['bio'] as String?,
      reputationScore: json['reputationScore'] as int? ?? 0,
      joinedAt: DateTime.tryParse(json['joinedAt'] ?? '') ?? DateTime.now(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'uid': uid,
      'displayName': displayName,
      'username': username,
      'email': email,
      'avatarUrl': avatarUrl,
      'bio': bio,
      'reputationScore': reputationScore,
      'joinedAt': joinedAt.toIso8601String(),
    };
  }
}
