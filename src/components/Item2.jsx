import { useState } from "react";
import Content2 from "./content/Content2";
import { motion, AnimatePresence } from "framer-motion";

export default function Item2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} whileTap={{ scale: 0.95 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <Content2 />}</AnimatePresence>
        </motion.li>
    );
}