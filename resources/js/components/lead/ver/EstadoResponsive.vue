<template>
    <div class="estado_responsive">
        <label for="estado">Estado:</label>
        <select name="" id="estado" v-model="valor" class="select_estado"
            :style="{ background: background, color: color }">
            <option value="sin contactar">Sin contactar</option>
            <option value="en gestion">En Gestión</option>
            <option value="en negociacion">En negociación</option>
            <option value="en demo">En Demo</option>
            <option value="contratado">Contratado</option>
            <option value="cerrado">Cerrado</option>
            <option value="archivado">Archivado</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valor: 'sin contactar',
            background: '#F1F1F1',
            color: '#7B7B7B'
        }
    },

    watch: {
        valor: function () {
            switch (this.valor) {
                case 'sin contactar':
                    this.background = '#F1F1F1'
                    this.color = '#7B7B7B'
                    break;
                case 'en gestion':
                    this.background = '#d9dafc'
                    this.color = '#405fd1'
                    break;
                case 'en negociacion':
                    this.background = '#f6cdcd'
                    this.color = '#f51a1a'
                    break;
                case 'en demo':
                    this.background = '#FFF6E8'
                    this.color = '#F5A51A'
                    break;
                case 'contratado':
                    this.background = '#E5FFFA'
                    this.color = '#1ABC9C'
                    break;
                case 'cerrado':
                    this.background = '#ffddf8'
                    this.color = '#ee3bc7'
                    break;
                case 'archivado':
                    this.background = '#d5cdf6'
                    this.color = '#a81af5'
                    break;
            }
        }
    }
}
</script>

<style scoped>
.estado_responsive {
    margin-top: 26px;
}

.estado_responsive label {
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #7B7B7B;
    margin-bottom: 7px;
}

.select_estado {
    width: 100%;
    height: 31px;
    border: none;
    border-radius: 20px;
    padding-left: 13px;
    padding-right: 8px;
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 13px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    /* color: #ffddf8; */
}
</style>