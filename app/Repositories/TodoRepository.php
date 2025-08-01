<?php
namespace App\Repositories;

use App\Interface\TodoInterface;
use App\Models\Todo;

class TodoRepository extends BaseRepository implements TodoInterface
{
    public function __construct(Todo $model){

       parent::__construct($model);
    }
}
