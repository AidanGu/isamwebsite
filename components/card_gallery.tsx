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
      className: "absolute top-4 left-[10%] rotate-[-6deg]",
    },
    {
      id: "card-002",
      image: "/images/cards/Photo2.png",
      className: "absolute top-28 left-[25%] rotate-[-4deg]",
    },
    {
      id: "card-003",
      image: "/images/cards/Photo3.png",
      className: "absolute top-8 left-[45%] rotate-[5deg]",
    },
    {
      id: "card-004",
      image: "/images/cards/Photo4.png",
      className: "absolute top-36 left-[60%] rotate-[3deg]",
    },
    {
      id: "card-005",
      image: "/images/cards/Photo5.png",
      className: "absolute top-16 left-[75%] rotate-[-2deg]",
    },
    {
      id: "card-006",
      image: "/images/cards/Photo6.png",
      className: "absolute top-[26rem] left-[20%] rotate-[6deg]",
    },
    {
      id: "card-007",
      image: "/images/cards/Photo7.png",
      className: "absolute top-[32rem] left-[40%] rotate-[-4deg]",
    },
    {
      id: "card-008",
      image: "/images/cards/Photo8.png",
      className: "absolute top-[36rem] left-[60%] rotate-[5deg]",
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-x-hidden">
      <div className="text-center mb-10">
        <p className="text-lg md:text-xl font-semibold text-red-600 animate-pulse drop-shadow-md tracking-wide">
          CLICK AND DRAG PHOTOS AROUND TO MOVE THEM!
        </p>
      </div>

      <DraggableCardContainer className="relative min-h-[80vh] w-full overflow-visible">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-center text-2xl font-black text-neutral-400 md:text-4xl z-0">
          Our Slugworks Stories!
        </p>

        {items.map((item) => (
          <DraggableCardBody key={item.id} className={item.className}>
            <img
              src={item.image}
              alt={`Card ${item.id}`}
              className="pointer-events-none relative z-10 h-48 w-48 md:h-64 md:w-64 object-cover aspect-square rounded-3xl shadow-lg"
            />
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
}
