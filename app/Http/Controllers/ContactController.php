<?php

namespace App\Http\Controllers;

use App\Mail\ContactSubmissionMail;
use App\Models\ContactSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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

        $submission = ContactSubmission::create($validated);

        // Email the inquiry to the team. Wrapped so a mail failure never breaks
        // the form — the submission is always safely stored in the database.
        try {
            Mail::to(config('mail.contact_to'))->send(new ContactSubmissionMail($submission));
        } catch (\Throwable $e) {
            report($e);
        }

        return response()->json([
            'success' => true,
            'message' => 'Thank you for your inquiry! We will get back to you within 24 hours.',
        ]);
    }
}
