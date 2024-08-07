import React from 'react';
import styled from 'styled-components';
import { Home, Assignment, Chat, Settings } from '@mui/icons-material';

const SidebarContainer = styled.div`
    width: 250px;
    background: #2D2A33;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const MenuItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 8px;
    &:hover {
        background: #3E3B47;
        cursor: pointer;
    }
`;

function Sidebar() {
    return (
        <SidebarContainer>
            <MenuItem>
                <Home /> Home
            </MenuItem>
            <MenuItem>
                <Assignment /> Orders
            </MenuItem>
            <MenuItem>
                <Chat /> Feedback
            </MenuItem>
            <MenuItem>
                <Settings /> Settings
            </MenuItem>
        </SidebarContainer>
    );
}

export default Sidebar;
