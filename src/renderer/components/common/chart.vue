<template>
    <section>
        <el-row>
            <el-col :span="12"><div class="grid-content" id="myChart" style="width: 90%;height:450px;margin: 0 auto;"></div></el-col>
            <el-col :span="12"><div class="grid-content" id="myChart2" style="width: 90%;height:450px;margin: 0 auto;"></div></el-col>
        </el-row>
    </section>    
</template>

<script>
    import echarts from 'echarts/lib/echarts';  //引入基本模板
    import 'echarts/lib/chart/pie';     //引入饼图组件
    import 'echarts/lib/component/title';    //引入标题等组件
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/toolbox';
    import 'echarts/lib/component/visualMap';
    export default {
        data(){
            return {}
        },
        mounted(){
            // 基于准备好的dom，初始化echarts实例
            this.myChart = echarts.init(document.getElementById('myChart'));
            this.myChart2 = echarts.init(document.getElementById('myChart2'));
            this.drawChart();
        },
        methods: {
            drawChart(){
                // 指定图表的配置项和数据
                const option = {
                    backgroundColor: '#2c343c',
                    title: {
                        text: '今日数据',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    toolbox: {
                        left: 'center',
                        feature: {
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    series : [
                        {
                            name:'今日数据',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '50%'],
                            data:[
                                {value:335, name:'新增商户'},
                                {value:310, name:'新增订单'},
                                {value:274, name:'新增会员'}
                            ].sort(function (a, b) { return a.value - b.value; }),
                            roseType: 'radius',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 50,
                                    shadowColor: 'rgba(0, 0, 0, 0.6)'
                                }
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                };

                const option2 = {
                    backgroundColor: '#2c343c',
                    title: {
                        text: '总数据',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    toolbox: {
                        left: 'center',
                        feature: {
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    series : [
                        {
                            name:'总数据',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '50%'],
                            data:[
                                {value:500, name:'商户数量'},
                                {value:1200, name:'订单数量'},
                                {value:274, name:'会员数量'}
                            ].sort(function (a, b) { return a.value - b.value; }),
                            roseType: false,
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                };
                this.myChart.setOption(option);
                this.myChart2.setOption(option2);
            }
        }
    }
</script>

<style lang="">
    
</style>