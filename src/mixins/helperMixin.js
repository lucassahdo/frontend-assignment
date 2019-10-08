export default {
  data() {
    return {
      loaderParams: null,
      fullPage: true
    };
  },
  methods: {
    startLoading() {
      this.loader = this.$loading.show(this.loaderParams);
    },
    stopLoading() {
      if (this.loader) this.loader.hide();
    },
    isset(variable) {
      if (typeof variable != 'undefined') 
        return true;
      return false;
    }
  },
  mounted() {
    this.loaderParams = {
      container: this.fullPage ? null : this.$refs.formContainer,
      canCancel: false,
      onCancel: this.onCancel,
      loader: 'bars',
      color: "rgb(189, 105, 238)",
      width: 128,
      height: 128,
      zIndex: 9999,
      backgroundColor: '#000000',
      opacity: 0.6
    };
  }
};