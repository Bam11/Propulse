import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/casestudy", "routes/caseStudy.tsx"),
  index("routes/home.tsx"),
] satisfies RouteConfig;
