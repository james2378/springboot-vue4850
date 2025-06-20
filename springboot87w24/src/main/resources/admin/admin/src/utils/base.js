const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot87w24/",
            name: "springboot87w24",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot87w24/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "医院急诊系统"
        } 
    }
}
export default base
