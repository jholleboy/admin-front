<template>
  <div class="sidebar">
    <router-link class="brand-logo" to="/index">
      PAINEL
      </router-link
    >
    <div class="menu">
      <ul>
        <li :class="active === 1 && 'active'">
          <router-link to="/" :class="active === 1 && 'active'">
            <span><i class="mdi mdi-view-dashboard"></i></span>
            <span class="nav-text">Usuarios</span>
          </router-link>
        </li>
        <li :class="active === 2 && 'active'">
          <router-link to="Tarefas" :class="active === 2 && 'active'">
            <span><i class="mdi mdi-view-dashboard"></i></span>
            <span class="nav-text">Tarefa</span>
          </router-link>
        </li>
       </ul>
    </div>

    <div class="sidebar-footer">
      <div class="social">
        <a to="#"><i class="fa fa-github"></i></a>
        <a to="#"><i class="fa fa-linkedin"></i></a>
      </div>
      <div class="copy_right">© {{ new Date().getFullYear() }} Joseph C.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    active: Number,
  },
};
</script>
