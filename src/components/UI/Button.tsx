import { Pressable, Text } from "react-native";
import { StyledComponent } from "nativewind";

interface Btn {
  Label: string;
  onPress?: () => void;
  className?: string;
}

export const Button = ({ Label, onPress, className, ...rest }: Btn) => {
  return (
    <StyledComponent
      component={Pressable}
      className={`w-full justify-center items-center py-3 px-2 my-2 rounded-md bg-rose-800 active:bg-rose-950`}
      onPress={onPress}
      {...rest}>
      <Text className="text-md font-semibold text-white">{Label}</Text>
    </StyledComponent>
  );
};
