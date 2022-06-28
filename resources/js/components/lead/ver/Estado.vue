<template>
    <div class="estado">
        <div class="barra">
            <div class="progreso" :style="{width: progreso_barra + '%'}"></div>
        </div>
        <div class="grupo_estado">
            <div class="boxes">
                <input type="radio" name="estado" id="sinContactar" value="sin contactar" v-model="valor">
                <label for="sinContactar" class="box_active">Sin contactar</label>
            </div>
            <div class="boxes">
                <input type="radio" name="estado" id="EnGestion" value="en gestion" v-model="valor">
                <label for="EnGestion" :class="[en_gestion_activo ? 'box_active' : 'box']">En Gestión</label>
            </div>
            <div class="boxes">
                <input type="radio" name="estado" id="EnNegociacion" value="en negociacion" v-model="valor">
                <label for="EnNegociacion" :class="[en_negociacion_activo ? 'box_active' : 'box']">En negociación</label>
            </div>
            <div class="boxes">
                <input type="radio" name="estado" id="EnDemo" value="en demo" v-model="valor">
                <label for="EnDemo" :class="[en_demo_activo ? 'box_active' : 'box']">En Demo</label>
            </div>
            <div class="boxes">
                <input type="radio" name="estado" id="Contratado" value="contratado" v-model="valor">
                <label for="Contratado" :class="[contratado_activo ? 'box_active' : 'box']">Contratado</label>
            </div>
            <div class="boxes">
                <input type="radio" name="estado" id="Cerrado" value="cerrado" v-model="valor">
                <label for="Cerrado" :class="[carrado_activo ? 'box_active' : 'box']">Cerrado</label>
            </div>
            <div class="boxes">
                <input type="radio" name="estado" id="Archivado" value="archivado" v-model="valor">
                <label for="Archivado" :class="[archivado_activo ? 'box_active' : 'box']">Archivado</label>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            progreso_barra: 5,
            valor: '',
            en_gestion_activo: false,
            en_negociacion_activo: false,
            en_demo_activo: false,
            contratado_activo: false,
            carrado_activo: false,
            archivado_activo: false
        }
    },

    watch: {
        valor: function () {
            switch (this.valor) {
                case 'sin contactar':
                    this.progreso_barra = 5;
                    this.en_gestion_activo = false
                    this.en_negociacion_activo = false
                    this.en_demo_activo = false
                    this.contratado_activo = false
                    this.carrado_activo = false
                    this.archivado_activo = false
                break;
                case 'en gestion':
                    this.progreso_barra = 20;
                    this.en_gestion_activo = true
                    this.en_negociacion_activo = false
                    this.en_demo_activo = false
                    this.contratado_activo = false
                    this.carrado_activo = false
                    this.archivado_activo = false
                break;
                case 'en negociacion':
                    this.progreso_barra = 35;
                    this.en_gestion_activo = true
                    this.en_negociacion_activo = true
                    this.en_demo_activo = false
                    this.contratado_activo = false
                    this.carrado_activo = false
                    this.archivado_activo = false
                break;
                case 'en demo':
                    this.progreso_barra = 50;
                    this.en_gestion_activo = true
                    this.en_negociacion_activo = true
                    this.en_demo_activo = true
                    this.contratado_activo = false
                    this.carrado_activo = false
                    this.archivado_activo = false
                break;
                case 'contratado':
                    this.progreso_barra = 65;
                    this.en_gestion_activo = true
                    this.en_negociacion_activo = true
                    this.en_demo_activo = true
                    this.contratado_activo = true
                    this.carrado_activo = false
                    this.archivado_activo = false
                break;
                case 'cerrado':
                    this.progreso_barra = 80;
                    this.en_gestion_activo = true
                    this.en_negociacion_activo = true
                    this.en_demo_activo = true
                    this.contratado_activo = true
                    this.carrado_activo = true
                    this.archivado_activo = false
                break;
                case 'archivado':
                    this.progreso_barra = 95;
                    this.en_gestion_activo = true
                    this.en_negociacion_activo = true
                    this.en_demo_activo = true
                    this.contratado_activo = true
                    this.carrado_activo = true
                    this.archivado_activo = true
                break;
            }
        }
    }
}
</script>

<style scoped>
.estado {
    width: 100%;
    height: 31px;
}

.barra {
    width: 100%;
    height: 1px;
    background: #C4C4C4;
    overflow: hidden;
    position: relative;
    top: 15px;
    z-index: 1;
}

input[type="radio"] {
  display: none;
}

.progreso {
    position: absolute;
    height: 1px;
    background: #f130d5;
    transition: 0.5s;
}

.grupo_estado {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.boxes {
    z-index: 5;
}

.box {
    width: 169px;
    height: 31px;
    background: #FFFFFF;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #7B7B7B;
    padding-left: 19px;
    transition: 0.3s
}

.box_active {
    width: 169px;
    height: 31px;
    background: #F130D5;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    padding-left: 19px;
    transition: 0.3s
}

@media screen and (max-width: 1400px) {
    .box {
        width: 150px;
    }

    .box_active {
        width: 150px;
    }
}
</style>