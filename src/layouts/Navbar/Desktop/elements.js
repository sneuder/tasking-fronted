import styled from "styled-components";

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
  width: 10px;
  height: 100%;
`;

const NavbarItem = styled.div``;

// Icons
const BurguerMenu = styled(HiMenu)``;

const DashboardIcon = styled(BsFillGrid1X2Fill)``;

const CollectionsIcon = styled(MdFolder)``;

const SearchIcon = styled(IoSearch)``;

const NotificationIcon = styled(FaRegBell)``;

const UserAvatar = styled.img``;

// Content

const LinkSection = styled.a``;

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
