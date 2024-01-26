import Link from "next/link";
import { Breadcrumb } from "rsuite";

const MyBreadcrumb = ({ separator, content }: any) => (
  <Breadcrumb style={{ fontSize: "15px" }} separator={separator}>
    {content.map((item: any, index: any) => (
      <>
        <Breadcrumb.Item
          className="cursor-pointer font-bold font-mono"
          active={item.isActive}
          as={Link}
          href={item}
        >
          {item.name}
        </Breadcrumb.Item>
      </>
    ))}
  </Breadcrumb>
);

export default MyBreadcrumb;
