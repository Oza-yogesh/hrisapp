import { TabPanelProps } from "../../interfaces/Interfaces";

export default function TabPanel2(props: TabPanelProps) {
  const { children, value, index } = props;

  return <>{value === index && <h1>{children}</h1>}</>;
}
