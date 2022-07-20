<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Collection>
 */
class CollectionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->streetName(),
            'kind' => $this->faker->randomElement(['Music Albums', 'Movies']),
            'img' => $this->faker->randomElement([
                'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            ]),
        ];
    }
}
