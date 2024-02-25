import welcomeBonusIcon from "@/assets/welcome-bonus.svg";
import noBonusIcon from "@/assets/no-bonus.svg";
import firstDepoIcon from "@/assets/first-depo-bonus.svg";

export const bonusData = [
  {
    id: 1,
    title: "Welcome bonus",
    desc: "100% up to €50\n +120 FreeSpins",
    bg: "linear-gradient(to right, #6A0C1D, #DD1F41)",
    icon: welcomeBonusIcon,
  },
  {
    id: 2,
    title: "First Deposit Bonus",
    desc: "100% up to €500\n +120 FreeSpins",
    bg: "linear-gradient(to right, #7B0260, #440079)",
    icon: firstDepoIcon,
  },
  {
    id: 3,
    title: "No Bonus",
    desc: "I do not want\n a Welcome bonus",
    bg: "linear-gradient(to right, #3E027B, #006379)",
    icon: noBonusIcon,
  },
];
