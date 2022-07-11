import React, { memo } from 'react';
import styled from "styled-components";

import {
    //공통 항목들
    Chart,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    // 세로 가로 막대그래프 전용
    BarElement,
    // 선 그래프 및 산점도 그래프 전용
    PointElement,
    LineElement,
    // 레이더 차트 전용(선그래프 요소를 포함해야 함)
    RadialLinearScale,
    Filler,
    // 파이 그래프 전용
    ArcElement
} from 'chart.js';
import {Bar, Line, Rader, Pie, Scatter} from 'react-chartjs-2';

ChartEx.register(
    //공통 항목들
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    // 세로 가로 막대 그래프 전용
    BarElement,
    // 선 그래프 및 산점도 그래프 전용
    PointElement,
    LineElement,
    // 레이더 차트 전용(선그래프 요소를 포함해야함)
    RadialLinearScale,
    Filler,
    // 파이그래프 전용
    ArcElement
);

const PlotContainer = styled.div`
    width: 33.3%;
    padding: 20px;
    box-sizing: border-box;
    height: 400px;
`;

const ChartEx = memo(() => {
    const options ={
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
    };

    const options2 = JSON.parse(JSON.stringigy(options));
    options2.indexAxis = 'y';

    const options3 = JSON.parse(JSON.stringify(options));

    const grade = {
        labels: ['철수', '영희', '민수', '수현', '호영'],
        datasets: [{
            label: '국어',
            data: [98, 88, 92, 63, 100],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99 ,132, 1)',
            borderWidth: 1
        }, {
            label: '영어',
            data: [82, 90, 70, 60, 50],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: '수학',
            data: [88, 62, 71, 31, 84],
            backgroundColor: 'rgba(258, 234, 153, 0.5)',
            borderColor: 'rgba(258, 234 ,153, 1)',
            borderWidth: 1
        }]
    };

    const covid19 = {
        labels: ['06/18', '06/19', '06/20', '06/21', '06/22', '06/23', '06/24'],
        datasets: [{
            label: '서울시 확진자',
            data: [1237, 1108, 719, 2042, 1775, 1580, 1605],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99 ,132, 1)',
            borderWidth: 1
        }, {
    
            label: '인천시 확진자',
            data: [260, 278, 222, 481, 404, 372, 366],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const student= {
        labels: ['컴퓨터활용', '퍼블리싱', '프론트엔드', '백엔드', '데이터베이스'],
        datasets: [{
            label: '점수',
            data: [72, 95, 94, 77, 82],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    const studentPie = {
        labels: ['컴퓨터활용', '퍼블리싱', '프론트엔드', '백엔드', '데이터베이스'],
        datasets: [{
            label: '점수',
            data: [72, 95, 94, 77, 82],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    const studentScatter = {
        labels: [98, 88, 92, 63, 100],
        datsets: [{
            label: '영어',
            data: [82, 90, 70, 60, 50],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth:1
         }, {
            label: '수학',
            data: [88, 62, 71, 31, 84],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235, 1)',
            borderWidth:1
         }]
    }

    return (
        <div>
            <h2>Chart</h2>

            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {/*세로 막대 그래프 */}
                <PlotContainer>
                    <h3>세로 막대 그래프</h3>
                    <Bar options={options} data={grade} />                    
                </PlotContainer>

                {/*가로 막대 그래프 */}
                <PlotContainer>
                    <h3>가로 막대 그래프</h3>
                    <Bar options={options2} data={grade} />                    
                </PlotContainer>

                {/*선 그래프 */}
                <PlotContainer>
                    <h3>선 그래프</h3>
                    <Bar options={options} data={covid19} />;
                </PlotContainer>

                {/*레이더 그래프 */}
                <PlotContainer>
                    <h3>레이더 그래프</h3>
                    <Bar options={options3} data={student} />;
                </PlotContainer>
                
                {/*파이 그래프 */}
                <PlotContainer>
                    <h3>파이 그래프</h3>
                    <Bar options={options3} data={studentPie} />;
                </PlotContainer>

                {/*산점도 그래프 */}
                <PlotContainer>
                    <h3>산점도 그래프</h3>
                    <Bar options={options} data={studentScatter} />;
                </PlotContainer>
            </div>
        </div>
    );
});


export default ChartEx;