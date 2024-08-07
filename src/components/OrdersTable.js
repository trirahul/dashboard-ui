import React from 'react';
import styled from 'styled-components';

const OrdersContainer = styled.div`
    background: #3E3B47;
    padding: 20px;
    border-radius: 8px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background: #2D2A33;
    }
`;

const TableHeader = styled.th`
    padding: 10px;
    border-bottom: 1px solid #444;
`;

const TableData = styled.td`
    padding: 10px;
    text-align: center;
`;

function OrdersTable() {
    return (
        <OrdersContainer>
            <h3>Recent Orders</h3>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Customer</TableHeader>
                        <TableHeader>Order No.</TableHeader>
                        <TableHeader>Amount</TableHeader>
                        <TableHeader>Status</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    <TableRow>
                        <TableData>Wade Warren</TableData>
                        <TableData>15427456</TableData>
                        <TableData>$124.00</TableData>
                        <TableData>Pending</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Jane Cooper</TableData>
                        <TableData>48968726</TableData>
                        <TableData>$385.00</TableData>
                        <TableData>Delivered</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Guy Hawkins</TableData>
                        <TableData>45638479</TableData>
                        <TableData>$65.00</TableData>
                        <TableData>Cancelled</TableData>
                    </TableRow>
                </tbody>
            </Table>
        </OrdersContainer>
    );
}

export default OrdersTable;
