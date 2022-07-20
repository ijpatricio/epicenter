<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        return [
            'data' => [
                ['title' => 'Lorem ipsum dolor ', 'body' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere nisi sit amet orci convallis consequat .'],
                ['title' => 'Posuere nisi sit amet orci convallis', 'body' => 'Nulla elementum purus ultrices varius consectetur. Suspendisse potenti. Pellentesque blandit, arcu sed ultricies interdum, ante augue elementum nisi, fermentum pretium felis quam ut lacus. Proin suscipit consequat iaculis. Mauris at scelerisque sapien.'],
            ],
            'current_page' => 1,
        ];
    }
}
