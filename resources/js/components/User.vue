<template>
    <div class="botonDiv">
        <router-link :to="{ name: 'leads' }" class="volver_btn">
            <i class="fa-solid fa-angles-left"></i>
            Volver
        </router-link>
        <h1 class="title">Mi Cuenta</h1>
    </div>
    <div class="card_mi_cuenta">
        <input type="checkbox" name="" id="1">
        <label for="1" class="lbl mo"></label>
        <div class="photo_container">
            <div class="perfil_photo">
                <img src="" alt="">
                <svg width="48" height="54" viewBox="0 0 48 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M46 51.5V46C46 43.0826 44.8411 40.2847 42.7782 38.2218C40.7153 36.1589 37.9174 35 35 35H13C10.0826 35 7.28472 36.1589 5.22182 38.2218C3.15892 40.2847 2 43.0826 2 46V51.5"
                        stroke="#F130D5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M24 24C30.0751 24 35 19.0751 35 13C35 6.92487 30.0751 2 24 2C17.9249 2 13 6.92487 13 13C13 19.0751 17.9249 24 24 24Z"
                        stroke="#F130D5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <button class="edit_photo">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
            </div>
        </div>
        <div class="info">
            <h2 class="nombre">Juan Camilo Saldarriaga Arenas</h2>
            <div class="datos">
                <div class="group_one">
                    <div class="dato">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.6 1.59998H15.4C16.28 1.59998 17 2.31998 17 3.19998V12.8C17 13.68 16.28 14.4 15.4 14.4H2.6C1.72 14.4 1 13.68 1 12.8V3.19998C1 2.31998 1.72 1.59998 2.6 1.59998Z"
                                stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 3.19995L9 8.79995L1 3.19995" stroke="#7B7B7B" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>jcamilo.saldarriaga@gmail.com.co</p>
                    </div>
                    <div class="dato">
                        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.6 1H2.6C1.71634 1 1 1.71634 1 2.6V15.4C1 16.2837 1.71634 17 2.6 17H10.6C11.4837 17 12.2 16.2837 12.2 15.4V2.6C12.2 1.71634 11.4837 1 10.6 1Z"
                                stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.6001 13.8H6.6081" stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <p>(+57) 312 5877 6495</p>
                    </div>
                </div>
                <div>
                    <div class="dato">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.9995 13.0029V15.4163C17.0004 15.6403 16.9545 15.8621 16.8648 16.0674C16.775 16.2727 16.6434 16.4569 16.4783 16.6084C16.3132 16.7599 16.1183 16.8752 15.906 16.947C15.6938 17.0187 15.4689 17.0454 15.2457 17.0252C12.7702 16.7562 10.3923 15.9103 8.30312 14.5555C6.35937 13.3203 4.71141 11.6724 3.47627 9.72864C2.11669 7.62992 1.27059 5.24046 1.00653 2.75383C0.986426 2.53137 1.01286 2.30716 1.08416 2.09547C1.15546 1.88379 1.27005 1.68926 1.42065 1.52429C1.57124 1.35932 1.75454 1.22751 1.95886 1.13726C2.16319 1.04701 2.38407 1.00029 2.60744 1.00008H5.02086C5.41128 0.996235 5.78977 1.13449 6.0858 1.38907C6.38182 1.64365 6.57517 1.99718 6.62981 2.38378C6.73168 3.15613 6.92059 3.91447 7.19295 4.64435C7.30118 4.93229 7.32461 5.24523 7.26045 5.54607C7.19629 5.84692 7.04723 6.12307 6.83093 6.34179L5.80925 7.36348C6.95446 9.37752 8.62206 11.0451 10.6361 12.1903L11.6578 11.1686C11.8765 10.9524 12.1527 10.8033 12.4535 10.7391C12.7544 10.675 13.0673 10.6984 13.3552 10.8066C14.0851 11.079 14.8435 11.2679 15.6158 11.3698C16.0066 11.4249 16.3635 11.6217 16.6186 11.9228C16.8737 12.2239 17.0093 12.6083 16.9995 13.0029Z"
                                stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>(60) (4) 445 8796</p>
                    </div>
                    <div class="dato">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.6079 5.34363L14.372 2.5795M15.9515 1L14.372 2.5795L15.9515 1ZM8.36199 8.58951C8.76977 8.99186 9.09393 9.4709 9.31582 9.99905C9.5377 10.5272 9.65292 11.094 9.65484 11.6669C9.65675 12.2397 9.54534 12.8073 9.327 13.3369C9.10866 13.8666 8.78771 14.3478 8.38264 14.7528C7.97756 15.1579 7.49636 15.4789 6.96674 15.6972C6.43712 15.9155 5.86954 16.027 5.29668 16.025C4.72382 16.0231 4.157 15.9079 3.62885 15.686C3.1007 15.4641 2.62166 15.14 2.21931 14.7322C1.42808 13.913 0.990268 12.8158 1.00016 11.6769C1.01006 10.538 1.46688 9.44855 2.27222 8.64321C3.07756 7.83786 4.167 7.38105 5.30589 7.37115C6.44477 7.36126 7.54198 7.79907 8.3612 8.5903L8.36199 8.58951ZM8.36199 8.58951L11.6079 5.34363L8.36199 8.58951ZM11.6079 5.34363L13.9771 7.71288L16.7412 4.94875L14.372 2.5795L11.6079 5.34363Z"
                                stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>sjhoia.256*</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="habilitar_edicion">
            <router-link :to="{ name: 'editUser' }">
                <svg style="margin-right: 7px" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="a"
                        d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z"
                        stroke="#7B7B7B" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Habilitar edición
            </router-link>
        </div>
    </div>
    <CardUser/>
