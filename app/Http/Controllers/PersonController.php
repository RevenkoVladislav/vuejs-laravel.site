<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function __invoke()
    {
        $persons = [
            [
                'id' => 1,
                'name' => 'Oleg',
                'age' => 25,
                'job' => 'Web Developer'
            ],
            [
                'id' => 2,
                'name' => 'Vlad',
                'age' => 30,
                'job' => 'manager'
            ],
            [
                'id' => 3,
                'name' => 'Sonya',
                'age' => 10,
                'job' => 'pupil'
            ]
        ];
        return $persons;
    }
}
