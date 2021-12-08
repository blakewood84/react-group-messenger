import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { HiHome } from 'react-icons/hi'
import { IoLogoSlack } from 'react-icons/io5';
import 'react-pro-sidebar/dist/css/styles.css';


const Sidebar = () => {
    return (
        <ProSidebar width="200px" collapsed={false}>
            <SidebarHeader style={{textAlign: 'center', marginTop: '2px'}}>
                <IoLogoSlack style={{height: '50px', width: 'auto'}} />
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<HiHome />}>Home Chat</MenuItem>
                    {/* <SubMenu title="Components">
                        <MenuItem >Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu> */}
                </Menu>
            </SidebarContent>
        </ProSidebar>
    )
}

export default Sidebar