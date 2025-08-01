<?php
namespace App\Services;

use App\Http\Resources\TodoResource;
use App\Interface\TodoInterface;

class TodoService
{
    public function __construct( protected TodoInterface $todoRepository){}

     public function getAll()
    {
        $data = $this->todoRepository->all();
        return TodoResource::collection($data);
    }

    public function storeData($data)
    {
        return $this->todoRepository->create($data);
    }
    public function findData($id){

        return $this->todoRepository->find($id);
    }

    public function updateData($id,$data){

        $data = $this->todoRepository->update($id, $data);
        return new TodoResource($data);
    }
    public function deleteData($id){

        return $this->todoRepository->delete($id);

    }



}
