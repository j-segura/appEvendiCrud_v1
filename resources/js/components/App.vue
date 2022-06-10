<template>
  <main>
    <nav class="nav_bar">
      <div class="logo_space">
        <a href="#">
          <img src="../../img/logo.png" alt="evendi" class="logo_nav" />
        </a>
      </div>
      <div class="box">
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

        <svg
          class="menu_icon_search"
          hidden
          width="26"
          height="26"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
            stroke="#F130D5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 17L13.1333 13.1333"
            stroke="#F130D5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <input type="checkbox" name="" id="check" />
        <label for="check" class="check-btn">
          <i class="menu_icon">
            <svg
              width="30"
              height="23"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.99976H17"
                stroke="#F130D5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 1.6665H17"
                stroke="#F130D5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 12.3333H17"
                stroke="#F130D5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
        </label>
        <div class="menu">
          <ul>
            <li>
              <router-link to="/">Leads</router-link>
            </li>
            <li>
              <router-link to="/admin">Administración</router-link>
            </li>
          </ul>
        </div>

        <div class="user">
          <router-link to="/user" class="user_name">{{ userName }}</router-link>
          <router-link to="/user" title="user">
            <img
              src="../../img/user_image.png"
              alt="{{ userName }}"
              class="perfil"
            />
          </router-link>
        </div>
      </div>
    </nav>

    <div class="routes">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      userName: "Gina Gómez",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #e5e5e5;
}

.routes {
    /* background: red; */
    padding: 25px 5%;
}

.nav_bar {
  width: 100%;
  min-width: 320px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3.1%;
  padding-right: 3.1%;
  z-index: 5;
}

.box {
  width: 750px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo_nav {
  height: 50px;
  width: auto;
}

.logo_space {
  margin-right: 25px;
}

.btn_serch {
  width: 42px;
  height: 30px;
  background: #f130d5;
  border: none;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input_search {
  width: 297px;
  height: 30px;
  background: #ebebeb;
  border-radius: 5px 0px 0px 5px;
  border: none;
  padding-left: 12px;
  padding-right: 12px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  font-family: "Quicksand", sans-serif;

  color: #7b7b7b;
}

.input_search:hover,
.input_search:focus,
.input_search:active {
  outline: none;
}

.menu {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.menu ul {
  width: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
}

.menu ul li {
  list-style: none;
}

.menu ul li a,
.user a {
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
  color: #aeaeae;
}

.menu ul li a:focus,
.user a:focus {
  color: #f130d5;
}

.user {
  display: flex;
  margin-left: 10px;
}

.user a {
  max-width: 125px;
}

.perfil {
  border: 50%;
  width: 42px;
  height: auto;
  margin-left: 12px;
}

.menu_icon,
#check {
  display: none;
}

@media screen and (max-width: 992px) {
  .user_name {
    display: none !important;
  }
}

@media screen and (max-width: 810px) {
  .menu {
    display: none;
  }

  .buscador {
    display: none !important;
  }

  .box {
    width: 150px;
  }

  .check_btn {
    display: block;
  }

  .menu_icon {
    display: block;
  }

  .menu {
    display: block;
    position: fixed;
    top: -80px;
    width: 100%;
    right: 0;
    transition: 0.5s;
    z-index: -1;
  }

  .menu ul {
    background-color: #ffffff;
    width: 100%;
    flex-direction: column;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.05);
  }

  .menu ul li {
    width: 100%;
    height: 40px;
    display: flex;
    align-self: start;
    padding-left: 3.1%;
    padding-right: 3.1%;
  }

  .menu ul li a {
    width: 100%;
  }

  .nav_bar {
    box-shadow: none;
  }

  #check:checked ~ .menu {
    top: 80px;
    z-index: 3;
  }

  .menu_icon_search {
    display: block !important;
    margin-top: 2px;
    margin-right: 20px;
  }
}
</style>