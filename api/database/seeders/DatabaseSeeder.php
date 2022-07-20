<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if (app()->environment('production')) {
            abort(1, 'Never gonna let you down!');
        }

        // \App\Models\User::factory(10)->create();

         \App\Models\User::factory()->create([
             'name' => 'Admin User',
             'email' => 'admin@admin.com',
         ]);

         $this->call(CollectionSeeder::class);
    }
}
