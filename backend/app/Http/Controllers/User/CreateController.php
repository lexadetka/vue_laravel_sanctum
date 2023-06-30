<?php

namespace App\Http\Controllers\User;

use App\Http\Requests\User\CreateUser;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class CreateController extends BaseController
{
    public function __invoke(CreateUser $createUser){
        return $createUser;
    }
}
