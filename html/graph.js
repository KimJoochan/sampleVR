window.onload = function () {
    /*막대 그래프의 자료들*/
    var chart2Data = {
        columns: [
            ['판매량', 30, 60, 80, 100, 120],
            ['배달값', 130, 110, 90, 80, 50],
        ],
        type: 'bar',
        types: {
            배달값: 'line',
        }
    }
    /*모바일 지역구 막대그래프 자료*/
    var chart3Data = {
         x: 'x',
        columns: [
            ['x',1,2,3,4,5],
            ['부산진구', 30],
            ['동래구', 20],
            ['사하구', 10],
            ['강서구', 3],
            ['남구', 5],
        ],
        type: 'bar',
        onclick:function(){
            
        }
    }
    /*PC버전 그래프*/
    var chart2 = c3.generate({
        bindto: "#saveChart",
        title: {
            text: '부산 절약 그래프',
        },
        data: chart2Data,


    })
    /*모바일 버전 그래프*/
    var chart_2 = c3.generate({
        bindto: "#saveChart_1",
        title: {
            text: '부산 절약 그래프',
        },
        data: chart2Data,
        legend: {
            show: false
        },
        axis: {
            y: {
                tick: {
                    values: [0, 50, 100, 150]
                }
            }
        }

    })
    /*파이그래프의 자료들*/
    var columns = [
            ['진구', 30],
            ['동래구', 20],
            ['남구', 10],
            ['북구', 15],
            ['강서구', 12],
        ];
    columns = columns.map(function (item) {
        return [
    item[0] + ':' + item[1] + "명",
            item[1]
        ]
    });

    /*PC버전 그래프*/
    var chart = c3.generate({
        bindto: "#chartContainer",
        title: {
            text: '부산 전체 이용자',
        },
        data: {
            columns: columns,
            type: 'pie'
        },
        pie: {
            label: {
                format: function (value, ratio, id) {
                    return d3.format('명')(value);
                }
            }
        }
    });
    /*모바일 버전*/
    var chart_1 = c3.generate({
        bindto: "#chartContainer_1",
        title: {
            text: '부산 전체 이용자',
        },
        data: chart3Data,
        tooltip: {
            show: false
        },
        legend: {
            show: true
        },
    })
}
