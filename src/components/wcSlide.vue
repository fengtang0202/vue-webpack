<template>
	<div class="wc-slide" @click="clickHandler">
		<slot/>
	</div>
</template>
<script>
	export default {
		name: 'wcSlide',
		methods: {
			clickHandler () {
				this.$emit('click');
			}
		}
	}
</script>
<style lang="less" scoped>
.wc-slide {
	height: 100%;
    width: 100%;
    flex-shrink: 0;
    z-index: 10;
    overflow: hidden;
    img {
    	-webkit-user-drag:none;
    }
}
</style>