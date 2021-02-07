import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import {selectUser} from "./features/counter/userSlice"
import { useSelector } from 'react-redux';
import {auth} from "./firebase";


function Sidebar() {
    const user = useSelector(selectUser);
    return (
        <div className="sidebar">
            {/* <h2>I am the sidebar</h2> */}
            <div className="sidebar_top">
                <h3>Anonymous Programmer</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar_channels">
                <div className="sidebar_channels_header">
                    <div className="sidebar_header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar_addChannel"/>
                </div>
                <div className="sidebar_channel_list">
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                </div>
            </div>
            <div className="sidebar_voice">
                <SignalCellularAltIcon 
                    className="sidebar_voiceIcon"
                    fontSize="large"
                    />
                    <div className="sidebar_voiceInfo">
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                    </div>
                    <div className="sidebar_voiceIcon">
                        <InfoOutlinedIcon/>
                        <CallIcon/>
                    </div>
            </div>
            <div className="sidebar_profile">
                <Avatar onClick={() => auth.signOut()} src= {user.photo}/>
                <div className="sidebar_profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>{user.uid.substring(0,5)}</p>
                </div>
                <div className="sidebar_profileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
           
        </div>
    )
}

export default Sidebar;
