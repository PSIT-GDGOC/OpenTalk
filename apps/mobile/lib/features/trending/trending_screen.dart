import 'package:flutter/material.dart';

class TrendingScreen extends StatelessWidget {
  const TrendingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final trending = [
      {'title': 'Serverless Cloud Functions vs Microservices', 'score': 98, 'count': 240},
      {'title': 'GDGOC Open Source Sprint 2026 Kickoff', 'score': 95, 'count': 180},
      {'title': 'Flutter Web Performance vs Next.js', 'score': 89, 'count': 145},
      {'title': 'How to pick your first Good First Issue', 'score': 82, 'count': 92},
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Trending Debates', style: TextStyle(fontWeight: FontWeight.bold)),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: trending.length,
        itemBuilder: (context, index) {
          final t = trending[index];
          return Card(
            margin: const EdgeInsets.only(bottom: 12),
            child: ListTile(
              leading: Text(
                '0${index + 1}',
                style: const TextStyle(
                  color: Color(0xFF818CF8),
                  fontWeight: FontWeight.bold,
                  fontSize: 16,
                ),
              ),
              title: Text(
                t['title'] as String,
                style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14),
              ),
              subtitle: Text(
                '${t['count']} stances • ${t['score']}% activity',
                style: const TextStyle(fontSize: 12, color: Colors.grey),
              ),
              trailing: const Icon(Icons.arrow_forward_ios, size: 14, color: Colors.grey),
            ),
          );
        },
      ),
    );
  }
}
