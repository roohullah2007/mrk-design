<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Post::published()
            ->with(['author', 'categories', 'tags'])
            ->latest('published_at');

        if ($request->filled('category')) {
            $query->whereHas('categories', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        $posts = $query->paginate(9)->withQueryString();

        $categories = Category::withCount(['posts' => function ($q) {
            $q->published();
        }])->get();

        return Inertia::render('Blog', [
            'posts' => $posts,
            'categories' => $categories,
            'currentCategory' => $request->category,
        ]);
    }

    public function show(string $slug): Response
    {
        $post = Post::published()
            ->with(['author', 'categories', 'tags'])
            ->where('slug', $slug)
            ->firstOrFail();

        $relatedPosts = Post::published()
            ->with(['author', 'categories'])
            ->whereHas('categories', function ($q) use ($post) {
                $q->whereIn('categories.id', $post->categories->pluck('id'));
            })
            ->where('id', '!=', $post->id)
            ->latest('published_at')
            ->take(3)
            ->get();

        return Inertia::render('BlogPost', [
            'post' => $post,
            'relatedPosts' => $relatedPosts,
        ]);
    }
}
