import 'package:flutter/material.dart';

class AppTheme {
  static final ThemeData darkTheme = ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    scaffoldBackgroundColor: const Color(0xFF030712),
    colorScheme: const ColorScheme.dark(
      primary: Color(0xFF6366F1),
      secondary: Color(0xFFA855F7),
      surface: Color(0xFF111827),
      error: Color(0xFFEF4444),
      onPrimary: Colors.white,
      onSurface: Color(0xFFF3F4F6),
    ),
    appBarTheme: const AppBarTheme(
      backgroundColor: Color(0xFF0B0F19),
      elevation: 0,
      centerTitle: false,
    ),
    cardTheme: CardTheme(
      color: const Color(0xFF0F172A),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: const BorderSide(color: Color(0xFF1E293B), width: 1),
      ),
    ),
  );
}
