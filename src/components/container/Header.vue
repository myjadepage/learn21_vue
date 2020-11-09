<template>
  <header class="header">
    <nav class="navbar fixed-top">
      <div
        class="navbar-holder d-flex align-items-center align-middle justify-content-between"
      >
        <div class="navbar-header">
          <a href="/" class="navbar-brand">
            <div class="brand-image brand-big">
              <img src="@/assets/img/logo.png" alt="logo" class="logo-big" />
            </div>
            <div class="brand-image brand-small">
              <img src="@/assets/img/logo.png" alt="logo" class="logo-small" />
            </div>
          </a>
          <a
            href="#"
            id="toggle-btn"
            class="menu-btn"
            title="menu"
            :class="{ active: isToggleBtnActive }"
            @click.prevent="toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <ul
          class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right"
        >
          <li class="nav-item d-flex align-items-center">
            <button
              type="button"
              class="btn btn-gradient-03"
              id="smsSendModal"
              data-toggle="modal"
              data-target="smsSendModal"
            >
              SMS전송
            </button>
          </li>
          <li class="nav-item d-flex align-items-center">
            <a href="#">기획팀 홍길동</a>
          </li>
          <li class="nav-item d-flex align-items-center">
            <a href="/"><i class="la la-home"></i>대시보드</a>
          </li>
          <li class="nav-item d-flex align-items-center page_move">
            <a href="#" rel="member_update" data-src="member_update.html"
              >정보수정</a
            >
          </li>
          <li class="nav-item d-flex align-items-center">
            <a href="logout.html">로그아웃</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {};
  },
  computed: {
    isToggleBtnActive() {
      return this.$store.state.isSideOpen;
    }
  },
  methods: {
    toggle() {
      this.$store.commit("toggleNav");
    }
  }
};
</script>
