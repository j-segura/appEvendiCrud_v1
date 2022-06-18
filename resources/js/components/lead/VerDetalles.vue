<template>
    <div class="botonDiv">
        <router-link :to="{ name: 'leads' }" class="volver_btn">
            <i class="fa-solid fa-angles-left"></i>
            Volver
        </router-link>
    </div>
    <Estado class="estado" />
    <PrimerInfo />
    <EstadoResponsive class="estado_responsive" />
    <SegundaInfo />
    <Notas />
</template>

<script>

import PrimerInfo from './ver/PrimerInfo'
import SegundaInfo from './ver/SegundaInfo'
import Notas from './ver/Notas'
import Estado from './ver/Estado'
import EstadoResponsive from './ver/EstadoResponsive'

export default {
    components: {
        PrimerInfo,
        SegundaInfo,
        Notas,
        Estado,
        EstadoResponsive
    }
}
</script>

<style scoped>
.botonDiv {
    width: 100%;
    height: auto;
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

.estado_responsive {
    display: none;
}

@media screen and (max-width: 1235px) {
    .estado {
        display: none;
    }

    .estado_responsive {
        display: block;
    }

}
</style>