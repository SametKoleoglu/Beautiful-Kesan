import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { Breaker, Button, ButtonOutline } from "../../components/auth/";
import { Image } from "expo-image";
import { router } from "expo-router";

export const blurhash =
     "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const WelcomeScreen = () => {

     return (
          <SafeAreaView className="flex-1 justify-between items-center bg-white">
               <StatusBar style="auto" />
               <View className="w-full px-5 items-center justify-center space-y-6 h-full">
                    {/* LOGO */}
                    <View className="w-full px-5 items-center">
                         <Animated.View
                              entering={FadeInRight.duration(100).springify()}
                              className={"flex-row justify-center items-center"}
                         >
                              <View>
                                   <View className="w-32 h-32 overflow-hidden">
                                        <Image
                                             source={require("../../assets/images/icon.png")}
                                             placeholder={blurhash}
                                             contentFit="cover"
                                             transition={1000}
                                             style={{ width: '100%', height: '100%' }}
                                        />
                                   </View>
                              </View>
                         </Animated.View>
                    </View>

                    {/* WELCOME TEXT */}
                    <View className="justify-center items-center ">
                         <Animated.Text
                              entering={FadeInDown.duration(100).delay(100).springify()}
                              className="text-neutral-800 text-3xl font-medium leading-[60px]"
                              style={{ fontFamily: "PlusJakartaSansBold" }}
                         >
                              Hoşgeldiniz...
                         </Animated.Text>
                    </View>

                    {/* SIGNIN && SIGNUP */}
                    <View className="w-full justify-start">
                         <Animated.View
                              entering={FadeInDown.duration(100).delay(300).springify()}
                              className={"pb-6"}
                         >
                              <Button title={"Giriş Yap"} action={() => { router.push("/(auth)/Signin") }} />
                         </Animated.View>

                         <Animated.View
                              entering={FadeInDown.duration(100).delay(400).springify()}
                         >
                              <ButtonOutline
                                   title={"Kayıt Ol"}
                                   action={() => { router.push("/(auth)/Signup") }}
                              />
                         </Animated.View>
                    </View>

               </View>
          </SafeAreaView>
     );
};

export default WelcomeScreen;
