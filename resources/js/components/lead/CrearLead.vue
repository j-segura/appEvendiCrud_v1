<template>
    <div class="botonDiv">
        <router-link :to="{ name: 'leads' }" class="volver_btn">
            <i class="fa-solid fa-angles-left"></i>
            Volver
        </router-link>
    </div>
    <form class="crear_lead" @submit.prevent="">
        <h1 class="title">crear un lead</h1>
        <div class="datos_personales">
            <div class="datos">
                <div class="campo">
                    <label for="nombreApallido">Nombre y apellidos<span class="red">*</span></label>
                    <input type="text" id="nombreApellido" placeholder="Escribe tu nombre y apellido" class="input" v-model="nombreApellido"/>
                    <svg class="interrogante" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M4.545 4.50004C4.66255 4.16587 4.89457 3.88409 5.19998 3.70461C5.50538 3.52512 5.86445 3.45951 6.21359 3.5194C6.56273 3.57928 6.87941 3.7608 7.10754 4.0318C7.33567 4.30281 7.46053 4.6458 7.46 5.00004C7.46 6.00004 5.96 6.50004 5.96 6.50004"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 8.5H6.00531" stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="campo mart">
                    <label for="correo">Correo del cliente<span class="red">*</span></label>
                    <input type="email" id="correo" placeholder="Escribe el correo electrónico" class="input" v-model="email"/>
                    <svg class="interrogante" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M4.545 4.50004C4.66255 4.16587 4.89457 3.88409 5.19998 3.70461C5.50538 3.52512 5.86445 3.45951 6.21359 3.5194C6.56273 3.57928 6.87941 3.7608 7.10754 4.0318C7.33567 4.30281 7.46053 4.6458 7.46 5.00004C7.46 6.00004 5.96 6.50004 5.96 6.50004"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 8.5H6.00531" stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div class="datos mf">
                <div class="campo">
                    <label for="telefono">Teléfono o celular<span class="red">*</span></label>
                    <input type="text" id="telefono" placeholder="Escribe el teléfono o celular" class="input" v-model="telefono"/>
                    <svg class="interrogante" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M4.545 4.50004C4.66255 4.16587 4.89457 3.88409 5.19998 3.70461C5.50538 3.52512 5.86445 3.45951 6.21359 3.5194C6.56273 3.57928 6.87941 3.7608 7.10754 4.0318C7.33567 4.30281 7.46053 4.6458 7.46 5.00004C7.46 6.00004 5.96 6.50004 5.96 6.50004"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 8.5H6.00531" stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="campo mart">
                    <label for="ciudad">Ciudad<span class="red">*</span></label>
                    <input type="text" name="" id="ciudad" placeholder="Escoge la ciudad de residencia" class="input" v-model="ciudad"/>
                    <svg class="interrogante" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M4.545 4.50004C4.66255 4.16587 4.89457 3.88409 5.19998 3.70461C5.50538 3.52512 5.86445 3.45951 6.21359 3.5194C6.56273 3.57928 6.87941 3.7608 7.10754 4.0318C7.33567 4.30281 7.46053 4.6458 7.46 5.00004C7.46 6.00004 5.96 6.50004 5.96 6.50004"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 8.5H6.00531" stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
        <hr />
        <div class="datos_pedido">
            <div class="datos">
                <div class="campo">
                    <label for="paraQue">1. ¿Para qué necesitas el sitio?<span class="red">*</span></label>
                    <select name="select" id="paraQue" class="select" v-model="para_que">
                        <option value="Difundir info de mi empresa, productos y servicios">
                            Difundir info de mi empresa, productos y servicios
                        </option>
                        <option value="Vender en línea">Vender en línea</option>
                    </select>
                    <svg class="interrogante" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M4.545 4.50004C4.66255 4.16587 4.89457 3.88409 5.19998 3.70461C5.50538 3.52512 5.86445 3.45951 6.21359 3.5194C6.56273 3.57928 6.87941 3.7608 7.10754 4.0318C7.33567 4.30281 7.46053 4.6458 7.46 5.00004C7.46 6.00004 5.96 6.50004 5.96 6.50004"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 8.5H6.00531" stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div class="datos mf">
                <div class="campo" id="pregunta2_linea1" v-if="mostrar_preguntas_difundir">
                    <label for="queTipoDePagina">2. ¿Qué tipo de página quieres tener?<span class="red">*</span></label>
                    <select name="select" id="queTipoDePagina" class="select" v-model="tipo">
                        <option value="Landing page">Landing page</option>
                        <option value="One page (servicios)">
                            One page (servicios)
                        </option>
                        <option value="Sitio web (Internas)">Sitio web (Internas)</option>
                    </select>
                    <svg class="interrogante" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M4.545 4.50004C4.66255 4.16587 4.89457 3.88409 5.19998 3.70461C5.50538 3.52512 5.86445 3.45951 6.21359 3.5194C6.56273 3.57928 6.87941 3.7608 7.10754 4.0318C7.33567 4.30281 7.46053 4.6458 7.46 5.00004C7.46 6.00004 5.96 6.50004 5.96 6.50004"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 8.5H6.00531" stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="campo" id="pregunta2_linea2" v-if="mostrar_preguntas_vender">
                    <label for="ofreces">2. ¿Ofrece productos o servicios?<span class="red">*</span></label>
                    <select name="select" id="ofreces" class="select" v-model="ofrece">
                        <option value="Productos">Productos</option>
                        <option value="Servicios">Servicios</option>
                    </select>
                    <svg class="interrogante" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M4.545 4.50004C4.66255 4.16587 4.89457 3.88409 5.19998 3.70461C5.50538 3.52512 5.86445 3.45951 6.21359 3.5194C6.56273 3.57928 6.87941 3.7608 7.10754 4.0318C7.33567 4.30281 7.46053 4.6458 7.46 5.00004C7.46 6.00004 5.96 6.50004 5.96 6.50004"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 8.5H6.00531" stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="caracteristicas mart_25" v-if="mostrar_preguntas_vender || mostrar_preguntas_difundir">
            <label>3. ¿Qué características o secciones le gustaría incluír?<span class="red">*</span></label>
            <br>
            <div class="caracteristica">
                <input type="checkbox" id="nosotros" value="Nosotros" v-model="options">
                <label for="nosotros">Nosotros</label>
            </div>
            <div class="caracteristica">
                <input type="checkbox" id="mis_productos" value="Mis productos" v-model="options">
                <label for="mis_productos">Mis productos</label>
            </div>
            <div class="caracteristica">
                <input type="checkbox" id="mis_servicios" value="Mis servicios" v-model="options">
                <label for="mis_servicios">Mis servicios</label>
            </div>
            <div class="caracteristica">
                <input type="checkbox" id="contacto" value="Contacto" v-model="options">
                <label for="contacto">Contacto</label>
            </div>
            <div class="caracteristica">
                <input type="checkbox" id="blog" value="Blog" v-model="options">
                <label for="blog">Blog</label>
            </div>
            <div class="caracteristica">
                <input type="checkbox" id="chat_en_linea" value="Chat en línea" v-model="options">
                <label for="chat_en_linea">Chat en línea</label>
            </div>
            <div class="caracteristica">
                <input type="checkbox" id="tratamiento_de_datos_personales" value="Tratamiento de datos personales" v-model="options">
                <label for="tratamiento_de_datos_personales">Tratamiento de datos personales</label>
            </div>
            <div class="caracteristica">
                <input type="checkbox" id="terminos_y_condiciones" value="Términos y condiciones" v-model="options">
                <label for="terminos_y_condiciones">Términos y condiciones</label>
            </div>
            <div class="caracteristica" v-if="mostrar_preguntas_vender">
                <input type="checkbox" id="politicas_de_envio" value="Politicas de envío" v-model="options">
                <label for="politicas_de_envio">Politicas de envío</label>
            </div>
            <div class="caracteristica" v-if="mostrar_preguntas_vender">
                <input type="checkbox" id="politicas_de_devoluciones" value="Politicas de devoluciones" v-model="options">
                <label for="politicas_de_devoluciones">Politicas de devoluciones</label>
            </div>
        </div>

        <div class="datos_pedido mart_25 linea2" v-if="mostrar_preguntas_vender">
            <div class="datos">
                <div class="campo">
                    <label for="carrito">4. ¿Incluir un carrito de compras?<span class="red">*</span></label>
                    <select name="select" id="carrito" class="select" v-model="carrito">
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                    <svg class="interrogante" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M4.545 4.50004C4.66255 4.16587 4.89457 3.88409 5.19998 3.70461C5.50538 3.52512 5.86445 3.45951 6.21359 3.5194C6.56273 3.57928 6.87941 3.7608 7.10754 4.0318C7.33567 4.30281 7.46053 4.6458 7.46 5.00004C7.46 6.00004 5.96 6.50004 5.96 6.50004"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 8.5H6.00531" stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div class="datos mf">
                <div class="campo">
                    <label for="envios">5. ¿Requiere integración con plataforma de envíos?<span
                            class="red">*</span></label>
                    <select name="select" id="envios" class="select" v-model="envios">
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                    <svg class="interrogante" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M4.545 4.50004C4.66255 4.16587 4.89457 3.88409 5.19998 3.70461C5.50538 3.52512 5.86445 3.45951 6.21359 3.5194C6.56273 3.57928 6.87941 3.7608 7.10754 4.0318C7.33567 4.30281 7.46053 4.6458 7.46 5.00004C7.46 6.00004 5.96 6.50004 5.96 6.50004"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 8.5H6.00531" stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="datos_pedido mart_25" v-if="mostrar_preguntas_vender || mostrar_preguntas_difundir">
            <div class="datos">
                <div class="campo">
                    <label for="servicios"><span v-if="mostrar_preguntas_difundir">4</span><span
                            v-if="mostrar_preguntas_vender">6</span>. ¿Cuántos servicios o productos te gustaría
                        incluir?<span class="red">*</span></label>
                    <select name="select" id="servicios" class="select" v-model="productos">
                        <option value="1 - 5">1 - 5</option>
                        <option value="5 - 10">5 - 10</option>
                        <option value="10 - 20">10 - 20</option>
                        <option value="Más de 20">Más de 20</option>
                    </select>
                    <svg class="interrogante" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M4.545 4.50004C4.66255 4.16587 4.89457 3.88409 5.19998 3.70461C5.50538 3.52512 5.86445 3.45951 6.21359 3.5194C6.56273 3.57928 6.87941 3.7608 7.10754 4.0318C7.33567 4.30281 7.46053 4.6458 7.46 5.00004C7.46 6.00004 5.96 6.50004 5.96 6.50004"
                            stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 8.5H6.00531" stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="enviar">
            <button type="submit" class="guardar">Crear Lead</button>
        </div>
    </form>
