import Image from "next/image";
import localFont from "next/font/local";
import Header from "./components/Header/Header";
import Herosection from "./components/Herosection/Herosection";
export default function Home() {
  return (
   <div>
      <Header></Header>
      <Herosection></Herosection>
   </div>
  );
}
