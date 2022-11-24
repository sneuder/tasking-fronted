import AddTaskButton from "../../../shared/AddTaskButton";

import {
  NavbarWrapper,
  NavbarItems,
  NavbarItem,
  BurguerMenu,
  DashboardIcon,
  CollectionsIcon,
  NotificationIcon,
  UserAvatar,
  SearchIcon,
  LinkSection,
} from "./elements";

const NavbarDesktop = () => {
  return (
    <NavbarWrapper>
      <NavbarItems>
        <BurguerMenu />
        <NavbarItem>
          <DashboardIcon />
          <LinkSection>Dashboard</LinkSection>
        </NavbarItem>
        <NavbarItem>
          <CollectionsIcon />
          <LinkSection>Collections</LinkSection>
        </NavbarItem>
      </NavbarItems>
      <NavbarItems>
        <AddTaskButton />
        <SearchIcon />
        <NotificationIcon />
        <UserAvatar src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_517194189_373099.jpg" />
      </NavbarItems>
    </NavbarWrapper>
  );
};

export default NavbarDesktop;
