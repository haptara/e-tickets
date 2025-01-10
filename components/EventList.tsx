"use client";

import { useQuery } from "convex/react";
// import { api } from 

export default function EventList() {
  const events = useQuery(api.events.get);
  return <div>EventList</div>;
}
