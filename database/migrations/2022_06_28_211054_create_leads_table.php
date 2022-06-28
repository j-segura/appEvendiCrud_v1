<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('creado_por');
            $table->date('fecha');
            $table->string('name');
            $table->string('apellido');
            $table->string('email');
            $table->string('telefono');
            $table->string('celular');
            $table->string('ciudad');
            $table->string('valor_cotizado');
            $table->string('para');
            $table->string('estado');
            $table->char('carrito');
            $table->char('envios');
            $table->string('tipo');
            $table->string('ofrece');
            $table->string('productos');
            $table->text('secciones');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leads');
    }
};
