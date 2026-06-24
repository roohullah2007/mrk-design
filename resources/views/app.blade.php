<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Favicon -->
        <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}">
        <link rel="shortcut icon" type="image/png" href="{{ asset('favicon.png') }}">
        <link rel="apple-touch-icon" href="{{ asset('favicon.png') }}">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        {{-- Server-rendered Open Graph / Twitter Card tags so social crawlers (which don't run JS) get rich previews when posts are shared --}}
        @php
            $ogUrl = url($page['url'] ?? '/');
            $ogTitle = config('app.name', 'MRK Design Agency');
            $ogDescription = 'A full-service creative agency — brand, web, ecommerce, video, and marketing under one roof.';
            $ogImage = url('/images/hero-image.jpg');
            $ogType = 'website';

            if (($page['component'] ?? '') === 'BlogPost' && !empty($page['props']['post'])) {
                $post = $page['props']['post'];
                $ogType = 'article';
                $ogTitle = $post['meta_title'] ?? $post['title'] ?? $ogTitle;
                $ogDescription = $post['meta_description'] ?? $post['excerpt'] ?? $ogDescription;
                if (!empty($post['featured_image'])) {
                    $ogImage = url('/storage/' . $post['featured_image']);
                }
            }
        @endphp
        <meta name="description" content="{{ $ogDescription }}">
        <meta property="og:type" content="{{ $ogType }}">
        <meta property="og:url" content="{{ $ogUrl }}">
        <meta property="og:title" content="{{ $ogTitle }}">
        <meta property="og:description" content="{{ $ogDescription }}">
        <meta property="og:image" content="{{ $ogImage }}">
        <meta property="og:site_name" content="{{ config('app.name', 'MRK Design Agency') }}">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:url" content="{{ $ogUrl }}">
        <meta name="twitter:title" content="{{ $ogTitle }}">
        <meta name="twitter:description" content="{{ $ogDescription }}">
        <meta name="twitter:image" content="{{ $ogImage }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
