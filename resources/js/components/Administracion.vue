<template>
  <main>
    <div class="header">
      <div class="title">
        <h1>Solicitudes de cuentas</h1>
      </div>
      <div class="filtros">
        <div class="buscarDiv">
          <form class="d-flex buscador" role="search">
            <input class="input_search" type="search" placeholder="Buscar..." />
            <button class="btn_serch" type="submit">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 17L13.1333 13.1333"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
        <div class="selects">
          <div class="select">
            <label for="filtrar">Filtrar: </label>
            <select name="select" id="filtrar">
              <option value="Cuentas activas">Cuentas activas</option>
              <option value="Cuentas no activas">Cuentas no activas</option>
            </select>
          </div>
          <div class="select mar">
            <label for="filtrar">Ordenar: </label>
            <select name="select" id="filtrar" class="ordenar">
              <option value="Ascendente">Ascendente</option>
              <option value="Decreciente">Decreciente</option>
            </select>
          </div>
        </div>
      </div>
      
    </div>
  </main>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

main {
  background: #e5e5e5;
}

.header {
  position: relative;
  padding-top: 15px;
}
.title h1 {
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  color: #f130d5;
}

.input_search {
  background: #fff;
  width: 100%;
}

.buscarDiv {
  width: 50%;
}

.buscador {
  width: 100%;
}

.filtros {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
}

.selects {
  display: flex;
  width: 510px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

select {
  width: 195px;
  height: 35px;
  background: #ffffff;
  border-radius: 5px;
  border: none;
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
  padding: 0 10px;
  margin-left: 10px;

  color: #7b7b7b;
}

.ordenar {
  width: 148px !important;
}

.select label {
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02em;

  color: #7b7b7b;
}

@media screen and (max-width: 1140px) {
  .selects {
    width: 100%;
    justify-content: center;
    margin-top: 12px;
  }

  .buscarDiv {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .buscador {
    width: 50%;
  }

  .mar {
    margin-left: 30px;
  }
}

@media screen and (max-width: 810px) {
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .title h1 {
    text-align: center;
  }
}

@media screen and (max-width: 536px) {
  .ordenar {
    width: 195px !important;
    margin-top: 10px;
  }

  .mar {
    margin-left: 0px;
  }
}
</style>
