<template>
  <transition name="fade">
    <div
      class="sidebar"
      v-if="isSidebarOpen"
      :class="{
        'sidebar--open': isSidebarOpen,
      }"
    >
      <div class="sidebar__desktop">
        <nav class="sidebar__menu">
          <ul class="menu-list">
            <div class="menu-list menu-list--top">
              <li class="menu-list__item">
                <a href="#" class="item row">
                  <icon-home class="item__icon" color="black" fill="gray" />
                  <span class="item__link">Home</span>
                </a>
              </li>

              <li class="menu-list__item">
                <a href="#" class="item row">
                  <icon-home class="item__icon" color="black" fill="gray" />
                  <span class="item__link">Home</span>
                </a>
              </li>

              <li class="menu-list__item">
                <a href="#" class="item row">
                  <icon-home class="item__icon" color="black" fill="gray" />
                  <span class="item__link">Home</span>
                </a>
              </li>
            </div>

            <div class="menu-list menu-list--bottom">
              <li class="menu-list__item">
                <a href="#" class="item row">
                  <icon-home class="item__icon" color="black" fill="gray" />
                  <span class="item__link">Home</span>
                </a>
              </li>

              <li class="menu-list__item">
                <a href="#" class="item row">
                  <icon-home class="item__icon" color="black" fill="gray" />
                  <span class="item__link">Home</span>
                </a>
              </li>

              <li class="menu-list__item">
                <a href="#" class="item row">
                  <icon-home class="item__icon" color="black" fill="gray" />
                  <span class="item__link">Home</span>
                </a>
              </li>

              <li class="menu-list__item">
                <a href="#" class="item row">
                  <icon-home class="item__icon" color="black" fill="gray" />
                  <span class="item__link">Home</span>
                </a>
              </li>

              <li class="menu-list__item">
                <a href="#" class="item row">
                  <icon-home class="item__icon" color="black" fill="gray" />
                  <span class="item__link">Home</span>
                </a>
              </li>

              <li class="menu-list__item">
                <a href="#" class="item row">
                  <icon-home class="item__icon" color="black" fill="gray" />
                  <span class="item__link">Home</span>
                </a>
              </li>

              <li class="menu-list__item">
                <a href="#" class="item row">
                  <icon-home class="item__icon" color="black" fill="gray" />
                  <span class="item__link">Home</span>
                </a>
              </li>

              <li class="menu-list__item">
                <a href="#" class="item row">
                  <icon-home class="item__icon" color="black" fill="gray" />
                  <span class="item__link">Home</span>
                </a>
              </li>
            </div>
          </ul>
        </nav>

        <div class="sidebar__subscriptions">
          <base-heading class="sidebar__title sidebar__title--big" size="4"
            >Subscriptions</base-heading
          >

          <ul class="subscriptions-list">
            <li class="subscriptions-list__item">
              <a href="#" class="item row">
                <img
                  class="item__avatar"
                  src="@/assets/images/avatar-user.png"
                  alt="User 1"
                />
                <span class="item__name">Gussie Singleton</span>
              </a>
            </li>

            <li class="subscriptions-list__item">
              <a href="#" class="item row">
                <img
                  class="item__avatar"
                  src="@/assets/images/avatar-user.png"
                  alt="User 1"
                />
                <span class="item__name">Gussie Singleton</span>
              </a>
            </li>

            <li class="subscriptions-list__item">
              <a href="#" class="item row">
                <img
                  class="item__avatar"
                  src="@/assets/images/avatar-user.png"
                  alt="User 1"
                />
                <span class="item__name">Gussie Singleton</span>
              </a>
            </li>

            <li class="subscriptions-list__item">
              <a href="#" class="item row">
                <img
                  class="item__avatar"
                  src="@/assets/images/avatar-user.png"
                  alt="User 1"
                />
                <span class="item__name">Gussie Singleton</span>
              </a>
            </li>

            <li class="subscriptions-list__item">
              <a href="#" class="item row">
                <img
                  class="item__avatar"
                  src="@/assets/images/avatar-user.png"
                  alt="User 1"
                />
                <span class="item__name">Gussie Singleton</span>
              </a>
            </li>

            <li class="subscriptions-list__item">
              <a href="#" class="item row">
                <img
                  class="item__avatar"
                  src="@/assets/images/avatar-user.png"
                  alt="User 1"
                />
                <span class="item__name">Gussie Singleton</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="sidebar__footer">
          <a href="#" class="item row">
            <icon-home />
            <span class="item__name">Settings</span>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import IconHome from "@/assets/icons/icon-home.svg";
import { mapActions, mapState } from "vuex";

export default {
  name: "Sidebar",
  components: {
    IconHome,
  },
  computed: {
    ...mapState(["isSidebarOpen"]),
  },

  methods: {
    ...mapActions(["setIsSidebarOpen"]),
  },
  mounted() {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth < 670) {
        this.setIsSidebarOpen(false);
      } else {
        console.log(this.isSidebarOpen);
        this.setIsSidebarOpen(this.isSidebarOpen);
      }
    });
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
