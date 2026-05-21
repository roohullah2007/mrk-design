<?php

namespace App\Filament\Widgets;

use App\Models\Category;
use App\Models\Post;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        return [
            Stat::make('Total Posts', Post::count())
                ->description('All blog posts')
                ->descriptionIcon('heroicon-m-document-text')
                ->color('primary'),

            Stat::make('Published Posts', Post::published()->count())
                ->description('Live on the website')
                ->descriptionIcon('heroicon-m-check-circle')
                ->color('success'),

            Stat::make('Draft Posts', Post::draft()->count())
                ->description('Waiting to be published')
                ->descriptionIcon('heroicon-m-pencil')
                ->color('warning'),

            Stat::make('Categories', Category::count())
                ->description('Blog categories')
                ->descriptionIcon('heroicon-m-folder')
                ->color('info'),
        ];
    }
}
