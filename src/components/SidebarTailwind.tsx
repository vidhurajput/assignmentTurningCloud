import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import styled from 'styled-components';

interface SidebarProps {
    expand: boolean;
}

const SidebarContainer = styled.div<SidebarProps>`
  transition: width 0.3s;
  width: ${(props) => (props.expand ? '200px' : '50px')};
  overflow: hidden;
  height: 100vh;
  position: fixed;
  background-color: #f8f8f8;
`;

const IconText = styled.span<SidebarProps>`
  padding-left: ${(props) => (props.expand ? '10px' : '0px')};
  white-space: nowrap;
`;

const Sidebar: React.FC = () => {
    const [expand, setExpand] = useState(false);

    return (
        <SidebarContainer expand={expand} className="flex flex-col items-center">
            <IconButton onClick={() => setExpand(!expand)} className="mt-2">
                <HomeIcon />
                <IconText expand={expand}>Home</IconText>
            </IconButton>
            <IconButton className="mt-2">
                <MailIcon />
                <IconText expand={expand}>About</IconText>
            </IconButton>
            <IconButton className="mt-2">
                <MailIcon />
                <IconText expand={expand}>Contact</IconText>
            </IconButton>
        </SidebarContainer>
    );
};

export default Sidebar;
