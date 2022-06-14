<template>
    <div class="card_segundaInfo">
        <div class="parte1">
            <div class="group_items">
                <div class="item">
                    <h3>Fecha</h3>
                    <p>12/04/2022</p>
                </div>
                <div class="item">
                    <h3>Tipo</h3>
                    <p>One page con servicios</p>
                </div>
            </div>
            <div class="group_items grupo2">
                <div class="item">
                    <h3>Para</h3>
                    <p>Vender en línea</p>
                </div>
                <div class="item">
                    <h3>Ofrece</h3>
                    <p>Servicios</p>
                </div>
            </div>
            <div class="item n">
                <h3>Productos</h3>
                <p>10 - 20</p>
            </div>
        </div>
        <div class="parte2">
            <div class="item secciones">
                <h3>Secciones</h3>
                <p>Nosotros, productos, servicios, portafolio, Terminos y condiciones, tratamiento datos personales,
                    chat en línea, blog, contacto, politicas de envío</p>
            </div>
        </div>
    </div>
</template>


<style scoped>
.card_segundaInfo {
    width: 100%;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    margin-top: 27px;
    padding: 25px;
}

.parte1 {
    width: 100%;
    display: flex;
    justify-content: start;
}

.item h3 {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #F130D5;
}

.item {
    margin-right: 100px;
}

@media screen and (max-width: 1035px) {
    .item {
        margin-right: 80px;
    }
}

@media screen and (max-width: 955px) {
    .item {
        margin-right: 60px;
    }
}

@media screen and (max-width: 857px) {
    .item {
        margin-right: 40px;
    }
}

.n {
    margin-right: 10px;
}

.item p {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #7B7B7B;
}

.parte2 {
    display: flex;
}

.secciones {
    display: flex;
    width: auto !important;
}

.secciones p {
    margin-left: 15px !important;
    margin: 0;
}

.secciones h3 {
    margin: 0;
    display: flex;
    align-items: start;
}

.group_items {
    display: flex;
}

.last {
    width: 30% !important;
}

@media screen and (max-width: 768px) {
    .parte1 {
        flex-direction: column;
    }

    .item {
        margin-right: 0px;
        width: 100%;
    }

    .secciones {
        flex-direction: column;
    }

    .secciones p {
        margin-left: 0px !important;
        margin-top: 8px !important;
        margin: 0;
    }
}
</style>