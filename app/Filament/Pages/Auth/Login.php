<?php

namespace App\Filament\Pages\Auth;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\Auth\Login as BaseLogin;

class Login extends BaseLogin
{
    protected static string $view = 'filament.pages.auth.login';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required()
                    ->autocomplete()
                    ->autofocus()
                    ->extraInputAttributes([
                        'class' => 'bg-transparent border-0 w-full outline-none font-medium text-base py-3 px-4',
                        'style' => 'font-family: Inter Tight, sans-serif;'
                    ]),
                TextInput::make('password')
                    ->label('Password')
                    ->password()
                    ->revealable()
                    ->required()
                    ->extraInputAttributes([
                        'class' => 'bg-transparent border-0 w-full outline-none font-medium text-base py-3 px-4',
                        'style' => 'font-family: Inter Tight, sans-serif;'
                    ]),
                Checkbox::make('remember')
                    ->label('Remember me')
                    ->extraAttributes([
                        'class' => 'mt-2'
                    ]),
            ]);
    }
}
