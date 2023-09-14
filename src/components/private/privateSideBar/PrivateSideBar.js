import "./privateSideBar.css"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const PrivateSideBar = props => {

  return (
<div className="testt">
    <Sidebar id="section-sidebar">
      <h6 className="sidebar-title">Seznam kurzů</h6>
      <hr className="sidebar-hr-line"></hr>
      <Menu className="wrapper-sidebar">
        <SubMenu label="Programování">
          <MenuItem onClick={props.handleOnlyJavascript}> Javascript </MenuItem>
          <MenuItem onClick={props.handleOnlyPhp}> PHP </MenuItem>
          <MenuItem> Python </MenuItem>
        </SubMenu>
        <SubMenu label="Designe">
          <MenuItem> Photoshop </MenuItem>
          <MenuItem> Ilustrator </MenuItem>
          <MenuItem> Figma </MenuItem>
        </SubMenu>
        <SubMenu label="Marketing">
          <MenuItem> Google ads </MenuItem>
          <MenuItem> Facebook business manager </MenuItem>
          <MenuItem> Tiktok ads </MenuItem>
        </SubMenu>
        <SubMenu label="Sport">
          <MenuItem> MMA </MenuItem>
          <MenuItem> Hokej </MenuItem>
          <MenuItem> Šachy </MenuItem>
        </SubMenu>
        <SubMenu label="Hobby">
          <MenuItem> Základy vaření </MenuItem>
          <MenuItem> Rybaření </MenuItem>
          <MenuItem> Houbaření </MenuItem>
        </SubMenu>
        <MenuItem className="private-sidebar-btn-all-courses" onClick={props.handleAllCourses}>Všechny kurzy</MenuItem>
      </Menu>
    </Sidebar>
    </div>


  )
}

export default PrivateSideBar