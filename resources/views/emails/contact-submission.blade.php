<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Contact Inquiry</title>
</head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:Arial,Helvetica,sans-serif;color:#111;">
    <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
        <div style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #eee;">
            <div style="background:#E42278;color:#fff;padding:24px 32px;">
                <h1 style="margin:0;font-size:22px;">New Contact Inquiry</h1>
                <p style="margin:6px 0 0;font-size:14px;opacity:.9;">From the MRK Design Agency website</p>
            </div>
            <div style="padding:24px 32px;">
                <table style="width:100%;border-collapse:collapse;font-size:15px;">
                    <tr><td style="padding:8px 0;color:#888;width:130px;">Name</td><td style="padding:8px 0;font-weight:bold;">{{ $submission->name }}</td></tr>
                    <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;"><a href="mailto:{{ $submission->email }}" style="color:#E42278;">{{ $submission->email }}</a></td></tr>
                    @if($submission->company)
                    <tr><td style="padding:8px 0;color:#888;">Company</td><td style="padding:8px 0;">{{ $submission->company }}</td></tr>
                    @endif
                    <tr><td style="padding:8px 0;color:#888;">Service</td><td style="padding:8px 0;">{{ $submission->service }}</td></tr>
                    <tr><td style="padding:8px 0;color:#888;">Budget</td><td style="padding:8px 0;">{{ $submission->budget }}</td></tr>
                </table>
                <div style="margin-top:20px;">
                    <p style="color:#888;font-size:13px;margin:0 0 6px;">MESSAGE</p>
                    <div style="background:#f7f7f7;border-radius:10px;padding:16px;font-size:15px;line-height:1.6;white-space:pre-wrap;">{{ $submission->message }}</div>
                </div>
                <p style="margin-top:24px;font-size:13px;color:#aaa;">
                    Submitted {{ $submission->created_at->format('M d, Y \a\t g:i A') }} · Reply directly to this email to respond to {{ $submission->name }}.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
