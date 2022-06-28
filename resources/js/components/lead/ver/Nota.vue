<template>
    <div class="nota">
        <h4>12/04/2022 - Diomar arenas</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy</p>
        <img src="" alt="">
        <div class="imagen">
            <svg width="103" height="103" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M90 2H13C6.92487 2 2 6.92487 2 13V90C2 96.0751 6.92487 101 13 101H90C96.0751 101 101 96.0751 101 90V13C101 6.92487 96.0751 2 90 2Z"
                    stroke="#F130D5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M32.2498 40.4998C36.8061 40.4998 40.4998 36.8061 40.4998 32.2498C40.4998 27.6934 36.8061 23.9998 32.2498 23.9998C27.6934 23.9998 23.9998 27.6934 23.9998 32.2498C23.9998 36.8061 27.6934 40.4998 32.2498 40.4998Z"
                    stroke="#F130D5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M101.001 68.0001L73.5007 40.5001L13.0007 101" stroke="#F130D5" stroke-width="3"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

.nota {
    width: 100%;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 20px;
    margin-top: 16px;
}

.nota h4 {
    font-family: 'Century Gothic';
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #F130D5;
}

.nota p {
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    /* or 136% */
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #555555;
    margin: 0;
}

.imagen {
    width: 351px;
    height: 214px;
    background: #FFE6FB;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

@media screen and (max-width: 576px) {
    .nota {
        background: #FAFAFA;
    }

    .imagen {
        width: 100%;
    }
}
</style>