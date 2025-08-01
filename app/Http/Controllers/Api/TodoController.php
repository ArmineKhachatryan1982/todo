<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TodoRequest;
use App\Services\TodoService;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(protected TodoService $service){}

    public function index()
    {
        $data = $this->service->getAll();
        return response()->json($data,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TodoRequest $request)
    {
        $data = $this->service->storeData($request->all());

        return response()->json(['message' => 'success'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = $this->service->findData($id);

        return response()->json(['message'=> $data ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TodoRequest $request, string $id)
    {

        $data = $this->service->updateData($id,$request->all());
  
        return response()->json(['message'=> $data ], 200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data=$this->service->deleteData($id);
         return response()->json(['message'=> "success" ], 200);

    }
}
