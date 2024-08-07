import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Chart, registerables } from 'chart.js';
import 'chart.js/auto';

Chart.register(...registerables);

const ChartContainer = styled.div`
    background: #3E3B47;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
`;

const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
        {
            label: 'Activity',
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
            borderColor: '#03DAC6',
            backgroundColor: 'rgba(3, 218, 198, 0.2)',
        },
    ],
};

const options = {
    maintainAspectRatio: false,
};

function ActivityChart() {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Destroy any existing chart instance
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        // Create new chart instance
        chartInstanceRef.current = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options,
        });

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <ChartContainer>
            <h3>Activity</h3>
            <div style={{ height: '300px' }}>
                <canvas ref={chartRef}></canvas>
            </div>
        </ChartContainer>
    );
}

export default ActivityChart;
