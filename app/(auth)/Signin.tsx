import {
     View,
     Text,
     ActivityIndicator,
     Dimensions,
     TextInput,
     TouchableOpacity,
     Alert,
} from "react-native";
import React, { useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Breaker, Button, ButtonOutline } from "../../components/auth/";
import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image } from "expo-image";
import { blurhash } from ".";

const { height, width } = Dimensions.get("window");

const LoginScreen = () => {
     // STATES
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [showPassword, setShowPassword] = useState(false);
     const [isLoading, setIsLoading] = useState(false);



     return (
          <View className="flex-1 bg-white">
               {isLoading && (
                    <View className="absolute z-50 h-full w-full justify-center items-center">
                         <View className="h-full w-full justify-center items-center bg-black opacity-[0.5]"></View>
                         <View className="absolute">
                              <ActivityIndicator size="large" color={"white"} />
                         </View>
                    </View>
               )}

               <View className="flex-1 justify-center items-center relative ">
                    <View
                         className="w-full px-5 space-y-5 justify-center"
                         style={{
                              height: height * 0.75,
                         }}
                    >
                         {/* LOGO */}
                         <Animated.View
                              entering={FadeInDown.duration(100).springify()}
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

                         {/* WELCOME TEXT */}
                         <Animated.View
                              className={"justify-center items-center"}
                              entering={FadeInDown.duration(200).delay(200).springify()}
                         >
                              <Text
                                   className="text-neutral-700 text-2xl leading-[60px]"
                                   style={{ fontFamily: "PlusJakartaSansBold" }}
                              >
                                   Tekrar Hoşgeldin !
                              </Text>

                              <Text className="text-neutral-500 text-sm font-medium ">
                                   Lütfen bilgilerinizi giriniz.
                              </Text>
                         </Animated.View>

                         {/* TEXT  INPUT */}
                         <Animated.View
                              className={"py-8 space-y-8 gap-5"}
                              entering={FadeInDown.duration(100).delay(300).springify()}
                         >
                              {/* EMAIL */}
                              <View className="border-2 border-gray-300 rounded-lg">
                                   <TextInput
                                        className="p-4"
                                        onChangeText={setEmail}
                                        value={email}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        placeholderTextColor={"gray"}
                                        placeholder="Email"
                                   />
                              </View>

                              {/* PASSWORD */}
                              <View className="flex-row items-center border-2 border-gray-300 rounded-lg">
                                   <TextInput
                                        className="p-4 w-[90%] mr-2"
                                        onChangeText={setPassword}
                                        value={password}
                                        autoCapitalize="none"
                                        secureTextEntry={!showPassword}
                                        placeholderTextColor={"gray"}
                                        placeholder="Parola"
                                   />

                                   {/* SHOW PASSWORD */}
                                   <TouchableOpacity
                                        className="pl-1"
                                        onPress={() => setShowPassword(!showPassword)}
                                   >
                                        {showPassword ? (
                                             <Feather name="eye" size={20} />
                                        ) : (
                                             <Feather name="eye-off" size={20} />
                                        )}
                                   </TouchableOpacity>
                              </View>
                         </Animated.View>

                         {/* BUTTON */}
                         <Animated.View
                              className={"w-full justify-start"}
                              entering={FadeInDown.duration(100).delay(300).springify()}
                         >
                              <View className="pb-5">
                                   <Button title={"Giriş Yap"} action={() => { router.push("/(tabs)") }} />
                              </View>
                         </Animated.View>

                         {/* DONT HAVE AN ACCOUNT? */}
                         <Animated.View
                              className={"flex-row justify-center items-center"}
                              entering={FadeInDown.duration(100).delay(700).springify()}
                         >
                              <Text
                                   className="text-lg font-medium leading-[35px] text-center text-neutral-500"
                                   style={{ fontFamily: "PlusJakartaSansMedium" }}
                              >
                                   Henüz hesabınız yok mu?{" "}
                              </Text>
                              <TouchableOpacity onPress={() => {
                                   router.navigate("/(auth)/Signup")
                                   setEmail("")
                                   setPassword("")
                              }}>
                                   <Text
                                        style={{ fontFamily: "PlusJakartaSansBold" }}
                                        className="text-lg text-neutral-700 font-medium leading-[35px] text-center"
                                   >
                                        {" "}
                                        Kayıt Ol
                                   </Text>
                              </TouchableOpacity>
                         </Animated.View>
                    </View>
               </View>
          </View>
     );
};

export default LoginScreen;
