import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Checkout Page" },
    { name: "description", content: "Checkout page machine coding round" },
  ];
}

export default function Home() {
  return <Welcome />;
}
