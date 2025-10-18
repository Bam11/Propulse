import type { Route } from "./+types/home";
import SectionOne from "~/components/sectionOne";
import SectionTwo from "~/components/sectionTwo";
import SectionThree from "~/components/sectionThree";
import SectionFour from "~/components/sectionFour";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
