import * as React from "react";
import { View } from "react-native";

interface Template {
  template: "SearchCard" | "SimplesCard" | "SlideCard";
}

export const EmptyCard = ({ template }: Template) => {
  if (template === "SearchCard") {
    return (
      <View className="w-full my-1 p-2 flex-row items-center border-2 border-opacity-0 bg-black rounded-md">
        <View className="w-32 h-32 m-1 bg-slate-500 border-2 border-opacity-0 rounded-md overflow-hidden" />
        <View className="flex-1">
          <View className="m-1 flex-1 bg-slate-500 rounded-md text-md my-2 text-bold text-white justify-center items-center"></View>
          <View className="m-1 flex-1 bg-slate-500 rounded-md text-md my-2 text-bold text-white justify-center items-center"></View>
        </View>
      </View>
    );
  }
  if (template === "SimplesCard") {
    return (
      <View className="flex-row">
        <View className="w-32 h-48 mr-2 my-2 border-2 border-opacity-0 rounded-md overflow-hidden bg-black" />
        <View className="w-32 h-48 mr-2 my-2 border-2 border-opacity-0 rounded-md overflow-hidden bg-black" />
        <View className="w-32 h-48 mr-3 my-2 border-2 border-opacity-0 rounded-md overflow-hidden bg-black" />
      </View>
    );
  }
  if(template === 'SlideCard'){
    return(
      <View className="w-full h-80 items-center bg-black rounded-md overflow-hidden"/>
    )
  }
  return null;
};
