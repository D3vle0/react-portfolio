import { useState } from "react";
import Content1 from "./content/Content1";
import { motion, AnimatePresence } from "framer-motion";

export default function Item1() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} whileTap={{ scale: 0.95 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <Content1 />}</AnimatePresence>
        </motion.li>
    );
}