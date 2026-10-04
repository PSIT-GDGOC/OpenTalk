import 'package:flutter/material.dart';
import 'models/post_model.dart';
import '../../shared/widgets/stance_card.dart';
import '../../shared/widgets/debate_bottom_sheet.dart';

class FeedScreen extends StatefulWidget {
  const FeedScreen({super.key});

  @override
  State<FeedScreen> createState() => _FeedScreenState();
}

class _FeedScreenState extends State<FeedScreen> {
  final List<StancePostModel> _posts = [
    StancePostModel(
      id: 'p1',
      authorId: 'u1',
      authorName: 'Sarah Jenkins',
      title: 'Monorepos with Turborepo & npm are superior for Fullstack Teams',
      content:
          'Managing Flutter mobile apps alongside React web clients and Firebase Cloud Functions in a unified repository drastically reduces integration overhead.',
      topic: 'tech',
      tags: ['monorepo', 'flutter', 'react'],
      upvotes: 42,
      downvotes: 3,
      replyCount: 18,
      moderationStatus: 'approved',
      createdAt: DateTime.now(),
    ),
    StancePostModel(
      id: 'p2',
      authorId: 'u2',
      authorName: 'Priya Sharma',
      title: 'Why GDGOC Sprints should focus on Real-World Open Source tooling',
      content:
          'Contributing to live projects during sprints gives students direct experience with CI/CD, branch naming, PR reviews, and Firebase security rules.',
      topic: 'open-source',
      tags: ['gdgoc', 'opensource'],
      upvotes: 89,
      downvotes: 1,
      replyCount: 24,
      moderationStatus: 'approved',
      createdAt: DateTime.now().subtract(const Duration(hours: 4)),
    ),
  ];

  void _openDebates(StancePostModel post) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => DebateBottomSheet(post: post),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(
                color: const Color(0xFF6366F1),
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Icon(Icons.chat_bubble_outline, size: 18, color: Colors.white),
            ),
            const SizedBox(width: 10),
            const Text(
              'Open Talk',
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
            ),
            const SizedBox(width: 6),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
              decoration: BoxDecoration(
                color: const Color(0xFF6366F1).withValues(alpha: 0.2),
                borderRadius: BorderRadius.circular(10),
              ),
              child: const Text(
                'GDGOC',
                style: TextStyle(fontSize: 10, color: Color(0xFF818CF8), fontWeight: FontWeight.bold),
              ),
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications_none),
            onPressed: () {},
          ),
        ],
      ),
      body: ListView.builder(
        itemCount: _posts.length,
        itemBuilder: (context, index) {
          final post = _posts[index];
          return StanceCard(
            post: post,
            onDebateTap: () => _openDebates(post),
          );
        },
      ),
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: const Color(0xFF6366F1),
        foregroundColor: Colors.white,
        onPressed: () {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Take a Stance modal opens here')),
          );
        },
        icon: const Icon(Icons.add),
        label: const Text('New Stance'),
      ),
    );
  }
}
