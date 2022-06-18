<template>
    <div class="card">
        <div class="item mr">
            <h3>Fecha</h3>
            <p>12/04/2022</p>
        </div>
        <div class="item mr">
            <h3>Nombre</h3>
            <p>Maria Laura</p>
        </div>
        <div class="item mr">
            <h3>Apellido</h3>
            <p>Saldarriaga</p>
        </div>
        <div class="item mr">
            <h3>Email</h3>
            <p>marialaurazb@gmail.com</p>
        </div>
        <div class="item mr">
            <h3>Para</h3>
            <p>Vender en línea</p>
        </div>
        <div class="item mr">
            <h3>Valor cotizado</h3>
            <p>$2.500.000</p>
        </div>
        <div class="item mr estado">
            <h3>Estado</h3>
            <div class="caja">
                <p class="contracto_evendi">Contrató Evendi</p>
            </div>
        </div>
        <router-link to='/verDetalles' class="ver_estado_btn">
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 6.90907C1 6.90907 3.72727 1.45453 8.5 1.45453C13.2727 1.45453 16 6.90907 16 6.90907C16 6.90907 13.2727 12.3636 8.5 12.3636C3.72727 12.3636 1 6.90907 1 6.90907Z"
                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M8.50004 8.95453C9.62972 8.95453 10.5455 8.03874 10.5455 6.90907C10.5455 5.7794 9.62972 4.86362 8.50004 4.86362C7.37037 4.86362 6.45459 5.7794 6.45459 6.90907C6.45459 8.03874 7.37037 8.95453 8.50004 8.95453Z"
                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Ver detalle</p>
        </router-link>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    min-height: 84px;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 3%;
    margin-top: 20px;
    border: none;
    position: relative;
}

.card .item h3 {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #F130D5;
    margin: 0;
    margin-bottom: 3px;
}


.card .item p {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #7B7B7B;
    margin: 0;
}

.caja {
    width: 114px;
    height: 15px;
    background: #E6FFFA;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contracto_evendi {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;

    color: #1ABC9C;
}

.ver_estado_btn {
    min-width: 114px;
    height: 30px;
    background: #F130D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    text-decoration: none;
}

.ver_estado_btn p {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin: 0;
    margin-left: 7px;
}

.mr {
    margin-right: 0;
    margin-top: 0;
}

@media screen and (max-width: 1100px) {
    /* body {
        background: rgb(91, 91, 91) !important;
    } */

    .card {
        flex-wrap: wrap;
        padding: 40px 30px 30px 30px;
    }

    .mr {
        margin-right: 30px;
        margin-top: 30px;
    }

    .ver_estado_btn {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    /* .ver_estado_btn {
        margin-top: 30px;
        width: 100%;
    } */

    .estado {
        display: flex;
        position: absolute;
        top: 0px;
        margin-right: 0;
    }

    .caja {
        width: 201px;
        margin-left: 7px;
    }

    .m_t {
        padding-top: 0 !important;
    }

    .btn_admin {
        padding-top: 30px;
    }
}

@media screen and (max-width: 734px) {
    .card {
        justify-content: start;
    }
}

@media screen and (max-width: 536px) {
    .ver_estado_btn {
        position: static;
        margin-top: 30px;
        width: 100%;
    }

    .card {
        justify-content: space-between;
    }
}
</style>