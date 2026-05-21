<?php

namespace App\Filament\Resources\ContactSubmissionResource\Pages;

use App\Filament\Resources\ContactSubmissionResource;
use Filament\Resources\Pages\ViewRecord;

class ViewContactSubmission extends ViewRecord
{
    protected static string $resource = ContactSubmissionResource::class;

    protected function mutateFormDataBeforeFill(array $data): array
    {
        // Mark as read when viewing
        $this->record->update(['is_read' => true]);

        return $data;
    }
}
