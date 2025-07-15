import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      id: "card-001",
      image: "/images/cards/Photo1.png",
      className: "absolute top-10 left-[5%] rotate-[-5deg]",
    },
    {
      id: "card-002",
      image: "/images/cards/Photo2.png",
      className: "absolute top-40 left-[15%] rotate-[-7deg]",
    },
    {
      id: "card-003",
      image: "/images/cards/Photo3.png",
      className: "absolute top-5 left-[30%] rotate-[8deg]",
    },
    {
      id: "card-004",
      image: "/images/cards/Photo4.png",
      className: "absolute top-32 left-[45%] rotate-[10deg]",
    },
    {
      id: "card-005",
      image: "/images/cards/Photo5.png",
      className: "absolute top-20 left-[60%] rotate-[2deg]",
    },
    {
      id: "card-006",
      image: "/images/cards/Photo6.png",
      className: "absolute top-24 left-[75%] rotate-[-7deg]",
    },
    {
      id: "card-007",
      image: "/images/cards/Photo7.png",
      className: "absolute top-8 left-[10%] rotate-[4deg]",
    },
    {
      id: "card-008",
      image: "/images/cards/Photo8.png",
      className: "absolute top-8 left-[25%] rotate-[4deg]",
    },
    {
      id: "card-009",
      image: "/images/cards/Photo9.png",
      className: "absolute top-8 left-[40%] rotate-[4deg]",
    },
    {
      id: "card-010",
      image: "/images/cards/Photo10.png",
      className: "absolute top-8 left-[55%] rotate-[4deg]",
    },
    {
      id: "card-011",
      image: "/images/cards/Photo11.png",
      className: "absolute top-8 left-[70%] rotate-[4deg]",
    },
    {
      id: "card-012",
      image: "/images/cards/Photo12.png",
      className: "absolute top-8 left-[85%] rotate-[4deg]",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-8">
        <p className="text-base md:text-lg font-semibold text-red-600 animate-pulse drop-shadow-md tracking-wide">
          CLICK AND DRAG PHOTOS AROUND TO MOVE THEM!
        </p>
      </div>

      <DraggableCardContainer className="relative flex min-h-[60vh] w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
          Our Slugworks Stories!
        </p>
        {items.map((item) => (
          <DraggableCardBody key={item.id} className={item.className}>
            <img
              src={item.image}
              alt={`Card ${item.id}`}
              className="pointer-events-none relative z-10 h-64 w-64 md:h-80 md:w-80 object-cover"
            />
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
}
