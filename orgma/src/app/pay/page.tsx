import Image from "next/image";
import styles from "./page.module.css";
import Head from "@/app/components/Head";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Header from "@/app/components/Header/Header";
import Content from "@/app/components/Content/Content";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
      <html lang="en" suppressHydrationWarning>
      <Head/>
      <body>
      <Sidebar/>
      <Header/>
      <Content/>
      <Footer/>
      </body>
      </html>
  );
}
