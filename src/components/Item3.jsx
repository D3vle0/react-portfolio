import { useState } from "react";
import Content3 from "./content/Content3";
import { motion, AnimatePresence } from "framer-motion";

export default function Item2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} whileTap={{ scale: 0.95 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <Content3 />}</AnimatePresence>
        </motion.li>
    );
}