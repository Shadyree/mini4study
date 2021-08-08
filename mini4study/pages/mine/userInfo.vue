<template>
	<view>
		<view class="top">
			<view class="top__account-info">
				<view class="top__account-info__user">
					{{ username }}
				</view>
				<view class="top__account-info__number">
					{{ loginPhone }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '巧克力狗粮',
				loginPhone: '13087824649',
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.top {
		margin: 40rpx 30rpx;
		background-color: #aaffff;
		border-radius: 20rpx;
		&__account-info {
			margin-left: 30rpx;
			&__user{
				font-size: 40rpx;
				margin-bottom: 30rpx;
				color: #ffaa00;
			}
			
			&__number {
				font-size: 30rpx;
				margin-bottom: 30rpx;
				color: #555555;
			}
		}
	}
</style>
