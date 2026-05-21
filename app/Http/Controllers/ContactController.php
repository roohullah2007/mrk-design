<?php

namespace App\Http\Controllers;

use App\Models\ContactSubmission;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'service' => 'required|string|max:255',
            'budget' => 'required|string|max:50',
            'message' => 'required|string|max:5000',
        ]);

        ContactSubmission::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Thank you for your inquiry! We will get back to you within 24 hours.',
        ]);
    }
}
