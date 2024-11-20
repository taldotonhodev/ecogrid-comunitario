import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";

function Card({ title, description }) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default Card;
