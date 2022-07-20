<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Collection;

class CollectionController extends Controller
{
    public function index()
    {
        return Collection::query()->paginate(3, ['*'], 'collectionPage');
    }
}
