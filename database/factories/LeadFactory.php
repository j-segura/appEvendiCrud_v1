<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class LeadFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'creado_por' => $this->faker->randomElement(['sitio web', 'evendi']),
            'fecha' => $this->faker->date(),
            'name' => $this->faker->firstName(),
            'apellido' => $this->faker->lastName(),
            'email' => $this->faker->email(),
            'telefono' => $this->faker->phoneNumber(),
            'celular' => $this->faker->phoneNumber(),
            'ciudad' => $this->faker->city(),
            'valor_cotizado' => $this->faker->numberBetween(1000000, 5000000),
            'para' => $this->faker->randomElement(['Difundir info de mi empresa, productos y servicios', 'Vender en línea']),
            'estado' => $this->faker->randomElement(['Sin contactar', 'En Gestión', 'En negociación', 'En Demo', 'Contratado', 'Cerrado', 'Archivado']),
            'carrito' => $this->faker->randomElement(['Si', 'No']),
            'envios' => $this->faker->randomElement(['Si', 'No']),
            'tipo' => $this->faker->randomElement(['Landing page', 'One page(servicios)', 'Sitio web(Internas)']),
            'ofrece' => $this->faker->randomElement(['Productos', 'Servicios']),
            'productos' => $this->faker->randomElement(['1 - 5', '5 -10', '10 - 20', 'mas de 20']),
            'secciones' => $this->faker->randomElement(['Nosotros, productos, servicios', 'portafolio, Terminos y condiciones, tratamiento datos personales, chat en línea', 'blog, contacto, politicas de envío']),
        ];
    }
}
