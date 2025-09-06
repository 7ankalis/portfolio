import { IconType } from "react-icons";
import { MdSecurity, MdOutlineDeviceHub } from "react-icons/md";
import { FaShieldAlt, FaFlag, FaRoute} from "react-icons/fa"; // Optional alternative
import { SiDebian, SiUbuntu, SiHackthebox } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { HiArrowUp, HiMagnifyingGlass} from "react-icons/hi2";
import { MdLoop } from "react-icons/md";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
    SiKalilinux,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiMetasploit,
  SiC,
  SiCplusplus,
    SiSharp,
  SiLinux,
  SiCisco,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";
import { FaWindows, FaNetworkWired } from "react-icons/fa";

export const iconLibrary: Record<string, IconType> = {
  // ... existing icons
    arrowUpRight: HiArrowUpRight,
    arrowRight: HiArrowRight,
    email: HiEnvelope,
    globe: HiOutlineGlobeAsiaAustralia,
    person: PiUserCircleDuotone,
    grid: PiGridFourDuotone,
    book: PiBookBookmarkDuotone,
    openLink: HiOutlineLink,
    calendar: HiCalendarDays,
    home: PiHouseDuotone,
    gallery: PiImageDuotone,
    discord: FaDiscord,
    eye: HiOutlineEye,
    eyeOff: HiOutlineEyeSlash,
    github: FaGithub,
    linkedin: FaLinkedin,
    x: FaX,
    twitter: FaXTwitter,
    threads: FaThreads,
    arrowUpRightFromSquare: HiArrowTopRightOnSquare,
    document: HiOutlineDocument,
    rocket: HiOutlineRocketLaunch,
    javascript: SiJavascript,
    nextjs: SiNextdotjs,
    supabase: SiSupabase,
    figma: SiFigma,

    // Add these icons
    kali: SiKalilinux,      // Kali Linux Icon
    linux: SiLinux,         // Linux Icon
    sql: SiMysql,           // Can be replaced with another database logo (e.g., SiPostgresql)
    networking: FaNetworkWired,    // Networking Icon (e.g., Cisco logo)
    git: SiGit,             // Git Icon
    metasploit: SiMetasploit, // Metasploit Icon
    c: SiC,                 // C Language Icon
    cpp: SiCplusplus,       // C++ Language Icon
    csharp: SiSharp,       // C# Language Icon
    facebook: FaFacebook,
    pinterest: FaPinterest,
    whatsapp: FaWhatsapp,
    reddit: FaReddit,
    telegram: FaTelegram,
    firewall: MdSecurity, // Use this as the "firewall" icon
     windows: FaWindows, // Windows logo icon
    debian: SiDebian, // Debian logo icon
    ubuntu: SiUbuntu, // Ubuntu logo icon
    hackthebox: SiHackthebox,
    flag: FaFlag, // Optional alternative for the flag icon
    shield: FaShieldAlt,//
    deviceHub: MdOutlineDeviceHub, // Represents network connections
    gitBranch: BiGitBranch, // Represents branching or redirection
    route: FaRoute,
    arrowUp: HiArrowUp, // Represents an upward direction
    loop: MdLoop, // Represents repetition or a loop
    lens: HiMagnifyingGlass,


};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
