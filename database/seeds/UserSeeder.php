<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => "Usuario de prueba",
            'email' => 'test@gmail.com',
            'password' => Hash::make('Password'),
            "created_at" => new Carbon('2020/01/01 00:00:01'),
            "updated_at" => new Carbon('2020/01/01 00:00:01'),
        ]);
    }
}
