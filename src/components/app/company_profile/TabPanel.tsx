import { TabPanelProps } from "../../interfaces/Interfaces";

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return <>{value === index && <h1>{children}</h1>}</>;
}