</template>

<script>

export default {
    data() {
        return {
            nombreApellido: '',
            email: '',
            telefono: '',
            ciudad: '',
            para_que: '',
            mostrar_preguntas_difundir: false,
            mostrar_preguntas_vender: false,
            tipo: '',
            ofrece: '',
            carrito: '',
            envios: '',
            productos: '',
            options: [],
            caracteristicas: ''    
        }
    },


    watch: {
        para_que: function () {
            if (this.para_que == 'Difundir info de mi empresa, productos y servicios') {
                this.mostrar_preguntas_difundir = true
                this.mostrar_preguntas_vender = false
                this.ofrece = 'no aplica'
                this.carrito = 'no aplica'
                this.envios = 'no aplica'
                this.politicas_de_envio = 'no aplica'
                this.politicas_de_devoluciones = 'no aplica'
            } else if (this.para_que == 'Vender en línea') {
                this.mostrar_preguntas_vender = true
                this.mostrar_preguntas_difundir = false
                this.tipo = 'no aplica'
            } else {
                this.mostrar_preguntas_difundir = false
                this.mostrar_preguntas_vender = false
            }
        },

        options: function () {
            this.caracteristicas = this.options.join(", ")
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap");

.caracteristica label {
    margin-left: 5px;
}

.mart_25 {
    margin-top: 25px;
}

.datos_pedido {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.select {
    width: 100%;
    height: 53px;
    background: #ffffff;
    border: 1px solid #c1c1c1;
    border-radius: 6px;
    margin-top: 9px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #797979;
    padding: 0 18px;
}

.grupoCampo {
    max-width: 462px;
}

.guardar {
    width: 100%;
    height: 63px;
    background: #f130d5;
    border-radius: 5px;
    border: none;
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    margin-top: 47px;
}

.botonDiv {
    max-width: 1027px;
    width: 100%;
    height: auto;
    margin: auto;
}

.volver_btn {
    width: 101px;
    height: 30px;
    background: #5e227f;
    border-radius: 5px;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
    text-decoration: none;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 20px;
}

.datos_personales {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.mf {
    margin-left: 20px;
}

.crear_lead {
    max-width: 1027px;
    width: 100%;
    height: auto;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    margin: auto;
    padding: 31px 39px 40px;
}

.mart {
    margin-top: 18px;
}

.title {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 41px;
    /* identical to box height */
    color: #6c1c81;
    margin-bottom: 12px;
}

.red {
    color: rgb(255, 90, 90);
}

label {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #6c6c6c;
}

.datos {
    width: 462px;
}

.campo {
    display: flex;
    flex-direction: column;
    position: relative;
    width: auto;
}

.input {
    max-width: 462px;
    width: 100%;
    height: 53px;
    background: #ffffff;
    border: 1px solid #c1c1c1;
    border-radius: 6px;
    padding-left: 18px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #6c6c6c;
    margin-top: 9px;
}

.input::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #c1c1c1;
    margin-top: 9px;
}

.interrogante {
    position: absolute;
    top: 0;
    right: 0;
}

hr {
    background: #e9e9e9;
    margin-top: 32px;
    margin-bottom: 20px;
}

@media screen and (max-width: 600px) {
    .datos_personales {
        flex-wrap: wrap;
    }

    .mf {
        margin-left: 0px;
        margin-top: 18px;
    }

    .datos_pedido {
        flex-wrap: wrap;
    }
}
</style>
