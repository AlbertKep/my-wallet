// styles
import { List } from "./Legend.styled";
// types
import type { ConvertedCategory } from "../CategoryBreakdown";

type LegendProps = {
  convertedCategoryStats: ConvertedCategory[];
};

const Legend: React.FC<LegendProps> = ({ convertedCategoryStats }) => {
  return (
    <List>
      {convertedCategoryStats?.map(({ categoryID, icon, name, percentage, total }) => (
        <li key={categoryID}>
          <span>
            <img src={icon} alt={name} />
            {name}
          </span>
          <p>{percentage}%</p>
          <p>{total}zł</p>
        </li>
      ))}
    </List>
  );
};

export default Legend;
