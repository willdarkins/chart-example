import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartsJS, BarElement, registerables, CategoryScale, LinearScale } from 'chart.js'
import { Bar, Chart } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

//register the charts
ChartsJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    ...registerables
)

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}

const options = {
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    legend: {
        labels: {
            fontSize: 26
        }
    }
}

const BarChart = () => {

    cosnt [ chart, setChart ] = useState([]);

    const coinResponse = async () => {
        const { data } = await axios.get(`https://api.coinranking.com/v2/coins/?limit=10`)
    }
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const apiKEY = 'coinrankingfbd1b7f3be77184276f357278c0d575baadb986da891a49f'

    return <>
        <Bar
            data={data}
            options={options}
            height={400}
        />
    </>;
};

export default BarChart;
