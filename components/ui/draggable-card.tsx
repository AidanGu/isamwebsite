"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export const DraggableCardBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        cardRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      mouseX.set(deltaX);
      mouseY.set(deltaY);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const [constraints, setConstraints] = React.useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  useEffect(() => {
    const updateConstraints = () => {
      if (cardRef.current) {
        const { offsetWidth, offsetHeight } = cardRef.current;
        setConstraints({
          top: -window.innerHeight / 2 + offsetHeight / 2,
          left: -window.innerWidth / 2 + offsetWidth / 2,
          right: window.innerWidth / 2 - offsetWidth / 2,
          bottom: window.innerHeight / 2 - offsetHeight / 2,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, opacity, willChange: "transform" }}
      drag
      dragConstraints={constraints}
      dragElastic={0.8}
      whileHover={{ scale: 1.15 }}
      initial={{ scale: 1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("cursor-grab transform-3d", className)}
    >
      {children}
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex justify-center items-center w-full h-[50vh] [perspective:3000px]",
        className
      )}
    >
      {children}
    </div>
  );
};
