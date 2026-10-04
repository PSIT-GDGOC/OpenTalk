import 'package:flutter/material.dart';
import 'core/theme.dart';
import 'features/feed/feed_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const OpenTalkApp());
}

class OpenTalkApp extends StatelessWidget {
  const OpenTalkApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Open Talk',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.darkTheme,
      home: const FeedScreen(),
    );
  }
}
