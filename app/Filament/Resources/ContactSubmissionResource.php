<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactSubmissionResource\Pages;
use App\Models\ContactSubmission;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Infolists;
use Filament\Infolists\Infolist;

class ContactSubmissionResource extends Resource
{
    protected static ?string $model = ContactSubmission::class;

    protected static ?string $navigationIcon = 'heroicon-o-envelope';

    protected static ?string $navigationLabel = 'Inquiries';

    protected static ?string $modelLabel = 'Inquiry';

    protected static ?string $pluralModelLabel = 'Inquiries';

    protected static ?int $navigationSort = 1;

    public static function canCreate(): bool
    {
        return false;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->disabled(),
                Forms\Components\TextInput::make('email')
                    ->disabled(),
                Forms\Components\TextInput::make('company')
                    ->disabled(),
                Forms\Components\TextInput::make('service')
                    ->disabled(),
                Forms\Components\TextInput::make('budget')
                    ->disabled(),
                Forms\Components\Textarea::make('message')
                    ->disabled()
                    ->columnSpanFull(),
            ]);
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Infolists\Components\Section::make('Contact Information')
                    ->schema([
                        Infolists\Components\TextEntry::make('name')
                            ->label('Full Name'),
                        Infolists\Components\TextEntry::make('email')
                            ->label('Email Address')
                            ->copyable(),
                        Infolists\Components\TextEntry::make('company')
                            ->label('Company')
                            ->default('Not provided'),
                    ])
                    ->columns(3),

                Infolists\Components\Section::make('Project Details')
                    ->schema([
                        Infolists\Components\TextEntry::make('service')
                            ->label('Service Required')
                            ->badge()
                            ->color('primary'),
                        Infolists\Components\TextEntry::make('budget')
                            ->label('Budget Range')
                            ->badge()
                            ->color('success'),
                        Infolists\Components\TextEntry::make('created_at')
                            ->label('Submitted')
                            ->dateTime(),
                    ])
                    ->columns(3),

                Infolists\Components\Section::make('Message')
                    ->schema([
                        Infolists\Components\TextEntry::make('message')
                            ->label('')
                            ->prose()
                            ->columnSpanFull(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\IconColumn::make('is_read')
                    ->label('')
                    ->boolean()
                    ->trueIcon('heroicon-o-envelope-open')
                    ->falseIcon('heroicon-o-envelope')
                    ->trueColor('gray')
                    ->falseColor('primary')
                    ->width('40px'),

                Tables\Columns\TextColumn::make('name')
                    ->label('Name')
                    ->searchable()
                    ->sortable()
                    ->weight(fn ($record) => $record->is_read ? 'normal' : 'bold'),

                Tables\Columns\TextColumn::make('email')
                    ->searchable()
                    ->copyable(),

                Tables\Columns\TextColumn::make('service')
                    ->badge()
                    ->color('primary')
                    ->searchable(),

                Tables\Columns\TextColumn::make('budget')
                    ->badge()
                    ->color('success'),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Received')
                    ->dateTime()
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                Tables\Filters\SelectFilter::make('is_read')
                    ->label('Status')
                    ->options([
                        '0' => 'Unread',
                        '1' => 'Read',
                    ]),
                Tables\Filters\SelectFilter::make('service')
                    ->options([
                        'UI/UX Design (Web & Mobile)' => 'UI/UX Design',
                        'WordPress Development' => 'WordPress',
                        'Custom-Coded Website' => 'Custom Website',
                        'Shopify Development' => 'Shopify',
                        'SEO Optimization' => 'SEO',
                        'Branding & Logo Design' => 'Branding',
                        'Graphic Design' => 'Graphic Design',
                        '3D Character Design' => '3D Design',
                        'Funnel & Landing Page Design' => 'Landing Pages',
                        'Multiple / Not sure yet' => 'Multiple',
                    ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\Action::make('markAsRead')
                    ->label('Mark Read')
                    ->icon('heroicon-o-check')
                    ->action(function ($record, $livewire) {
                        $record->update(['is_read' => true]);
                        $livewire->js('window.location.reload()');
                    })
                    ->hidden(fn ($record) => $record->is_read),
                Tables\Actions\Action::make('markAsUnread')
                    ->label('Mark Unread')
                    ->icon('heroicon-o-envelope')
                    ->action(function ($record, $livewire) {
                        $record->update(['is_read' => false]);
                        $livewire->js('window.location.reload()');
                    })
                    ->hidden(fn ($record) => !$record->is_read),
                Tables\Actions\DeleteAction::make()
                    ->after(fn ($livewire) => $livewire->js('window.location.reload()')),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->after(fn ($livewire) => $livewire->js('window.location.reload()')),
                    Tables\Actions\BulkAction::make('markAllRead')
                        ->label('Mark as Read')
                        ->icon('heroicon-o-check')
                        ->action(function ($records, $livewire) {
                            $records->each->update(['is_read' => true]);
                            $livewire->js('window.location.reload()');
                        })
                        ->deselectRecordsAfterCompletion(),
                    Tables\Actions\BulkAction::make('markAllUnread')
                        ->label('Mark as Unread')
                        ->icon('heroicon-o-envelope')
                        ->action(function ($records, $livewire) {
                            $records->each->update(['is_read' => false]);
                            $livewire->js('window.location.reload()');
                        })
                        ->deselectRecordsAfterCompletion(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContactSubmissions::route('/'),
            'view' => Pages\ViewContactSubmission::route('/{record}'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('is_read', false)->count() ?: null;
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'primary';
    }
}
