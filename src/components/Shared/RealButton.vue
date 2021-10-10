<template>
  <button class="real-button">
    <span class="real-button__shadow"></span>
    <span class="real-button__edge"></span>
    <span class="real-button__front"> {{ text }} </span>
  </button>
</template>

<script>
export default {
  name: "RealButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<style lang="scss" scoped>
.real-button {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  &__shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: $secondary-color;
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    &:hover {
      transform: translateY(4px);
      transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    }
    &:active {
      transform: translateY(1px);
      transition: transform 34ms;
    }
  }
  &__edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      $primary-color 0%,
      $secondary-color 8%,
      $secondary-color 92%,
      $primary-color 100%
    );
  }
  &__front {
    display: block;
    position: relative;
    padding: 12px 42px;
    border-radius: 2rem;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    background: $tertiary-color;
    will-change: transform;
    transform: translateY(-6px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    &:hover {
      transform: translateY(-8px);
      transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    }
    &:active {
      transform: translateY(-4px);
      transition: transform 34ms;
    }
  }
  &:hover {
    filter: brightness(110%);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
}
</style>
