import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const DEFAULT_SIZE = 24;
const DEFAULT_COLOR = "black";

const Icon = ({ name, size, color, onPressHandler = () => {} }) => (
  <Feather
    name={name}
    size={size || DEFAULT_SIZE}
    color={color || DEFAULT_COLOR}
    onPress={onPressHandler}
  />
);

export const MenuIcon = ({ size, color }) => <Icon name="menu" />;
export const MoreVerticalIcon = ({ size, color, onPressHandler }) => (
  <Icon name="more-vertical" onPressHandler={() => onPressHandler(true)} />
);
export const SearchIcon = ({ size, color }) => <Icon name="search" />;

export const AddIcon = () => (
  <MaterialCommunityIcons
    name="pencil-circle-outline"
    size={50}
    color="darkorange"
  />
);
