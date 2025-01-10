import EventList from "@/components/EventList";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <EventList />
    </div>
  );
}
