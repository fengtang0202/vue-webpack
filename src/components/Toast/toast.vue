<template>
	<transition name='fade'>
		<div class='toast-wrapper' v-show='show'>
			<div class='toast-content' :style='styleObj'>{{ message }}</div>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				message: '',
				styleObj: {}
			}
		}
	};
</script>

<style lang='less' scoped>
	.toast-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		z-index: 999999;
	}
	.toast-content {
		padding: 15px;
		border-radius: 5px;
		line-height: 1;
		text-align: center;
		font-size:14px;
		font-family:'Helvetica';
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .4s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>