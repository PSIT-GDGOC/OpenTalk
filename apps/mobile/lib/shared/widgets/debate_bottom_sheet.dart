import 'package:flutter/material.dart';
import '../../features/feed/models/post_model.dart';
import '../../features/debate/models/reply_model.dart';

class DebateBottomSheet extends StatefulWidget {
  final StancePostModel post;

  const DebateBottomSheet({super.key, required this.post});

  @override
  State<DebateBottomSheet> createState() => _DebateBottomSheetState();
}

class _DebateBottomSheetState extends State<DebateBottomSheet> {
  String selectedSide = 'support';
  final TextEditingController _controller = TextEditingController();

  final List<DebateReplyModel> replies = [
    DebateReplyModel(
      id: 'r1',
      postId: 'p1',
      authorId: 'u1',
      authorName: 'Rohan Gupta',
      content: 'Completely agree. A single repository removes version drift across mobile and web interfaces when schemas evolve.',
      stanceSide: 'support',
      upvotes: 14,
      downvotes: 0,
      createdAt: DateTime.now().subtract(const Duration(hours: 1)),
    ),
    DebateReplyModel(
      id: 'r2',
      postId: 'p1',
      authorId: 'u2',
      authorName: 'Emily Taylor',
      content: 'However, mobile CI/CD build times (especially iOS builds) can slow down the main pipeline if caching is not dialed in.',
      stanceSide: 'counter',
      upvotes: 9,
      downvotes: 1,
      createdAt: DateTime.now().subtract(const Duration(minutes: 35)),
    ),
  ];

  Color _getSideColor(String side) {
    if (side == 'support') return const Color(0xFF10B981);
    if (side == 'counter') return const Color(0xFFEF4444);
    return const Color(0xFF6B7280);
  }

  void _addReply() {
    if (_controller.text.trim().isEmpty) return;
    setState(() {
      replies.add(
        DebateReplyModel(
          id: 'r_${DateTime.now().millisecondsSinceEpoch}',
          postId: widget.post.id,
          authorId: 'current_user',
          authorName: 'Campus Contributor',
          content: _controller.text.trim(),
          stanceSide: selectedSide,
          upvotes: 0,
          downvotes: 0,
          createdAt: DateTime.now(),
        ),
      );
      _controller.clear();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height * 0.75,
      padding: EdgeInsets.only(
        bottom: MediaQuery.of(context).viewInsets.bottom,
      ),
      decoration: const BoxDecoration(
        color: Color(0xFF0F172A),
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      child: Column(
        children: [
          // Drag handle
          Container(
            margin: const EdgeInsets.symmetric(vertical: 10),
            width: 40,
            height: 4,
            decoration: BoxDecoration(
              color: Colors.grey.shade700,
              borderRadius: BorderRadius.circular(2),
            ),
          ),

          // Header
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: Row(
              children: [
                const Icon(Icons.forum_outlined, color: Color(0xFF6366F1), size: 20),
                const SizedBox(width: 8),
                const Text(
                  'Threaded Debates',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                ),
                const Spacer(),
                IconButton(
                  icon: const Icon(Icons.close, size: 20),
                  onPressed: () => Navigator.pop(context),
                ),
              ],
            ),
          ),
          const Divider(color: Color(0xFF1E293B)),

          // Replies list
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: replies.length,
              itemBuilder: (context, index) {
                final r = replies[index];
                return Container(
                  margin: const EdgeInsets.only(bottom: 12),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: const Color(0xFF030712),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: const Color(0xFF1E293B)),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            r.authorName,
                            style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 13),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                            decoration: BoxDecoration(
                              color: _getSideColor(r.stanceSide).withValues(alpha: 0.15),
                              borderRadius: BorderRadius.circular(8),
                              border: Border.all(
                                color: _getSideColor(r.stanceSide).withValues(alpha: 0.3),
                              ),
                            ),
                            child: Text(
                              r.stanceSide.toUpperCase(),
                              style: TextStyle(
                                color: _getSideColor(r.stanceSide),
                                fontSize: 10,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 6),
                      Text(
                        r.content,
                        style: const TextStyle(fontSize: 12, color: Color(0xFFCBD5E1)),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),

          // Reply form
          Container(
            padding: const EdgeInsets.all(12),
            decoration: const BoxDecoration(
              color: Color(0xFF0B0F19),
              border: Border(top: BorderSide(color: Color(0xFF1E293B))),
            ),
            child: Column(
              children: [
                Row(
                  children: ['support', 'counter', 'neutral'].map((side) {
                    final isSelected = selectedSide == side;
                    return Padding(
                      padding: const EdgeInsets.only(right: 8),
                      child: ChoiceChip(
                        label: Text(
                          side.toUpperCase(),
                          style: TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.bold,
                            color: isSelected ? Colors.white : Colors.grey,
                          ),
                        ),
                        selected: isSelected,
                        selectedColor: _getSideColor(side),
                        backgroundColor: const Color(0xFF1E293B),
                        onSelected: (_) => setState(() => selectedSide = side),
                      ),
                    );
                  }).toList(),
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Expanded(
                      child: TextField(
                        controller: _controller,
                        style: const TextStyle(fontSize: 13),
                        decoration: InputDecoration(
                          hintText: 'Share your stance or argument...',
                          hintStyle: const TextStyle(color: Colors.grey, fontSize: 13),
                          filled: true,
                          fillColor: const Color(0xFF030712),
                          contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: const BorderSide(color: Color(0xFF1E293B)),
                          ),
                          enabledBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: const BorderSide(color: Color(0xFF1E293B)),
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(width: 8),
                    IconButton.filled(
                      style: IconButton.styleFrom(backgroundColor: const Color(0xFF6366F1)),
                      icon: const Icon(Icons.send, size: 18),
                      onPressed: _addReply,
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
