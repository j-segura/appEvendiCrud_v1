<template>
    <div class="seccion_notas">
        <div class="crear_nota">
            <h3>Notas</h3>
            <textarea name="" id="contenido_nota" cols="30" rows="10" placeholder="Agregar aquí una nota..."></textarea>
            <div class="agregar_seccion">
                <div class="file_select">
                    <label for="file">
                        <svg class="icon_img" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.4444 1H2.55556C1.69645 1 1 1.69645 1 2.55556V13.4444C1 14.3036 1.69645 15 2.55556 15H13.4444C14.3036 15 15 14.3036 15 13.4444V2.55556C15 1.69645 14.3036 1 13.4444 1Z"
                                stroke="#7B7B7B" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M5.27775 6.44442C5.92208 6.44442 6.44442 5.92208 6.44442 5.27775C6.44442 4.63342 5.92208 4.11108 5.27775 4.11108C4.63342 4.11108 4.11108 4.63342 4.11108 5.27775C4.11108 5.92208 4.63342 6.44442 5.27775 6.44442Z"
                                stroke="#7B7B7B" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.0001 10.3333L11.1112 6.44446L2.55566 15" stroke="#7B7B7B"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg class="icon_file" width="15" height="16" viewBox="0 0 15 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 7.5632L7.8539 13.8056C7.10095 14.5704 6.07974 15 5.01492 15C3.9501 15 2.92889 14.5704 2.17594 13.8056C1.423 13.0409 1 12.0037 1 10.9222C1 9.84064 1.423 8.80342 2.17594 8.03868L8.32204 1.79625C8.82401 1.28642 9.50481 1 10.2147 1C10.9246 1 11.6054 1.28642 12.1073 1.79625C12.6093 2.30608 12.8913 2.99756 12.8913 3.71856C12.8913 4.43957 12.6093 5.13105 12.1073 5.64088L5.95456 11.8833C5.70358 12.1382 5.36317 12.2814 5.00823 12.2814C4.65329 12.2814 4.31289 12.1382 4.06191 11.8833C3.81093 11.6284 3.66993 11.2827 3.66993 10.9222C3.66993 10.5616 3.81093 10.2159 4.06191 9.961L9.73986 4.20084"
                                stroke="#7B7B7B" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="adjuntar">Adjuntar archivo</p>
                    </label>
                    <input type="file" name="" id="file">
                </div>
                <div>
                    <button type="submit" class="Agregar_nota_btn">
                        <i class="fa-solid fa-plus"></i>
                        Agregar nota
                    </button>
                </div>
            </div>
        </div>
        <hr>
        <div class="historial">
            <div class="encabezado_historial">
                <h3>Historial de comentarios</h3>
                <select name="" id="" class="ordenar">
                    <option value="Ascendente">Ascendente</option>
                    <option value="Decreciente">Decreciente</option>
                </select>
            </div>
            <div>
                <Nota/>
            </div>
        </div>
    </div>
</template>

<script>
import Nota from './Nota.vue'

export default {
    components: {
        Nota
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.seccion_notas {
    margin-top: 31px;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 25px;
    display: grid;
    grid-template-columns: 2fr 3fr;
}

.crear_nota {
    padding-right: 18px;
}

.crear_nota h3 {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #F130D5;
}

.crear_nota textarea {
    width: 100%;
    height: 206px;
    background: #FFFFFF;
    border: 1px solid #C9C9C9;
    border-radius: 5px;
    padding: 17px;
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #7b7b7b;
}

.crear_nota textarea::placeholder {
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: rgba(123, 123, 123, 0.49);
}

.historial {
    height: 813px;
    background: #FAFAFA;
    border-radius: 5px;
    padding: 21px 30px;
}

.Agregar_nota_btn {
    width: 168px;
    height: 38px;
    border: 1px solid #F130D5;
    border-radius: 5px;
    background-color: #FFFFFF;
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #F130D5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
}


input[type="file"] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

label[for="file"] {
    cursor: pointer;
    width: fit-content;
    text-align: center;
    display: flex;
    align-items: center;

    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #7B7B7B;
}

label[for="file"] p {
    margin: 0;
}

.agregar_seccion {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
}

.icon_img {
    margin-right: 12px;
}

.icon_file {
    margin-right: 5px;
}

@media screen and (max-width: 1080px) {
    .seccion_notas {
        display: flex;
        flex-direction: column;
    }

    .historial {
        margin-top: 20px;
    }

    .crear_nota {
        padding: 0;
    }
}

.encabezado_historial {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.encabezado_historial h3 {
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #7B7B7B;
}

.ordenar {
    width: 148px;
    height: 25px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #7B7B7B;

}

hr {
    display: none;
    margin: 0;
}

@media screen and (max-width: 576px) {
    
    
    .historial {
        height: auto;
    }

    .seccion_notas {
        padding: 0;
    }

    .crear_nota {
        padding: 25px;
    }

    hr {
        display: block;
    }

    .historial {
        margin-top: 20px;
        background-color: #fff;
    }

    .ordenar {
        background: #FAFAFA;
    }

    .adjuntar {
        display: none;
    }

    .icon_file {
        width: 20px;
        height: 21px;
    }

    .icon_img {
        width: 21px;
        height: 21px
    }
}
</style>