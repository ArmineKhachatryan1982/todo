<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function index()
    {
        return view('todo.list');

    }
    public function create()
    {
        return view('todo.create');

    }
}
