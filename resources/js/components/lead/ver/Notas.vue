<template>
    <div class="seccion_notas">
        <div class="crear_nota col-5">
            <h3>Notas</h3>
            <textarea name="" id="contenido_nota" cols="30" rows="10" placeholder="Agregar aquí una nota..."></textarea>
            <div>
                <button type="submit" class="Agregar_nota_btn">
                    <i class="fa-solid fa-plus"></i>
                    Agregar nota
                </button>
            </div>
        </div>
        <div class="historial col-7">

        </div>
    </div>
</template>

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
    display: flex;
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
</style>