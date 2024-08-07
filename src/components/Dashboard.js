import React from 'react';
import Sidebar from './Sidebar';
import ActivityChart from './ActivityChart';
import OrdersTable from './OrdersTable';
import Feedback from './Feedback';
import styled from 'styled-components';

const DashboardContainer = styled.div`
    display: flex;
    height: 100vh;
`;

const MainContent = styled.div`
    flex: 1;
    padding: 20px;
    background-color: #2D2A33;
`;

const DashboardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const Stats = styled.div`
    display: flex;
    gap: 20px;
`;

const StatCard = styled.div`
    background: #3E3B47;
    padding: 15px;
    border-radius: 8px;
    min-width: 100px;
    text-align: center;
`;

const FeedbackSection = styled.div`
    margin-top: 20px;
`;

function Dashboard() {
    return (
        <DashboardContainer>
            <Sidebar />
            <MainContent>
                <DashboardHeader>
                    <h1>Dashboard</h1>
                    <Stats>
                        <StatCard>
                            <h3>Total Orders</h3>
                            <p>75</p>
                        </StatCard>
                        <StatCard>
                            <h3>Total Delivered</h3>
                            <p>70</p>
                        </StatCard>
                        <StatCard>
                            <h3>Total Cancelled</h3>
                            <p>5</p>
                        </StatCard>
                        <StatCard>
                            <h3>Total Revenue</h3>
                            <p>$12k</p>
                        </StatCard>
                        <StatCard>
                            <h3>Net Profit</h3>
                            <p>$6759.25</p>
                        </StatCard>
                    </Stats>
                </DashboardHeader>
                <ActivityChart />
                <OrdersTable />
                <FeedbackSection>
                    <Feedback />
                </FeedbackSection>
            </MainContent>
        </DashboardContainer>
    );
}

export default Dashboard;
