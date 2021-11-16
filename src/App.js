import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import "./style.css";
import Header from "./components/Header";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import Item3 from "./components/Item3";
import Item4 from "./components/Item4";

export default function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          <Item1 />
          <Item2 />
          <Item3 />
          <Item4 />
        </motion.ul>
      </AnimateSharedLayout>
    </>
  );
}