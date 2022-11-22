import styled from "styled-components";

import { SizeIconsNavbar, SizeIconsUser } from "../../../styles/sizesElements";
import colors from "../../../styles/colors";

import { HiMenu } from "react-icons/hi";
import { MdFolder } from "react-icons/md";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const NavbarWrapper = styled.nav`
  background-color: ${colors.lightDark};
  height: 60px;
  padding: 12px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarItems = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
`;

const NavbarItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

// Icons
const BurguerMenu = styled(HiMenu)`
  ${SizeIconsNavbar(26)}
`;

const DashboardIcon = styled(BsFillGrid1X2Fill)`
  ${SizeIconsNavbar(16)}
`;

const CollectionsIcon = styled(MdFolder)`
  ${SizeIconsNavbar(24)}
`;

const SearchIcon = styled(IoSearch)`
  ${SizeIconsUser}
`;

const NotificationIcon = styled(FaRegBell)`
  ${SizeIconsUser}
`;

const UserAvatar = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

// Content

const LinkSection = styled.a`
  color: ${colors.desacGrey};
`;

export {
  NavbarWrapper,
  NavbarItems,
  NavbarItem,
  BurguerMenu,
  DashboardIcon,
  CollectionsIcon,
  SearchIcon,
  NotificationIcon,
  UserAvatar,
  LinkSection,
};
