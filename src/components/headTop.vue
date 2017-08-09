<template>
	<div class="header_container">
        导航
	</div>
</template>

<script>
import { baseImgPath } from '@/config/env'

export default {
	data() {
		return {
			baseImgPath,
			activeIndex: '1'
		}
	},
}
</script>

<style lang="less">

.logo{
	float: left;
	height: 60px;
    line-height: 60px;
	color: #333;
	background: #ccc;
	padding: 0 20px;
}

</style>
