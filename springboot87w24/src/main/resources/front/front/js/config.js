
var projectName = '医院急诊系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '医生信息',
	url: './pages/yishengxinxi/list.html'
}, 
{
	name: '医院病房',
	url: './pages/yiyuanbingfang/list.html'
}, 

{
	name: '医院论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '医院资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot87w24/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"医生信息","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"科室信息","menuJump":"列表","tableName":"keshixinxi"}],"menu":"科室信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"紧急预约","menuJump":"列表","tableName":"jinjiyuyue"}],"menu":"紧急预约管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医院病房","menuJump":"列表","tableName":"yiyuanbingfang"}],"menu":"医院病房管理"},{"child":[{"buttons":["查看","修改","删除","审核","登记费用"],"menu":"病房预约","menuJump":"列表","tableName":"bingfangyuyue"}],"menu":"病房预约管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"病房费用","menuJump":"列表","tableName":"bingfangfeiyong"}],"menu":"病房费用管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"用户健康码","menuJump":"列表","tableName":"yonghujiankangma"}],"menu":"用户健康码管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医院论坛","tableName":"forum"}],"menu":"医院论坛"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","紧急预约"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"},{"child":[{"buttons":["查看","病房预约"],"menu":"医院病房列表","menuJump":"列表","tableName":"yiyuanbingfang"}],"menu":"医院病房模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["支付","查看","删除"],"menu":"紧急预约","menuJump":"列表","tableName":"jinjiyuyue"}],"menu":"紧急预约管理"},{"child":[{"buttons":["查看","删除"],"menu":"病房预约","menuJump":"列表","tableName":"bingfangyuyue"}],"menu":"病房预约管理"},{"child":[{"buttons":["查看","支付"],"menu":"病房费用","menuJump":"列表","tableName":"bingfangfeiyong"}],"menu":"病房费用管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户健康码","menuJump":"列表","tableName":"yonghujiankangma"}],"menu":"用户健康码管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","紧急预约"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"},{"child":[{"buttons":["查看","病房预约"],"menu":"医院病房列表","menuJump":"列表","tableName":"yiyuanbingfang"}],"menu":"医院病房模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
