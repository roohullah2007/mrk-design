<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        @php
            // Favicon cache-buster + server-rendered Open Graph / Twitter values
            $pageData = $page ?? [];
            $faviconV = is_file(public_path('favicon.png')) ? filemtime(public_path('favicon.png')) : '1';

            $ogUrl = url($pageData['url'] ?? '/');
            $ogTitle = config('app.name', 'MRK Design Agency');
            $ogDescription = 'A full-service creative agency — brand, web, ecommerce, video, and marketing under one roof.';
            $ogImage = url('/images/hero-image.jpg');
            $ogType = 'website';

            if (($pageData['component'] ?? '') === 'BlogPost' && !empty($pageData['props']['post'])) {
                $post = $pageData['props']['post'];
                $ogType = 'article';
                $ogTitle = $post['meta_title'] ?? ($post['title'] ?? $ogTitle);
                $ogDescription = $post['meta_description'] ?? ($post['excerpt'] ?? $ogDescription);
                if (!empty($post['featured_image'])) {
                    $fi = $post['featured_image'];
                    $ogImage = \Illuminate\Support\Str::startsWith($fi, ['http://', 'https://', '/'])
                        ? url($fi)
                        : url('/storage/' . $fi);
                }
            }
        @endphp

        <!-- Favicon (cache-busted by file mtime so updates show immediately) -->
        <link rel="icon" href="{{ asset('favicon.ico') }}?v={{ $faviconV }}" sizes="any">
        <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}?v={{ $faviconV }}">
        <link rel="shortcut icon" type="image/png" href="{{ asset('favicon.png') }}?v={{ $faviconV }}">
        <link rel="apple-touch-icon" href="{{ asset('favicon.png') }}?v={{ $faviconV }}">

        <title inertia>{{ config('app.name', 'MRK Design Agency') }}</title>

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
