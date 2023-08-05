import { ActivityIndicator } from "react-native";

interface LoadingProps {
    loading: boolean;
  }
  
  export const Loading = ({ loading }: LoadingProps) => {
    if (loading) {
      return <ActivityIndicator size={"large"} color={"white"} />;
    } else {
      return null;
    }
  };