import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Board from '@/views/board'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
	import news from '@/views/modules/news/list'
	import jiaoshi from '@/views/modules/jiaoshi/list'
	import xueshengchengji from '@/views/modules/xueshengchengji/list'
	import learningdataforecast from '@/views/modules/learningdataforecast/list'
	import discussxuexiziyuan from '@/views/modules/discussxuexiziyuan/list'
	import learningdata from '@/views/modules/learningdata/list'
	import yonghu from '@/views/modules/yonghu/list'
	import tijiaozuoye from '@/views/modules/tijiaozuoye/list'
	import kehouzuoye from '@/views/modules/kehouzuoye/list'
	import banjitongzhi from '@/views/modules/banjitongzhi/list'
	import xuexiziyuan from '@/views/modules/xuexiziyuan/list'
	import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
	path: '/',
	name: '系统首页',
	component: Index,
	children: [{
		// 这里不设置值，是把main作为默认页面
		path: '/',
		name: '系统首页',
		component: Home,
		meta: {icon:'', title:'center', affix: true}
	}, {
		path: '/updatePassword',
		name: '修改密码',
		component: UpdatePassword,
		meta: {icon:'', title:'updatePassword'}
	}, {
		path: '/pay',
		name: '支付',
		component: pay,
		meta: {icon:'', title:'pay'}
	}, {
		path: '/center',
		name: '个人信息',
		component: center,
		meta: {icon:'', title:'center'}
	}
	,{
		path: '/news',
		name: '新闻资讯',
		component: news
	}
	,{
		path: '/jiaoshi',
		name: '教师',
		component: jiaoshi
	}
	,{
		path: '/xueshengchengji',
		name: '学生成绩',
		component: xueshengchengji
	}
	,{
		path: '/learningdataforecast',
		name: '期末成绩预测',
		component: learningdataforecast
	}
	,{
		path: '/discussxuexiziyuan',
		name: '学习资源评论',
		component: discussxuexiziyuan
	}
	,{
		path: '/learningdata',
		name: '学习情况',
		component: learningdata
	}
	,{
		path: '/yonghu',
		name: '用户',
		component: yonghu
	}
	,{
		path: '/tijiaozuoye',
		name: '提交作业',
		component: tijiaozuoye
	}
	,{
		path: '/kehouzuoye',
		name: '课后作业',
		component: kehouzuoye
	}
	,{
		path: '/banjitongzhi',
		name: '班级通知',
		component: banjitongzhi
	}
	,{
		path: '/xuexiziyuan',
		name: '学习资源',
		component: xuexiziyuan
	}
	,{
		path: '/newstype',
		name: '资讯分类',
		component: newstype
	}
	]
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {icon:'', title:'login'}
	},
	{
		path: '/board',
		name: 'board',
		component: Board,
		meta: {icon:'', title:'board'}
	},
	{
		path: '/register',
		name: 'register',
		component: register,
		meta: {icon:'', title:'register'}
	},
	{
		path: '*',
		component: NotFound
	}
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
	mode: 'hash',
	/*hash模式改为history*/
	routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
export default router;
