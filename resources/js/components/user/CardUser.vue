<template>
    <nav class="card m_t">
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
            <p>Saldarriaga Gómez</p>
        </div>
        <div class="item mr">
            <h3>Email</h3>
            <p>marialaurazb@gmail.com</p>
        </div>
        <div class="item mr">
            <h3>Contraseña</h3>
            <p>1258s6d82s</p>
        </div>
        <div class="btn_admin">

            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5H3H19" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5H17Z"
                    stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>



            <input type="checkbox" name="" id="1">
            <label for="1" class="lbl"></label>
        </div>
    </nav>
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

.mr {
    margin-right: 0;
    margin-top: 0;
}

.lbl {
    width: 38px;
    height: 22.5px;
    border: 0.5px solid #ADB5BD;
    border-radius: 11px;
    cursor: pointer;
    position: relative;
    transition: .2s;
    margin-left: 35px;
}

.lbl::after {
    content: '';
    display: block;
    width: 17px;
    height: 17px;
    background: #C4C4C4;
    border-radius: 50%;
    position: absolute;
    top: 1.5px;
    left: 2px;
    transition: 0.2s;
}

input[type="checkbox"]:checked+.lbl::after {
    left: 17px;
    background: #FFFFFF;
}

input[type="checkbox"]:checked+.lbl {
    background: #F130D5;
    border: 0.5px solid #F130D5;
}

input[type="checkbox"] {
    display: none;
}

.btn_admin {
    display: flex;
    justify-content: center;
    align-items: center;
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

    .m_t {
        padding-top: 0 !important;
    }

    .btn_admin {
        padding-top: 30px;
    }
}
</style>