<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('Home');
    }

    public function services(): Response
    {
        return Inertia::render('Services');
    }

    public function portfolio(): Response
    {
        return Inertia::render('Portfolio');
    }

    public function growthPartner(): Response
    {
        return Inertia::render('GrowthPartner');
    }

    public function privacy(): Response
    {
        return Inertia::render('Legal/Privacy');
    }

    public function terms(): Response
    {
        return Inertia::render('Legal/Terms');
    }

    public function cookies(): Response
    {
        return Inertia::render('Legal/Cookies');
    }

    public function contact(): Response
    {
        return Inertia::render('Contact');
    }
}