</template>

<style scoped>
.title {
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #F130D5;
}

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

.card_mi_cuenta {
    width: 100%;
    min-height: 166px;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 3%;
    position: relative;
}

.datos {
    display: flex;
}

.dato {
    display: flex;
}

.dato p {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #7B7B7B;
    margin-left: 15px;
}

.nombre {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #F130D5;
    margin-bottom: 21px;
}

.perfil_photo {
    width: 115px;
    height: 115px;
    border-radius: 50%;
    background: #FFE6FB;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 37px;
}

.edit_photo {
    width: 31px;
    height: 31px;
    background: #F130D5;
    border: none;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 84.5px;
    right: 0px;
}

.group_one {
    margin-right: 95px;
}

.habilitar_edicion {
    position: absolute;
    bottom: 21px;
    right: 30px;
    display: flex;
}

.habilitar_edicion a {
    text-decoration: none;
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: 0.02em;
    color: #7B7B7B;
    margin-left: 6px;
}


.habilitar_edicion:hover a,
.habilitar_edicion:hover .a {
    color: #F130D5;
    stroke: #F130D5;
}

.mo {
    position: absolute;
    right: 30px;
    top: 20px;
    z-index: 5;
}

.title_m {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #F130D5;
    margin-left: 6%;
    margin-bottom: 18px;
}

.lbl {
    width: 38px;
    height: 22.5px;
    border: 0.5px solid #ADB5BD;
    border-radius: 11px;
    cursor: pointer;
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

@media screen and (max-width: 950px) {
    .perfil_photo {
        margin-right: 0px;
        margin: auto;
    }

    .photo_container {
        width: 100%;
        position: absolute;
        top: -57.5px;
    }

    .card_mi_cuenta {
        margin-top: 60px;
        padding-top: 70px;
        padding-bottom: 50px;
        justify-content: center;
    }

    .nombre {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .botonDiv {
        display: flex;
        justify-content: space-between;
    }

    .group_one {
        margin-right: 0px;
    }

    .info {
        width: 100%;
    }

    .datos {
        max-width: 500px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
    }
}

@media screen and (max-width: 600px) {
    .datos {
        flex-direction: column;
    }

    .nombre {
        padding: 0 50px;
    }
}
</style>