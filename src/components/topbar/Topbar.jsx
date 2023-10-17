import "./topbar.css";
import { PersonTwoTone,SearchTwoTone,ChatBubbleOutlineTwoTone,NotificationAddTwoTone } from '@mui/icons-material';


// import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';

export default function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">FriendHub</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                   <SearchTwoTone/>
                   <input placeholder="search for friend,and post" type="text" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">TimeLine</span>                 
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                         <PersonTwoTone/>
                       <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                         <ChatBubbleOutlineTwoTone/>
                       <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                         <NotificationAddTwoTone/>
                       <span className="topbarIconBadge">3</span>
                    </div>

                </div>
                <img src="/assets/person/first.jpeg" alt="" className="topbarImg"/>
            </div>
        </div>
    )
}