<template>
    <header>
        <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/shop">Shop</router-link></li>
          <li><router-link to="/faq">FAQ</router-link></li>
        </ul>
      </nav>

      <img alt="Logo" src="../assets/Logo-main.png">

      <nav>
        <ul>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/about">Über uns</router-link></li>
          <li><router-link to="/contact">Kontakt</router-link></li>
        </ul>
      </nav>

    <!-- Hamburger menu toggle button -->
    <button @click="toggleMenu">
        <span v-if="!menuVisible">&#9776;</span>
        <span v-else>&times;</span>
      </button>
    </header>
</template>

<script>
export default {
  data () {
    return {
      menuVisible: false // Keep track of whether the menu is visible or not
    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style lang="scss">
header {
  display: flex!important;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #DCDCDC;
  background-color: #F8F8F8;

  nav {
    display: flex;
    align-items: center;
    padding: 30px;

    ul {
      display: flex;
      list-style: none;

      li {
        margin-left: 20px!important;

        a {
          text-decoration: none;
          font-weight: bold;
          color: #000000;

          &:hover {
            color: rgb(18, 223, 35);
          }
          &.router-link-exact-active {
            color: #42b983;
          }
        }
      }
    }
  }

  img {
    height: 100px;
  }

  /* Style for the hamburger menu toggle button */
  button {
    display: none; // Initially hide the button
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 1.5em;
    color: #333;

    &:focus {
      outline: none;
    }
  }

  /* Media query for small screens */
  @media (max-width: 600px) {
    nav {
      display: none; // Initially hide the navigation links

      ul {
        flex-direction: column;
        padding: 0;
        margin: 0;

        li {
          margin: 0;
          padding: 10px;
          background-color: #f1f1f1;
        }
      }
    }

    button {
      display: block; // Show the hamburger menu toggle button
    }

    /* Show the navigation links when the menu is visible */
    &.show-menu nav {
      display: block;
    }
  }
}
</style>
